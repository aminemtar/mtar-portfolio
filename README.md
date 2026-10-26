<div align="center">

# 👋 Mohamed Amine Mtar

### Mobile & Web Developer · Software Engineer

**Flutter · SwiftUI · Kotlin · React · Node.js · Spring Boot · AI Integration**

[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-7c6bff?style=for-the-badge)](https://aminemtar.github.io/projet)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamedamine-mtar)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aminemtar)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mtar.mohamedamine@gmail.com)

</div>

---

## 🌟 About This Project

A modern, bilingual (🇬🇧 English / 🇫🇷 Français), animated **personal portfolio** built with **React + Vite** to showcase my work as a **Mobile & Web Developer**.

The design is **light, airy and pastel-themed**, with smooth animations, glassmorphism, and a modular architecture designed for maintainability.

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
- **Icon marquee** — tech stack with real brand logos scrolling infinitely
- **Floating blob backgrounds** drifting in loop
- **Pause-on-hover** on the marquee for easy reading

### 🌍 Internationalization (i18n)

- **Full EN / FR translation** — every text string
- **Persistent language** — saved in `localStorage`
- **Smart detection** — auto-selects based on browser locale
- **Language-aware CV** — swaps between `cv-en.pdf` and `cv-fr.pdf`
- **Smooth toggle** with animated sliding pill

### 📄 Smart CV Download

- **Dropdown menu** with 2 options:
  - 👁 **View online** — opens the language-correct PDF in a new tab
  - ⬇ **Download** — saves with a clean filename (`...-EN.pdf` / `...-FR.pdf`)
- **Auto-selects** the PDF based on active language
- **Cache-busting** via URL hash — no stale PDF ever served
- **3 access points** — navbar, hero, contact section

### 🧩 Content Sections

1. **Hero** — photo, badge "Open to work", typewriter roles, socials, CV download
2. **Marquee** — infinite tech stack with real brand icons
3. **Projects** — 7 real projects (Smart Conseil, Orange, Ooredoo, Cloud Monsters, DevOps, Artie, Clothy)
4. **Skills** — 6 categorized groups (Mobile, Frontend, Backend, AI, DevOps, Languages)
5. **Experience** — animated timeline with 4 real positions
6. **Education & Certifications** — ESPRIT, Lycée + 5 certifications
7. **Contact** — copy-to-clipboard emails, phone, GitHub, LinkedIn, CV

---

## 🛠 Tech Stack

<div align="center">

| Category       | Technologies                                |
| -------------- | ------------------------------------------- |
| **Framework**  | React 18                                    |
| **Build Tool** | Vite                                        |
| **Styling**    | Pure CSS (custom properties, animations)    |
| **Fonts**      | Inter, Fraunces, JetBrains Mono             |
| **Icons**      | [Simple Icons CDN](https://simpleicons.org) |
| **Deployment** | GitHub Pages via `gh-pages`                 |
| **State**      | React Context API + LocalStorage            |

</div>

**No CSS framework, no animation library, no icon package** — everything built from scratch with native web APIs.

---

## 🏗 Architecture

The project follows a **modular, feature-based architecture** so that any change happens in **one place**:

```
projet/
│
├── public/                          # Static assets (served at /)
│   ├── profil.png                   # Profile photo
│   ├── cv-en.pdf                    # English CV
│   └── cv-fr.pdf                    # French CV
│
├── src/
│   │
│   ├── data/                        # 📝 ALL CONTENT LIVES HERE
│   │   ├── info.js                  # Name, photo, contacts, links
│   │   └── translations.jsx         # EN/FR text for every section
│   │
│   ├── context/                     # 🌍 Global state
│   │   └── LanguageContext.jsx      # Language provider + useT() hook
│   │
│   ├── hooks/                       # 🎣 Reusable logic
│   │   ├── useReveal.js             # Intersection Observer for scroll-in
│   │   ├── useMouse.js              # Track cursor position
│   │   ├── useScrollProgress.js     # Page scroll percentage
│   │   └── useClickOutside.js       # Detect click outside an element
│   │
│   ├── components/
│   │   │
│   │   ├── layout/                  # 🧱 Page shell
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CursorHalo.jsx
│   │   │   └── ProgressBar.jsx
│   │   │
│   │   ├── ui/                      # 🧩 Reusable UI pieces
│   │   │   ├── Avatar.jsx           # Photo with animated gradient ring
│   │   │   ├── CVButton.jsx         # Language-aware CV dropdown
│   │   │   └── LangToggle.jsx       # EN/FR pill toggle
│   │   │
│   │   └── sections/                # 📄 Page sections
│   │       ├── Hero.jsx
│   │       ├── Marquee.jsx          # Tech stack with icons
│   │       ├── Projects.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Education.jsx
│   │       └── Contact.jsx
│   │
│   ├── App.jsx                      # 🎯 Assembles everything (~30 lines)
│   ├── App.css                      # Complete stylesheet
│   └── main.jsx                     # React entry point
│
├── index.html
├── vite.config.js                   # `base` set for GH Pages
├── package.json
└── README.md
```

### 🎯 Why this architecture?

| Need                                   | Where to go                                                      |
| -------------------------------------- | ---------------------------------------------------------------- |
| **Change a text** (EN or FR)           | `src/data/translations.jsx` — one file                           |
| **Change your photo/email/LinkedIn**   | `src/data/info.js` — one file                                    |
| **Change the colors**                  | `src/App.css` → `:root` variables                                |
| **Add a project**                      | `src/data/translations.jsx` → `projects` array                   |
| **Add a skill**                        | `src/data/translations.jsx` → `skillGroups`                      |
| **Add a new section**                  | Create a file in `src/components/sections/`, import in `App.jsx` |
| **Add a 3rd language** (e.g., Arabic)  | Duplicate a block in `translations.jsx`                          |
| **Change a specific section's layout** | `src/components/sections/<Name>.jsx`                             |

**No more 1500-line monster files.** Each file has one job.

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
#    - profil.png    (your photo, square crop works best)
#    - cv-en.pdf     (English CV)
#    - cv-fr.pdf     (French CV)

# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the site runs with hot reload.

### Build for production

```bash
npm run build      # generates /dist
npm run preview    # serves the production build locally
```

---

## 📦 Deployment (GitHub Pages)

The project is pre-configured for **GitHub Pages** using the `gh-pages` package.

### One-time setup

**1. Update `vite.config.js`** with your repo name:

```js
export default defineConfig({
  plugins: [react()],
  base: "/projet/", // ← your exact GitHub repo name
});
```

**2. Update `package.json`** with the `homepage` field:

```json
"homepage": "https://aminemtar.github.io/projet"
```

**3. In GitHub → Settings → Pages**, set:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages` · `/ (root)`

### Deploy

```bash
npm run deploy
```

This automatically:

1. Runs `npm run build`
2. Publishes `/dist` to the `gh-pages` branch
3. Your site goes live at `https://aminemtar.github.io/projet`

---

## 🌐 Customization Guide

### 📝 Updating personal info

Edit `src/data/info.js`:

```js
export const INFO = {
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

### 🌍 Updating translations

Edit `src/data/translations.jsx`. Each language has the same structure:

```jsx
export const translations = {
  en: {
    nav: { work: "Work" },
    hero: {
      /* ... */
    } /* ... */,
  },
  fr: {
    nav: { work: "Projets" },
    hero: {
      /* ... */
    } /* ... */,
  },
};
```

**To add a new language** (e.g., Arabic):

1. Duplicate the `en` block
2. Rename to `ar`
3. Translate the values
4. Update `LangToggle.jsx` to show 3 options

### 🎨 Changing colors

Edit `src/App.css` → the `:root` block:

```css
:root {
  --violet: #7c6bff;
  --pink: #ff8bb1;
  --mint: #7fdcb0;
  --sky: #7ec8ff;
  --peach: #ffb98a;
}
```

These 5 variables control the entire theme.

### 🎯 Adding a project

Add a new entry to `projects` in **both** `en` and `fr` blocks:

```js
{
  title: 'My New Project',
  emoji: '🚀',
  date: '2025',
  type: 'Personal',
  text: 'Description of the project...',
  tags: ['React', 'Node.js'],
  tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
}
```

### 📊 Adding a skill to the marquee

Edit `src/components/sections/Marquee.jsx`:

```jsx
const TECH = [
  { name: "Flutter", slug: "flutter" },
  { name: "YourTech", slug: "slug-from-simpleicons" }, // ← add here
];
```

Find slugs on [simpleicons.org](https://simpleicons.org) — the slug is the last part of the URL.

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
- 🌐 **Full-stack capability** — from mobile UI to Node.js / Spring Boot backends
- 🏗 **Clean Architecture** and **Scrum** in every professional context
- 🚀 **CI/CD mindset** — Jenkins, Docker, Grafana, Prometheus
- 🗣 **Trilingual** — Arabic (native), French (professional), English (professional)
- 🧩 **Code quality** — modular architecture, reusable hooks, single source of truth

---

## 🧪 Performance & Quality

- ✅ **Semantic HTML** — accessible nav, buttons with `aria-label`
- ✅ **Zero external animation libraries** — all CSS-based
- ✅ **Zero icon packages** — inline SVGs + Simple Icons CDN
- ✅ **Optimized bundle** — under 250 KB gzipped
- ✅ **Modular architecture** — one file per concern
- ✅ **No runtime dependencies** beyond React + Vite

---

## 📬 Contact

<div align="center">

**Let's build something together.**

|             |                                                                      |
| ----------- | -------------------------------------------------------------------- |
| 📧 Email    | [mtar.mohamedamine@gmail.com](mailto:mtar.mohamedamine@gmail.com)    |
| 📞 Phone    | [+216 22 826 286](tel:+21622826286)                                  |
| 💼 LinkedIn | [mohamedamine-mtar](https://www.linkedin.com/in/mohamed-amine-mtar/) |
| 🐙 GitHub   | [@aminemtar](https://github.com/aminemtar)                           |
| 📍 Location | Tunis, Tunisia — open to France & remote                             |

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

## Playable portfolio world

The entry point is now a third-person Three.js island. Enter the world, then use
WASD, ZQSD or arrow keys to walk. Click/tap the ground to walk to a point, or use
the on-screen direction buttons. At a glowing landmark, press **E** or click the
interaction prompt to open a discovery. Escape closes it.

Six landmarks reveal the profile, real projects (including screenshots and store
links), skills, career, education and contact information. The map buttons walk
the avatar to a landmark. A guided route links the landmarks in order; read each
discovery and choose the next stop. The counter records discoveries for the
current visit. EN/FR is supported. The accessible portfolio button provides the
standard content layout; unavailable WebGL automatically uses that layout.

The world uses procedural geometry and local content. No model downloads or API
keys are required. The canvas is lazy-loaded, pixel ratio is capped and GPU
resources are disposed when leaving. Reduced-motion preferences remove walking
limb animation and camera smoothing.

Validation: `npm run build`, `npm run lint`, `git diff --check`. Browser execution
still requires a local visual check: the workspace Chromium download was blocked
and did not produce a usable browser. Check keyboard/touch movement, six discovery
panels, EN/FR, guided navigation and narrow mobile layouts before deployment.
