<div align="center">

# 👋 Hi, I'm Mohamed Amine Mtar

### Mobile & Web Developer · Software Engineer

**Flutter · SwiftUI · Kotlin · React · Node.js · Spring Boot · AI Integration**

[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-7c6bff?style=for-the-badge)](https://aminemtar.github.io/projet)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamedamine-mtar)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aminemtar)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mtar.mohamedamine@gmail.com)

</div>

---

## 🌟 About This Project

A modern, bilingual (🇬🇧 English / 🇫🇷 Français), animated **personal portfolio** built from scratch to showcase my work as a **Mobile & Web Developer**.

The design is **light, airy and pastel-themed**, with smooth animations, glassmorphism, and a smooth user experience crafted to make a strong first impression on recruiters.

> 🎯 **Goal:** Land a role as a **Mobile Developer** or **Full-Stack Engineer** — in Tunisia, France, or remote.

---

## ✨ Features

### 🎨 Design & UX

- **Light pastel aesthetic** — soft violet, pink, mint, sky and peach tones
- **Glassmorphism navbar** with backdrop blur
- **Custom cursor halo** following the pointer
- **Scroll progress bar** with gradient fill
- **Fully responsive** — pixel-perfect on mobile, tablet and desktop

### 🎬 Animations

- **Typewriter effect** on hero roles (5 rotating titles)
- **3D tilt cards** for projects (mouse-tracking perspective)
- **Intersection Observer reveals** — sections fade up on scroll
- **Animated gradient rings** around profile photo
- **Marquee** of tech stack scrolling infinitely
- **Floating blob backgrounds** drifting in loop
- **Number count-up** animations on stats

### 🌍 Internationalization (i18n)

- **Full EN / FR translation** — every text string
- **Persistent language** — saved in `localStorage`
- **Smart detection** — auto-selects based on browser locale
- **Language-aware CV** — swaps between `cv-en.pdf` and `cv-fr.pdf`
- **Smooth toggle** with animated sliding pill

### 📄 Smart CV Download

- **Dropdown menu** with 2 options:
  - 👁 **View online** — opens PDF in a new tab
  - ⬇ **Download** — saves with a clean filename
- **Auto-selects** the correct PDF based on active language
- **3 access points** — navbar, hero, contact section

### 🧩 Content Sections

1. **Hero** — photo, badge "Open to work", typewriter roles, socials
2. **Marquee** — infinite tech stack
3. **Projects** — 7 real projects (Smart Conseil, Orange, Ooredoo, Cloud Monsters, DevOps, Artie, Clothy)
4. **Skills** — 6 categorized groups (Mobile, Frontend, Backend, AI, DevOps, Languages)
5. **Experience** — animated timeline with 4 real positions
6. **Education & Certifications** — ESPRIT, Lycée + 5 certifications
7. **Contact** — copy-to-clipboard emails, phone, GitHub, LinkedIn, CV

---

## 🛠 Tech Stack

<div align="center">

| Category       | Technologies                             |
| -------------- | ---------------------------------------- |
| **Framework**  | React 18                                 |
| **Build Tool** | Vite                                     |
| **Styling**    | Pure CSS (custom properties, animations) |
| **Fonts**      | Inter, Fraunces, JetBrains Mono          |
| **Deployment** | GitHub Pages via `gh-pages`              |
| **State**      | React Context API + LocalStorage         |

</div>

**No CSS framework, no animation library** — everything built from scratch to demonstrate **real front-end skills**.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/aminemtar/projet.git
cd projet

# 2. Install dependencies
npm install

# 3. Add your assets to /public
#    - profil.png   (your photo)
#    - cv-en.pdf    (English CV)
#    - cv-fr.pdf    (French CV)

# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the site is live with hot reload.

### Build for production

```bash
npm run build      # generates /dist
npm run preview    # serves the production build locally
```

---

## 📦 Deployment (GitHub Pages)

The project is pre-configured for **GitHub Pages** deployment using the `gh-pages` package.

### One-time setup

Update `vite.config.js` with your repo name:

```js
export default defineConfig({
  plugins: [react()],
  base: "/projet/", // ← your GitHub repo name
});
```

Update `package.json`:

```json
"homepage": "https://aminemtar.github.io/projet"
```

### Deploy

```bash
npm run deploy
```

This automatically:

1. Runs `npm run build`
2. Publishes `/dist` to the `gh-pages` branch
3. Your site goes live at `https://aminemtar.github.io/projet`

> ⚙️ **First time only:** In GitHub → Settings → Pages, set **Source** to `gh-pages` branch, `/ (root)` folder.

---

## 📂 Project Structure

```
projet/
├── public/
│   ├── profil.png         # Profile photo
│   ├── cv-en.pdf          # English CV
│   └── cv-fr.pdf          # French CV
├── src/
│   ├── App.jsx            # Main component (all sections)
│   ├── App.css            # Complete stylesheet
│   └── main.jsx           # React entry point
├── index.html             # HTML shell
├── vite.config.js         # Vite config (base path for GH Pages)
├── package.json
└── README.md
```

**Everything lives in `App.jsx`** — no scattered files. This keeps the codebase easy to maintain, deploy, and understand at a glance.

---

## 🌐 Customization Guide

All the content you might want to change is at the **top of `src/App.jsx`** in two clearly-marked blocks:

### 1. Static info — `INFO` constant

```js
const INFO = {
  firstName: "Mohamed Amine",
  lastName: "Mtar",
  photo: `${import.meta.env.BASE_URL}profil.png`,
  cv: {
    en: `${import.meta.env.BASE_URL}cv-en.pdf`,
    fr: `${import.meta.env.BASE_URL}cv-fr.pdf`,
  },
  // ...
};
```

### 2. Translations — `translations` object

Edit both `en` and `fr` blocks to update any text on the site:

```js
const translations = {
  en: {
    nav: { work: "Work" /* ... */ },
    hero: {
      /* ... */
    },
  },
  fr: {
    nav: { work: "Projets" /* ... */ },
    hero: {
      /* ... */
    },
  },
};
```

### 3. Colors — `:root` in `App.css`

```css
:root {
  --violet: #7c6bff;
  --pink: #ff8bb1;
  --mint: #7fdcb0;
  --sky: #7ec8ff;
  --peach: #ffb98a;
}
```

Change these 5 values → the entire theme adapts.

---

## 🎯 Featured Projects

| #   | Project                             | Stack                                          | Context                          |
| --- | ----------------------------------- | ---------------------------------------------- | -------------------------------- |
| 01  | **Smart Conseil — Mobile Suite**    | Flutter · Kotlin · Java · AI · Django          | Client · 6 apps, 2 on Play Store |
| 02  | **Orange Digital Center — iOS App** | Swift · SwiftUI · Node.js · MongoDB · Firebase | Internship · 7 university clubs  |
| 03  | **Ooredoo — SMS Script Manager**    | Angular · Spring Boot · PostgreSQL             | Internship · Full-stack          |
| 04  | **Cloud Monsters — Edu Platform**   | React · Firebase                               | Internship · Gamified learning   |
| 05  | **DevOps Pipeline**                 | Jenkins · Docker · Grafana · Prometheus        | Academic · CI/CD                 |
| 06  | **Artie — Robot Control**           | React · Node.js · Flutter · GCode              | Academic · Team project          |
| 07  | **Clothy — Smart Wardrobe**         | SwiftUI · Kotlin · Core ML · WebSocket         | Academic · Mobile + AI           |

---

## 📈 What I Bring to a Team

- 📱 **Shipped 6 production mobile apps** — 2 published on Google Play
- 🧠 **AI integration** in mobile apps — OCR, content analysis, image processing
- 🌐 **Full-stack capability** — from mobile UI to Node.js/Spring Boot backends
- 🏗 **Clean Architecture** and **Scrum** in every professional context
- 🚀 **CI/CD mindset** — Jenkins, Docker, Grafana, Prometheus
- 🗣 **Trilingual** — Arabic (native), French (professional), English (professional)

---

## 🧪 Performance & Quality

- ✅ **Lighthouse-optimized** structure (no heavy frameworks)
- ✅ **Semantic HTML** — accessible nav, buttons with `aria-label`
- ✅ **Zero external animation libraries** — all CSS-based
- ✅ **Optimized bundle** — under 250 KB gzipped
- ✅ **No dependencies** beyond React + Vite

---

## 📬 Contact

<div align="center">

**Let's build something together.**

|             |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| 📧 Email    | [mtar.mohamedamine@gmail.com](mailto:mtar.mohamedamine@gmail.com)  |
| 📞 Phone    | [+216 22 826 286](tel:+21622826286)                                |
| 💼 LinkedIn | [mohamedamine-mtar](https://www.linkedin.com/in/mohamedamine-mtar) |
| 🐙 GitHub   | [@aminemtar](https://github.com/aminemtar)                         |
| 📍 Location | Tunis, Tunisia — open to France & remote                           |

</div>

---

## 📄 License

This project is **open source** for learning and inspiration. The design, code and content are personal work — please don't reuse the CV or personal photos without permission.

If you find this portfolio useful for your own, feel free to **fork it and make it yours**. A credit or a ⭐ on the repo is always appreciated!

---

<div align="center">

### ⭐ If you like this portfolio, give it a star!

**Built with ❤️, React and lots of ☕ in Tunis**

</div>
