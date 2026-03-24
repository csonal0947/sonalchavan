# Sonal Chavan — Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features a dark/light theme toggle, glass-morphism design, smooth animations, and a fully responsive mobile layout.

## Live Demo

[https://jazzy-cascaron-a4afbc.netlify.app](https://jazzy-cascaron-a4afbc.netlify.app)

---

## Features

- Dark / Light theme toggle with localStorage persistence
- Typing animation on the hero section
- Glass-morphism UI design with animated background orbs
- Fully responsive — mobile, tablet, and desktop
- Project showcase with live demo and GitHub links
- Skills displayed as industry-standard tag/chip layout
- Contact form with success feedback
- SVG icons throughout — no emojis

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | CSS3 (Custom Properties, Flexbox, Grid) |
| Fonts | Plus Jakarta Sans, Inter, Fira Code |
| Deployment | Netlify |

---

## Pages

- **Home** — Hero section with typing animation, stats, and avatar
- **Skills** — Frontend, Backend, Tools & Currently Learning categories
- **Projects** — 8 projects with hover overlays, live demo and GitHub links
- **Contact** — Contact form with info cards

---

## Projects Showcased

1. StockLens — Stock prediction portal (React + Django + PostgreSQL)
2. MyDiary — Django Blog (Python + Django + SQLite)
3. Expense Tracker (Python + Flask + SQLite)
4. Weather Forecast App (JavaScript + OpenWeather API)
5. Twitter Clone (React + Tailwind CSS)
6. Vegetable Market (HTML + CSS + JavaScript)
7. Montana Resort (HTML + CSS)
8. Pomodoro Timer (JavaScript)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/csonal0947/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Folder Structure

```
react_portfolio_app/
├── public/               # Static assets (images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Author

**Sonal Chavan**
- GitHub: [@csonal0947](https://github.com/csonal0947)
- Email: sonalsubhashchavan@gmail.com
- Location: Pune, India

---

## License

This project is open source and available under the [MIT License](LICENSE).

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
