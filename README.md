# Personal Portfolio

My personal portfolio, built with Next.js and TypeScript. Features a minimalist and modern design with dark/light theme support and internationalization.

## 🚀 Features

- 🌓 Dark/Light mode with system preference detection
- 🌍 Internationalization (ES/EN) with browser language detection
- 📱 Responsive design
- 🎨 Minimalist design
- ⚡ Optimized performance
- 🖼️ GitHub avatar integration
- 🔗 Social media links
- 🎯 SEO friendly
- 📂 Dynamic project cards
- 🎨 Theme-aware project backgrounds
- 📱 Responsive grid (1/2/3 columns based on screen size)

## 🛠️ Technologies Used

- Next.js
- TypeScript
- SASS
- React Icons
- React

## 🏃‍♂️ Quick Start

1. Clone the repository:
```bash
git clone https://github.com/dmarcosl/dmarcosl.github.io.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the app for production
- `npm run start`: Start production server
- `npm run lint`: Run linter
- `npm run export`: Export static files for GitHub Pages

## 🚀 Deployment to GitHub Pages

1. Update repository settings:
   - Go to your repository settings
   - In the "Pages" section:
     - Select "GitHub Actions" as the source
     - Set "Branch" to "gh-pages"
   - In "Actions" > "General" > "Workflow permissions":
     - Select "Read and write permissions"
     - Click "Save"

2. Create the deployment workflow:
   - Create `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build and Export
        run: |
          npm run build
          touch out/.nojekyll
          
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
          clean: true
```

3. Update `package.json`:
    - Make sure you have the latest Next.js version (13.4 or higher)
    - No need for export script as it's handled by the new output: 'export' config

4. Update `next.config.js`:
```javascript
const nextConfig = {
  i18n,
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true
  },
  trailingSlash: false,
  output: 'export',
};
```

5. Push your changes to the main branch:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

6. After deployment:
   - The action will create a gh-pages branch
   - Your site will be available at https://dmarcosl.github.io
   - First deployment might take a few minutes to be available

## 📦 Project Structure

```
├── components/
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── locales/
│       ├── en/
│       │   └── common.json
│       └── es/
│           └── common.json
├── styles/
│   └── globals.scss
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── next-i18next.config.js
└── package.json
```

## 🔧 Environment Setup

To resolve linter and TypeScript errors, make sure to:

1. Have all dependencies installed:
```bash
npm install
```

2. Have a `next-env.d.ts` file in the project root (automatically created when starting the project)

3. Have the correct folder structure for translations

## 📝 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 👤 Author

- GitHub: [@dmarcosl](https://github.com/dmarcosl)
- LinkedIn: [@dmarcosl](https://linkedin.com/in/dmarcosl)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/dmarcosl/dmarcosl.github.io/issues) if you want to contribute.

## 📝 Adding New Projects

Projects are dynamically generated from the translation files. To add a new project:

1. Add the project information to both language files (`public/locales/en/common.json` and `public/locales/es/common.json`):

```json
{
  "projects": [
    {
      "id": "unique-id",
      "title": "Project Title",
      "description": "Project description",
      "url": "https://project-url.com",
      "image": "https://image-url.com/image.png"
    }
  ]
}
```

2. Each project requires:
    - `id`: Unique identifier for the project
    - `title`: Project title (translated in each language)
    - `description`: Project description (translated in each language)
    - `url`: Link to the project
    - `image`: URL of the project logo/image

The projects will automatically appear in the grid layout:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## 💅 Theme Configuration

The project includes theme-aware styling for project cards:

```scss
:root[data-theme='light'] {
  --project-bg: #f8f9fa;  // Light theme project background
}

:root[data-theme='dark'] {
  --project-bg: #2d2d2d;  // Dark theme project background
}
```

Project cards automatically adapt to the current theme, maintaining visual consistency.
