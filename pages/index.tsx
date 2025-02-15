import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

// Importar traducciones directamente
import en from '../public/locales/en/common.json';
import es from '../public/locales/es/common.json';

type TabType = 'knowledge' | 'projects';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [locale, setLocale] = useState('en');
  const [activeTab, setActiveTab] = useState<TabType>('knowledge');
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

  const renderCards = () => {
    const items = t(activeTab);
    return items.map((item: any) => (
      <Link 
        key={item.id}
        href={item.url || '#'}
        target={item.url ? '_blank' : undefined}
        className="project-card"
      >
        <div className="project-image">
          <Image
            src={item.image}
            alt={`${item.title} Logo`}
            width={150}
            height={150}
            className="tech-logo"
          />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Link>
    ));
  };

  return (
    <div className="container">
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Personal portfolio" />
        <link 
          rel="icon" 
          href={`https://avatars.githubusercontent.com/u/${t('social.github_avatar')}`}
          type="image/png"
        />
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

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'knowledge' ? 'active' : ''}`}
            onClick={() => setActiveTab('knowledge')}
          >
            {t('tabs.knowledge')}
          </button>
          <button
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            {t('tabs.projects')}
          </button>
        </div>

        <div className="projects">
          {renderCards()}
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