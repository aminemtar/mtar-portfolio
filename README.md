# Cinematic portfolio — Mohamed Amine Mtar

Branch: `feature/cinematic-portfolio`.

A separate cinematic direction with a reflective Three.js hero sculpture,
charcoal/ivory art direction, editorial typography, scroll reveals, seven project
showcases, English/French content, career history, education, skills and direct
contact/CV links. Case studies include screenshots, features and store links.
The car-driving version stays on `feature/threejs-guided-portfolio`.

```bash
npm install
npm run dev
npm run build
```

Mobile navigation, keyboard-accessible case-study dialogs, Escape-to-close,
focus restoration, reduced-motion support and WebGL-independent content are
included. The Three.js decoration is lazy-loaded and makes no external model
requests. Project content remains in `src/data/translations.jsx` and profile links
in `src/data/info.js`.

Validation: production build, lint (existing warnings), EN/FR server rendering
of all seven projects and key sections, local project-image existence, diff checks.
Browser visual QA remains pending: this workspace has no usable Chromium.
