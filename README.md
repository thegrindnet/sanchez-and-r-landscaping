# Sanchez and R Landscaping

A production-ready single-page website for Sanchez and R Landscaping, built around its landscaping, lawn-care, hardscape, and outdoor-design services.

## Technologies

- React
- Vite
- JavaScript / JSX
- Plain CSS
- GitHub Actions and GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Vite writes the production build to `dist`.

## GitHub Pages

1. Create a GitHub repository named `sanchez-and-r-landscaping`.
2. Push this project to its `main` branch.
3. Open **Settings → Pages** in GitHub.
4. Set **Source** to **GitHub Actions**.
5. The included workflow builds and deploys the site after every push to `main`.

Expected URL: `https://thegrindnet.github.io/sanchez-and-r-landscaping/`

Vite uses `base: "./"` so assets load correctly from a GitHub Pages project subdirectory.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── About/
│   │   ├── App/
│   │   ├── Contact/
│   │   ├── Faq/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Navigation/
│   │   ├── Process/
│   │   ├── ServiceArea/
│   │   ├── Services/
│   │   └── WhyChooseUs/
│   ├── utils/constants.js
│   ├── vendor/normalize.css
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

Business contact details, navigation, services, gallery entries, process steps, and FAQs are centralized in `src/utils/constants.js`. Website images are stored in `src/assets/images`.

Before launch, replace the placeholder email and street address in `src/utils/constants.js` with confirmed business information.
