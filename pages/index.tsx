import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

// Importar traducciones directamente
import en from '../public/locales/en/common.json';
import es from '../public/locales/es/common.json';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [locale, setLocale] = useState('en');
  const currentYear = new Date().getFullYear();

  // Función para obtener las traducciones
  const t = (key: string) => {
    const translations = locale === 'es' ? es : en;
    return key.split('.').reduce((obj, k) => obj?.[k], translations as any) || key;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Detectar el idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    const initialLang = ['es', 'en'].includes(browserLang) ? browserLang : 'en';
    setLocale(initialLang);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
    <div className="container">
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleLanguage}>
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="profile">
          <Image
            src={`https://avatars.githubusercontent.com/u/${t('social.github_avatar')}`}
            alt="Profile"
            width={200}
            height={200}
            className="avatar"
          />
          
          <h1>{t('name')}</h1>
          <h2>{t('role')}</h2>
          
          <p className="description">{t('description')}</p>
        </div>

        <div className="projects">
          {t('projects').map((project: any) => (
            <Link 
              key={project.id}
              href={project.url}
              target="_blank"
              className="project-card"
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`${project.title} Logo`}
                  width={150}
                  height={150}
                  className="tech-logo"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <footer>
        <div className="social">
          <a href={`https://github.com/${t('social.github')}`} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={`https://linkedin.com/in/${t('social.linkedin')}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>
          Copyright © {currentYear}
        </p>
        <p>
          {t('built-with')} {t('technologies')}
        </p>
      </footer>
    </div>
  );
} 