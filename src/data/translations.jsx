/* ============================================================
   TRANSLATIONS — EN / FR
   Add a new language by duplicating a block and adapting keys
   ============================================================ */
import React from 'react';

export const translations = {
  en: {
    nav: {
      work: 'Work',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      hire: 'Hire me',
      cv: 'My CV',
    },

    cv: {
      title: 'My CV',
      view: 'View online',
      viewDesc: 'Open the PDF in a new tab',
      download: 'Download',
      downloadDesc: 'Save the PDF to your device',
    },

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
      roles: [
        'Mobile Developer',
        'Software Engineer',
        'iOS Developer (SwiftUI)',
        'Full-Stack Developer',
        'AI-Integrated App Builder',
      ],
      stack: {
        role: 'role', focus: 'focus', school: 'school',
        grade: 'grade', shipped: 'shipped', stack: 'stack',
        roleVal: 'Mobile & Web Dev',
        focusVal: 'Flutter · iOS · Web',
        schoolVal: 'ESPRIT · 2024',
        gradeVal: 'Excellent',
        shippedVal: '2 apps on Play Store',
        stackVal: 'Flutter · Kotlin · Swift',
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
      esprit: {
        school: 'ESPRIT',
        program: "Engineer's Degree · Computer Software Engineering",
        note: '2019 – 2024 · Graduated with honors',
      },
      lycee: {
        school: 'Lycée Tayeb Mhiri, Nabeul',
        program: 'Baccalauréat · Sciences Techniques',
        note: '2013 – 2017',
      },
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
    nav: {
      work: 'Projets',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Formation',
      contact: 'Contact',
      hire: 'Me recruter',
      cv: 'Mon CV',
    },

    cv: {
      title: 'Mon CV',
      view: 'Voir en ligne',
      viewDesc: 'Ouvrir le PDF dans un nouvel onglet',
      download: 'Télécharger',
      downloadDesc: 'Enregistrer le PDF sur votre appareil',
    },

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
      roles: [
        'Développeur Mobile',
        'Ingénieur Informatique',
        'Développeur iOS (SwiftUI)',
        'Développeur Full-Stack',
        'Intégrateur IA Mobile',
      ],
      stack: {
        role: 'poste', focus: 'spécialité', school: 'école',
        grade: 'mention', shipped: 'publié', stack: 'stack',
        roleVal: 'Mobile & Web',
        focusVal: 'Flutter · iOS · Web',
        schoolVal: 'ESPRIT · 2024',
        gradeVal: 'Mention Excellente',
        shippedVal: '2 apps sur Play Store',
        stackVal: 'Flutter · Kotlin · Swift',
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
      esprit: {
        school: 'ESPRIT',
        program: "Diplôme d'Ingénieur · Génie Logiciel",
        note: '2019 – 2024 · Diplômé avec mention excellente',
      },
      lycee: {
        school: 'Lycée Tayeb Mhiri, Nabeul',
        program: 'Baccalauréat · Sciences Techniques',
        note: '2013 – 2017',
      },
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