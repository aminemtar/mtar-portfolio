import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import './App.css';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    nav: { work: 'Work', skills: 'Skills', experience: 'Experience', education: 'Education', contact: 'Contact', hire: 'Hire me' },

    hero: {
      badge: 'Open to work · Tunis · France · Remote',
      hi: "Hi, I'm",
      rolePrefix: 'I work as a',
      desc: (
        <>
          Software engineering graduate from <strong>ESPRIT</strong> (graduated with
          honors) with <strong>2+ years</strong> of hands-on experience shipping
          real apps. I've built <strong>6 mobile applications</strong> at Smart Conseil
          — 4 Flutter cross-platform, 2 native Android — with <strong>2 published on
            the Google Play Store</strong>. I also integrate AI features like OCR and
          image analysis into mobile apps.
        </>
      ),
      ctaPrimary: 'See my work',
      ctaSoft: 'Get in touch',
      roles: ['Mobile Developer', 'Software Engineer', 'iOS Developer (SwiftUI)', 'Full-Stack Developer', 'AI-Integrated App Builder'],
      stack: {
        role: 'role', focus: 'focus', school: 'school', grade: 'grade', shipped: 'shipped', stack: 'stack',
        roleVal: 'Mobile & Web Dev', focusVal: 'Flutter · iOS · Web', schoolVal: 'ESPRIT · 2024',
        gradeVal: 'Excellent', shippedVal: '2 apps on Play Store', stackVal: 'Flutter · Kotlin · Swift',
      },
      scroll: 'scroll',
    },

    sections: {
      workTag: '01 · Selected work',
      workTitle: <>Projects I'm <em>proud</em> of</>,
      workSub: 'From real client work shipped to the Play Store, to academic deep-dives — each one sharpened how I build software today.',
      skillsTag: '02 · Toolkit',
      skillsTitle: <>What I build <em>with</em></>,
      expTag: '03 · Experience',
      expTitle: <>Where I've <em>grown</em></>,
      eduTag: '04 · Education',
      eduTitle: <>Where I <em>learned</em></>,
      certTag: 'Certifications',
      contactTag: '05 · Contact',
      contactTitle: <>Let's build something <em>together</em></>,
      contactSub: "I'm open to mobile or web development roles — in Tunisia, France, or remote (on-site, hybrid or full-remote). Drop me a line — I usually reply the same day.",
    },

    skillGroups: [
      { title: 'Mobile', items: ['Flutter', 'Dart', 'SwiftUI', 'Swift', 'Kotlin', 'Java (Android)', 'Core ML', 'CoreData', 'Firebase FCM'] },
      { title: 'Frontend', items: ['React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
      { title: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express', 'Django', 'Spring Boot', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
      { title: 'AI & Image', items: ['Vision Kit', 'OCR', 'Content analysis', 'TensorFlow', 'AI integration in apps'] },
      { title: 'Tools & DevOps', items: ['Git', 'GitLab', 'Jenkins', 'Docker', 'Grafana', 'Prometheus', 'CI/CD', 'Clean Architecture', 'Scrum'] },
      { title: 'Spoken languages', items: ['Arabic (Native)', 'French (Professional)', 'English (Professional)'] },
    ],

    projects: [
      {
        title: 'Smart Conseil — Mobile Suite', emoji: '📱', date: 'Apr 2025 — Apr 2026', type: 'Mobile · Client',
        text: 'Built 6 mobile apps for the education sector: 4 Flutter cross-platform (Android + iOS) and 2 native Android (Kotlin & Java). 2 shipped to the Google Play Store end-to-end — architecture, release, monitoring. Integrated AI features for automated content analysis and OCR from images.',
        tags: ['Flutter', 'Kotlin', 'Java', 'Dart', 'AI', 'Django', 'REST APIs'],
        tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
      },
      {
        title: 'Orange Digital Center — iOS App', emoji: '🍊', date: 'Feb 2024 — Aug 2024', type: 'iOS · Internship',
        text: 'Native iOS app (Swift, SwiftUI) for the 7 Orange Digital Center Clubs across Tunisian universities. Custom event calendar, interactive ODC ecosystem map, and real-time push notifications with Firebase Cloud Messaging + CoreData offline storage.',
        tags: ['Swift', 'SwiftUI', 'Node.js', 'MongoDB', 'Firebase', 'CoreData'],
        tint: 'linear-gradient(135deg, #fff4e0 0%, #ffe8d6 100%)',
      },
      {
        title: 'Ooredoo — SMS Script Manager', emoji: '🌐', date: 'Jun 2023 — Aug 2023', type: 'Full-stack · Internship',
        text: 'Web application to manage SMS scripts. Angular frontend + Spring Boot REST API, authentication and role-based access via Spring Security. Optimised PostgreSQL queries and the data access layer, cutting data retrieval time by 15%.',
        tags: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'TypeScript'],
        tint: 'linear-gradient(135deg, #e8ffe6 0%, #d6f5e8 100%)',
      },
      {
        title: 'Cloud Monsters — Edu Platform', emoji: '🎮', date: 'Jun 2022 — Jul 2022', type: 'Web · Internship',
        text: "Interactive educational web platform in ReactJS that gamifies children's books. Managed users, books, levels and content through Firebase (auth, real-time DB, storage). Designed a responsive UI tailored to a young audience.",
        tags: ['React', 'JavaScript', 'HTML/CSS', 'Firebase'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffe0e8 100%)',
      },
      {
        title: 'DevOps Pipeline', emoji: '⚙️', date: 'Sept 2023 — Jan 2024', type: 'Academic',
        text: 'Modern CI/CD pipeline with Jenkins, Docker, Grafana and Prometheus. Angular front-end talking to a Spring Boot backend, with automated tests, containerisation and infrastructure as code for reliable, secure deployments.',
        tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Spring Boot'],
        tint: 'linear-gradient(135deg, #f3e0ff 0%, #e8d6ff 100%)',
      },
      {
        title: 'Artie — Robot Control', emoji: '🤖', date: 'Jan 2023 — Jun 2023', type: 'Academic · Team',
        text: 'A React dashboard and Node.js backend for managing users and steering a robot, plus a Flutter mobile app to control the robot and convert images into GCode.',
        tags: ['React', 'Node.js', 'Flutter', 'GCode'],
        tint: 'linear-gradient(135deg, #e0fff5 0%, #d6f5ee 100%)',
      },
      {
        title: 'Clothy — Smart Wardrobe', emoji: '👕', date: 'Sept 2022 — Apr 2023', type: 'Academic · Mobile',
        text: 'Outfit planning app with image recognition (Core ML, TensorFlow) and real-time chat over WebSockets. Built with SwiftUI, Kotlin, Node.js and MongoDB.',
        tags: ['SwiftUI', 'Kotlin', 'Core ML', 'TensorFlow', 'WebSocket', 'MongoDB'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffd6e8 100%)',
      },
    ],

    experience: [
      {
        role: 'Mobile Application Developer', company: 'Smart Conseil', period: 'Apr 2025 — Apr 2026 · Tunis',
        points: [
          'Developed 6 mobile applications for the education sector: 4 cross-platform Flutter apps and 2 native Android apps (Kotlin & Java).',
          'Published 2 applications on the Google Play Store — full cycle from architecture design to store release and post-release monitoring.',
          'Integrated AI features into mobile apps for automated content analysis and processing (Vision Kit, OCR from images).',
          'Integrated REST APIs with robust state management and error handling; contributed to backend APIs built with Django.',
          'Built new feature modules and handled corrective and evolutive maintenance of production apps.',
          'Worked in Agile / Scrum with Git and GitLab, code reviews and close collaboration with design and backend teams.',
        ],
      },
      {
        role: 'Web & Mobile Developer', company: 'Orange Tunisie', period: 'Feb 2024 — Aug 2024 · Tunis',
        points: [
          'Built a native iOS app (Swift, SwiftUI) for the 7 Orange Digital Center Clubs across Tunisian universities.',
          'Designed a custom event calendar and an interactive map of the ODC ecosystem and its clubs.',
          'Implemented real-time push notifications and interactions (likes, comments) with Firebase Cloud Messaging + CoreData for offline access.',
          'Developed the Node.js / MongoDB backend: REST APIs, data modelling, response times under 200 ms.',
          'Applied Clean Architecture and worked in Scrum sprints within a team of 6.',
        ],
      },
      {
        role: 'Web Full-Stack Developer', company: 'Ooredoo Tunisie', period: 'Jun 2023 — Aug 2023 · Tunis',
        points: [
          'Developed a web application for managing SMS scripts — Angular frontend + Spring Boot REST API backend.',
          'Implemented authentication and role-based access control with Spring Security.',
          'Optimised PostgreSQL queries and the data access layer, reducing data retrieval time by 15%.',
          'Delivered a responsive, mobile-first interface following Agile practices.',
        ],
      },
      {
        role: 'Web Frontend Developer', company: 'Cloud Monsters Tunisia', period: 'Jun 2022 — Jul 2022 · Nabeul',
        points: [
          "Developed an interactive educational web platform in ReactJS that gamifies children's books.",
          'Managed users, books, levels and content through Firebase: authentication, real-time database and storage.',
          'Designed a responsive UI tailored to a young audience.',
        ],
      },
    ],

    education: {
      esprit: { school: 'ESPRIT', program: "Engineer's Degree · Computer Software Engineering", note: '2019 – 2024 · Graduated with honors' },
      lycee: { school: 'Lycée Tayeb Mhiri, Nabeul', program: 'Baccalauréat · Sciences Techniques', note: '2013 – 2017' },
      certs: [
        { name: 'Programming Foundations: Databases', by: 'LinkedIn Learning' },
        { name: 'Build Your First React Website', by: 'Coursera' },
        { name: 'Build Your First React Website (Part II)', by: 'Coursera' },
        { name: 'Responsive Web Design', by: 'freeCodeCamp' },
        { name: 'Back End Development and APIs', by: 'freeCodeCamp' },
      ],
    },

    contact: {
      copied: 'Copied ✓',
      backTop: 'Back to top ↑',
      footerMade: 'Built with React · Made with ☕ in',
    },
  },

  fr: {
    nav: { work: 'Projets', skills: 'Compétences', experience: 'Expérience', education: 'Formation', contact: 'Contact', hire: 'Me recruter' },

    hero: {
      badge: 'Ouvert aux opportunités · Tunis · France · Télétravail',
      hi: 'Bonjour, je suis',
      rolePrefix: 'Je travaille comme',
      desc: (
        <>
          Diplômé ingénieur en informatique de <strong>l'ESPRIT</strong> (mention
          excellente) avec <strong>plus de 2 ans</strong> d'expérience concrète sur
          des applications en production. J'ai développé <strong>6 applications
            mobiles</strong> chez Smart Conseil — 4 multiplateformes Flutter et 2 natives
          Android — dont <strong>2 publiées sur le Google Play Store</strong>. J'intègre
          également des fonctionnalités d'IA comme l'OCR et l'analyse d'images dans
          les applications mobiles.
        </>
      ),
      ctaPrimary: 'Voir mes projets',
      ctaSoft: 'Me contacter',
      roles: ['Développeur Mobile', 'Ingénieur Informatique', 'Développeur iOS (SwiftUI)', 'Développeur Full-Stack', 'Intégrateur IA Mobile'],
      stack: {
        role: 'poste', focus: 'spécialité', school: 'école', grade: 'mention', shipped: 'publié', stack: 'stack',
        roleVal: 'Mobile & Web', focusVal: 'Flutter · iOS · Web', schoolVal: 'ESPRIT · 2024',
        gradeVal: 'Mention Excellente', shippedVal: '2 apps sur Play Store', stackVal: 'Flutter · Kotlin · Swift',
      },
      scroll: 'défiler',
    },

    sections: {
      workTag: '01 · Projets choisis',
      workTitle: <>Des projets dont je suis <em>fier</em></>,
      workSub: "Des applications clients publiées sur le Play Store aux projets académiques approfondis — chacun a façonné ma manière de concevoir des logiciels.",
      skillsTag: '02 · Boîte à outils',
      skillsTitle: <>Ce avec quoi je <em>construis</em></>,
      expTag: '03 · Expérience',
      expTitle: <>Là où j'ai <em>évolué</em></>,
      eduTag: '04 · Formation',
      eduTitle: <>Là où j'ai <em>appris</em></>,
      certTag: 'Certifications',
      contactTag: '05 · Contact',
      contactTitle: <>Construisons quelque chose <em>ensemble</em></>,
      contactSub: "Je suis ouvert aux postes en développement mobile ou web — en Tunisie, en France, ou en télétravail (sur site, hybride ou full-remote). Écrivez-moi — je réponds généralement le jour même.",
    },

    skillGroups: [
      { title: 'Mobile', items: ['Flutter', 'Dart', 'SwiftUI', 'Swift', 'Kotlin', 'Java (Android)', 'Core ML', 'CoreData', 'Firebase FCM'] },
      { title: 'Frontend', items: ['React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
      { title: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express', 'Django', 'Spring Boot', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
      { title: 'IA & Image', items: ['Vision Kit', 'OCR', 'Analyse de contenu', 'TensorFlow', 'Intégration IA mobile'] },
      { title: 'Outils & DevOps', items: ['Git', 'GitLab', 'Jenkins', 'Docker', 'Grafana', 'Prometheus', 'CI/CD', 'Clean Architecture', 'Scrum'] },
      { title: 'Langues', items: ['Arabe (Natif)', 'Français (Professionnel)', 'Anglais (Professionnel)'] },
    ],

    projects: [
      {
        title: 'Smart Conseil — Suite Mobile', emoji: '📱', date: 'Avr 2025 — Avr 2026', type: 'Mobile · Client',
        text: "Développement de 6 applications mobiles pour le secteur éducatif : 4 multiplateformes Flutter (Android + iOS) et 2 natives Android (Kotlin & Java). 2 applications publiées sur le Google Play Store, de l'architecture à la mise en production et au suivi post-release. Intégration de fonctionnalités IA pour l'analyse automatisée de contenu et l'OCR sur images.",
        tags: ['Flutter', 'Kotlin', 'Java', 'Dart', 'IA', 'Django', 'REST APIs'],
        tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
      },
      {
        title: 'Orange Digital Center — App iOS', emoji: '🍊', date: 'Fév 2024 — Août 2024', type: 'iOS · Stage',
        text: "Application iOS native (Swift, SwiftUI) pour les 7 Clubs Orange Digital Center dans les universités tunisiennes. Calendrier d'événements personnalisé, carte interactive de l'écosystème ODC, et notifications push en temps réel via Firebase Cloud Messaging + stockage offline CoreData.",
        tags: ['Swift', 'SwiftUI', 'Node.js', 'MongoDB', 'Firebase', 'CoreData'],
        tint: 'linear-gradient(135deg, #fff4e0 0%, #ffe8d6 100%)',
      },
      {
        title: 'Ooredoo — Gestionnaire de scripts SMS', emoji: '🌐', date: 'Juin 2023 — Août 2023', type: 'Full-stack · Stage',
        text: "Application web de gestion de scripts SMS. Frontend Angular + API REST Spring Boot, authentification et contrôle d'accès par rôles avec Spring Security. Optimisation des requêtes PostgreSQL et de la couche d'accès aux données, réduisant de 15% le temps de récupération.",
        tags: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'TypeScript'],
        tint: 'linear-gradient(135deg, #e8ffe6 0%, #d6f5e8 100%)',
      },
      {
        title: 'Cloud Monsters — Plateforme éducative', emoji: '🎮', date: 'Juin 2022 — Juil 2022', type: 'Web · Stage',
        text: "Plateforme éducative interactive en ReactJS qui gamifie les livres pour enfants. Gestion des utilisateurs, livres, niveaux et contenus via Firebase (auth, base temps réel, stockage). Conception d'une UI responsive adaptée à un jeune public.",
        tags: ['React', 'JavaScript', 'HTML/CSS', 'Firebase'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffe0e8 100%)',
      },
      {
        title: 'Pipeline DevOps', emoji: '⚙️', date: 'Sept 2023 — Jan 2024', type: 'Académique',
        text: "Pipeline CI/CD moderne avec Jenkins, Docker, Grafana et Prometheus. Frontend Angular connecté à un backend Spring Boot, avec tests automatisés, conteneurisation et infrastructure as code pour des déploiements fiables et sécurisés.",
        tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Spring Boot'],
        tint: 'linear-gradient(135deg, #f3e0ff 0%, #e8d6ff 100%)',
      },
      {
        title: 'Artie — Contrôle de robot', emoji: '🤖', date: 'Jan 2023 — Juin 2023', type: 'Académique · Équipe',
        text: "Dashboard React et backend Node.js pour gérer les utilisateurs et piloter un robot, plus une application Flutter pour contrôler le robot et convertir des images en GCode.",
        tags: ['React', 'Node.js', 'Flutter', 'GCode'],
        tint: 'linear-gradient(135deg, #e0fff5 0%, #d6f5ee 100%)',
      },
      {
        title: 'Clothy — Garde-robe intelligente', emoji: '👕', date: 'Sept 2022 — Avr 2023', type: 'Académique · Mobile',
        text: "Application de planification de tenues avec reconnaissance d'images (Core ML, TensorFlow) et chat en temps réel via WebSockets. Développée avec SwiftUI, Kotlin, Node.js et MongoDB.",
        tags: ['SwiftUI', 'Kotlin', 'Core ML', 'TensorFlow', 'WebSocket', 'MongoDB'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffd6e8 100%)',
      },
    ],

    experience: [
      {
        role: 'Développeur Mobile', company: 'Smart Conseil', period: 'Avr 2025 — Avr 2026 · Tunis',
        points: [
          "Développement de 6 applications mobiles pour le secteur éducatif : 4 multiplateformes Flutter et 2 natives Android (Kotlin & Java).",
          "Publication de 2 applications sur le Google Play Store — cycle complet de la conception d'architecture à la mise en production et au suivi.",
          "Intégration de fonctionnalités IA dans les applis mobiles pour l'analyse et le traitement automatisés de contenu (Vision Kit, OCR sur images).",
          "Intégration d'API REST avec gestion d'état robuste et gestion d'erreurs ; contribution aux API backend en Django.",
          "Développement de nouveaux modules et maintenance corrective et évolutive d'applications en production.",
          "Travail en Agile / Scrum avec Git et GitLab, revues de code et collaboration étroite avec les équipes design et backend.",
        ],
      },
      {
        role: 'Développeur Web & Mobile', company: 'Orange Tunisie', period: 'Fév 2024 — Août 2024 · Tunis',
        points: [
          "Développement d'une application iOS native (Swift, SwiftUI) pour les 7 Clubs Orange Digital Center dans les universités tunisiennes.",
          "Conception d'un calendrier d'événements personnalisé et d'une carte interactive de l'écosystème ODC et ses clubs.",
          "Mise en place de notifications push en temps réel et d'interactions (likes, commentaires) avec Firebase Cloud Messaging + CoreData pour l'accès offline.",
          "Développement du backend Node.js / MongoDB : API REST, modélisation des données, temps de réponse sous 200 ms.",
          "Application de la Clean Architecture et travail en sprints Scrum au sein d'une équipe de 6.",
        ],
      },
      {
        role: 'Développeur Web Full-Stack', company: 'Ooredoo Tunisie', period: 'Juin 2023 — Août 2023 · Tunis',
        points: [
          "Développement d'une application web de gestion de scripts SMS — frontend Angular + backend API REST Spring Boot.",
          "Mise en place de l'authentification et du contrôle d'accès par rôles avec Spring Security.",
          "Optimisation des requêtes PostgreSQL et de la couche d'accès aux données, réduisant de 15% le temps de récupération.",
          "Livraison d'une interface responsive, mobile-first, en suivant les pratiques Agile.",
        ],
      },
      {
        role: 'Développeur Web Frontend', company: 'Cloud Monsters Tunisia', period: 'Juin 2022 — Juil 2022 · Nabeul',
        points: [
          "Développement d'une plateforme éducative interactive en ReactJS qui gamifie les livres pour enfants.",
          "Gestion des utilisateurs, livres, niveaux et contenus via Firebase : authentification, base de données temps réel et stockage.",
          "Conception d'une UI responsive adaptée à un jeune public.",
        ],
      },
    ],

    education: {
      esprit: { school: 'ESPRIT', program: "Diplôme d'Ingénieur · Génie Logiciel", note: '2019 – 2024 · Diplômé avec mention excellente' },
      lycee: { school: 'Lycée Tayeb Mhiri, Nabeul', program: 'Baccalauréat · Sciences Techniques', note: '2013 – 2017' },
      certs: [
        { name: 'Programming Foundations: Databases', by: 'LinkedIn Learning' },
        { name: 'Build Your First React Website', by: 'Coursera' },
        { name: 'Build Your First React Website (Part II)', by: 'Coursera' },
        { name: 'Responsive Web Design', by: 'freeCodeCamp' },
        { name: 'Back End Development and APIs', by: 'freeCodeCamp' },
      ],
    },

    contact: {
      copied: 'Copié ✓',
      backTop: 'Retour en haut ↑',
      footerMade: 'Fait avec React · Fabriqué avec ☕ à',
    },
  },
};

/* ============================================================
   LANGUAGE CONTEXT
   ============================================================ */
const LangCtx = createContext({ lang: 'en', setLang: () => { }, t: translations.en });
const useT = () => useContext(LangCtx);

/* ============================================================
   STATIC INFO
   ============================================================ */
const INFO = {
  firstName: 'Mohamed Amine',
  lastName: 'Mtar',
  photo: `${import.meta.env.BASE_URL}profil.png`,
  location: { en: 'Tunis, Tunisia', fr: 'Tunis, Tunisie' },
  emails: ['mtar.mohamedamine@gmail.com'],
  phone: '+216 22 826 286',
  phoneHref: 'tel:+21622826286',
  github: 'https://github.com/aminemtar',
  linkedin: 'https://www.linkedin.com/in/mohamedamine-mtar',
};

/* ============================================================
   HOOKS
   ============================================================ */
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const useMouse = () => {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);
  return p;
};

const useScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => {
      const t = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(t / max);
    };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return p;
};

/* ============================================================
   CURSOR + PROGRESS
   ============================================================ */
const CursorHalo = () => {
  const { x, y } = useMouse();
  return <div className="cursor-halo" style={{ left: x, top: y }} />;
};

const Progress = () => {
  const p = useScrollProgress();
  return (
    <div className="progress-rail">
      <div className="progress-fill" style={{ width: `${p * 100}%` }} />
    </div>
  );
};

/* ============================================================
   AVATAR — photo with animated gradient ring
   ============================================================ */
const Avatar = ({ size = 280 }) => {
  const [error, setError] = useState(false);
  const initials = `${INFO.firstName[0]}${INFO.lastName[0]}`;

  return (
    <div className="avatar-wrap" style={{ width: size, height: size }}>
      <div className="avatar-orbit" />
      <div className="avatar-ring" />
      <div className="avatar-photo">
        {!error ? (
          <img
            src={INFO.photo}
            alt={`${INFO.firstName} ${INFO.lastName}`}
            onError={() => setError(true)}
          />
        ) : (
          <div className="avatar-fallback">
            <span>{initials}</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
const LangToggle = () => {
  const { lang, setLang } = useT();
  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
      aria-label="Toggle language"
    >
      <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
      <span className={`lang-option ${lang === 'fr' ? 'active' : ''}`}>FR</span>
      <span
        className="lang-slider"
        style={{ transform: `translateX(${lang === 'en' ? 0 : 100}%)` }}
      />
    </button>
  );
};

/* ============================================================
   NAVBAR
   ============================================================ */
const Navbar = () => {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#" className="brand">
        <span className="brand-mark">M</span>
        <span className="brand-text">
          Mtar<span className="brand-dot">.</span>
        </span>
      </a>
      <div className="nav-menu">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-item">
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <LangToggle />
        <a href="#contact" className="nav-hire">
          <span>{t.nav.hire}</span>
          <span className="hire-dot" />
        </a>
      </div>
    </nav>
  );
};

/* ============================================================
   HERO
   ============================================================ */
const Hero = () => {
  const { t, lang } = useT();
  const [typed, setTyped] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    setTyped('');
    setIdx(0);
    setDel(false);
  }, [lang]);

  useEffect(() => {
    const current = t.hero.roles[idx];
    if (!current) return;
    const speed = del ? 35 : 80;
    const timer = setTimeout(() => {
      if (!del) {
        setTyped(current.slice(0, typed.length + 1));
        if (typed.length === current.length) setTimeout(() => setDel(true), 1600);
      } else {
        setTyped(current.slice(0, typed.length - 1));
        if (typed.length === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % t.hero.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typed, del, idx, t, lang]);

  const s = t.hero.stack;

  return (
    <section className="hero">
      <div className="hero-blobs">
        <div className="blob blob-peach" />
        <div className="blob blob-mint" />
        <div className="blob blob-lavender" />
        <div className="blob blob-sky" />
      </div>

      <div className="hero-inner">
        <div className="hero-top">
          <Avatar size={110} />
          <div className="hero-badge">
            <span className="badge-dot" />
            {t.hero.badge}
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-line">{t.hero.hi}</span>
          <span className="hero-line hero-name">
            {INFO.firstName} <em>{INFO.lastName}</em>
          </span>
        </h1>

        <div className="hero-role">
          <span className="role-static">{t.hero.rolePrefix}</span>
          <span className="role-typed">
            {typed}
            <span className="role-cursor" />
          </span>
        </div>

        <p className="hero-desc">{t.hero.desc}</p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            <span>{t.hero.ctaPrimary}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-soft">
            <span>{t.hero.ctaSoft}</span>
          </a>
        </div>

        <div className="hero-socials">
          <a href={INFO.github} target="_blank" rel="noreferrer" className="social-chip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="social-chip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${INFO.emails[0]}`} className="social-chip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="hero-card-stack">
        <div className="stack-card stack-1" />
        <div className="stack-card stack-2" />
        <div className="stack-card stack-3">
          <div className="stack-header">
            <span className="stack-dot dot-red" />
            <span className="stack-dot dot-yellow" />
            <span className="stack-dot dot-green" />
            <span className="stack-file">mtar.profile</span>
          </div>
          <div className="stack-body">
            <div className="stack-row">
              <span className="stack-key">{s.role}</span>
              <span className="stack-val">{s.roleVal}</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">{s.focus}</span>
              <span className="stack-val">{s.focusVal}</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">{s.school}</span>
              <span className="stack-val">{s.schoolVal}</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">{s.grade}</span>
              <span className="stack-val stack-green">{s.gradeVal}</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">{s.shipped}</span>
              <span className="stack-val">{s.shippedVal}</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">{s.stack}</span>
              <span className="stack-val">{s.stackVal}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
};

/* ============================================================
   MARQUEE
   ============================================================ */
const Marquee = () => {
  const items = [
    'Flutter', '✦', 'SwiftUI', '✦', 'Kotlin', '✦', 'React',
    '✦', 'Angular', '✦', 'Node.js', '✦', 'Django', '✦',
    'NestJS', '✦', 'Spring Boot', '✦', 'MongoDB', '✦', 'AI',
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <div className="marquee-group" key={i}>
            {items.map((it, j) => (
              <span key={j} className={it === '✦' ? 'mq-star' : 'mq-word'}>
                {it}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   PROJECTS
   ============================================================ */
const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useReveal();
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((r.height / 2 - y) / r.height) * 8;
    const ry = ((x - r.width / 2) / r.width) * 8;
    setStyle({
      transform: `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`,
    });
  };
  const onLeave = () => setStyle({ transform: 'perspective(1200px)' });

  return (
    <article
      ref={ref}
      className={`project ${visible ? 'project-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        ref={cardRef}
        className="project-inner"
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="project-top" style={{ background: project.tint }}>
          <div className="project-badge">{project.type}</div>
          <div className="project-emoji">{project.emoji}</div>
          <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
        </div>

        <div className="project-body">
          <div className="project-date">{project.date}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-text">{project.text}</p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();

  return (
    <section id="work" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">{t.sections.workTag}</span>
        <h2 className="section-title">{t.sections.workTitle}</h2>
        <p className="section-sub">{t.sections.workSub}</p>
      </div>

      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

/* ============================================================
   SKILLS
   ============================================================ */
const Skills = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();
  const colors = ['#7c9cff', '#ff9bb8', '#8fe1b8', '#c8a8ff', '#ffc48f', '#7fdcb0'];

  return (
    <section id="skills" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">{t.sections.skillsTag}</span>
        <h2 className="section-title">{t.sections.skillsTitle}</h2>
      </div>

      <div className="skills-grid">
        {t.skillGroups.map((g, i) => (
          <div
            key={g.title}
            className={`skill-card ${visible ? 'in' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="skill-card-head">
              <span className="skill-dot" style={{ background: colors[i] }} />
              <h3>{g.title}</h3>
            </div>
            <div className="skill-pills">
              {g.items.map((it) => (
                <span key={it} className="pill" style={{ borderColor: colors[i] + '55' }}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ============================================================
   EXPERIENCE
   ============================================================ */
const Experience = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">{t.sections.expTag}</span>
        <h2 className="section-title">{t.sections.expTitle}</h2>
      </div>

      <div className="timeline">
        {t.experience.map((it, i) => (
          <div
            key={it.company}
            className={`tl-item ${visible ? 'in' : ''}`}
            style={{ transitionDelay: `${i * 130}ms` }}
          >
            <div className="tl-node">
              <span className="tl-dot" />
              {i !== t.experience.length - 1 && <span className="tl-line" />}
            </div>
            <div className="tl-card">
              <div className="tl-head">
                <div>
                  <h3 className="tl-role">{it.role}</h3>
                  <div className="tl-company">{it.company}</div>
                </div>
                <span className="tl-period">{it.period}</span>
              </div>
              <ul className="tl-points">
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ============================================================
   EDUCATION + CERTIFICATIONS
   ============================================================ */
const Education = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();
  const { esprit, lycee, certs } = t.education;

  return (
    <section id="education" className="section">
      <div ref={ref} className={`edu-wrap ${visible ? 'in' : ''}`}>
        <div className="edu-card">
          <span className="section-tag">{t.sections.eduTag}</span>
          <h2 className="section-title">{t.sections.eduTitle}</h2>

          <div className="edu-entry" style={{ marginBottom: '1rem' }}>
            <div className="edu-badge">🎓</div>
            <div>
              <h3 className="edu-school">{esprit.school}</h3>
              <p className="edu-program">{esprit.program}</p>
              <p className="edu-note">{esprit.note}</p>
            </div>
          </div>

          <div className="edu-entry">
            <div className="edu-badge">🏫</div>
            <div>
              <h3 className="edu-school">{lycee.school}</h3>
              <p className="edu-program">{lycee.program}</p>
              <p className="edu-note">{lycee.note}</p>
            </div>
          </div>
        </div>

        <div className="cert-card">
          <span className="section-tag">{t.sections.certTag}</span>
          <div className="cert-list">
            {certs.map((c, i) => (
              <div key={c.name} className="cert-row" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="cert-check">✓</span>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-by">{c.by}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   CONTACT
   ============================================================ */
const Contact = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();
  const [copied, setCopied] = useState('');

  const copy = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`contact-inner ${visible ? 'in' : ''}`}>
        <div className="contact-halo" />
        <div className="contact-avatar">
          <Avatar size={140} />
        </div>
        <span className="section-tag">{t.sections.contactTag}</span>
        <h2 className="contact-title">{t.sections.contactTitle}</h2>
        <p className="contact-sub">{t.sections.contactSub}</p>

        <div className="contact-emails">
          {INFO.emails.map((e) => (
            <button
              key={e}
              className={`email-pill ${copied === e ? 'is-copied' : ''}`}
              onClick={() => copy(e)}
            >
              <span>{copied === e ? t.contact.copied : e}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ))}
        </div>

        <div className="contact-actions">
          <a href={INFO.phoneHref} className="chip">
            📞 {INFO.phone}
          </a>
          <a href={INFO.github} target="_blank" rel="noreferrer" className="chip">
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="chip">
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FOOTER
   ============================================================ */
const Footer = () => {
  const { t, lang } = useT();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">M</span>
          {INFO.firstName} {INFO.lastName}
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} · {t.contact.footerMade} {INFO.location[lang]}
        </div>
        <a href="#" className="footer-top">{t.contact.backTop}</a>
      </div>
    </footer>
  );
};

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('portfolio-lang');
    if (saved) return saved;
    const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
    return nav.startsWith('fr') ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };

  return (
    <LangCtx.Provider value={value}>
      <div className="site">
        <CursorHalo />
        <Progress />
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </LangCtx.Provider>
  );
}

export default App;