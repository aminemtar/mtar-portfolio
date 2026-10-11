/* ============================================================
   TRANSLATIONS — EN / FR
   Add a new language by duplicating a block and adapting keys
   ============================================================ */
import React from 'react';

const projectAsset = (filename) => `${import.meta.env.BASE_URL}projects/${filename}`;
const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

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
          Software engineer graduated from <strong>ESPRIT</strong> (graduated with
          distinction), I turn ideas into performant web and mobile applications,
          from design to production. At <strong>Smart Conseil</strong>, I delivered{' '}
          <strong>6 mobile applications</strong> (4 in Flutter, 2 in native Android),
          with <strong>2 published on the Google Play Store and the App Store</strong>,
          used by real users. I also master <strong>React</strong> and{' '}
          <strong>Angular</strong>, and I integrate APIs and{' '}
          <strong>AI features</strong> (OCR, image analysis) to create smarter and
          more useful products. Rigorous, versatile and impact-driven, I design
          fast, scalable and user-centered solutions.
        </>
      ),
      ctaPrimary: 'See my work',
      ctaSoft: 'Get in touch',
      roles: [
        'Software Engineer',
        'Mobile Developer',
        'Full-Stack Web Developer',
        'AI-Integrated App Builder',
      ],
      stack: {
        role: 'role', focus: 'focus', school: 'school',
        grade: 'grade', shipped: 'shipped', stack: 'stack',
        roleVal: 'Mobile & Web Dev',
        focusVal: 'Mobile · Web',
        schoolVal: 'ESPRIT · 2024',
        gradeVal: 'Excellent',
        shippedVal: '2 apps on Play Store',
        stackVal: 'Flutter · React · Angular',
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
      galleryLabel: 'Screenshots',
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
        title: 'Smart Conseil — Mobile Suite',
        // iconSlug: 'flutter',
        iconImage: publicAsset('smart.png'),
        iconColor: '02569B',
        date: 'Apr 2025 — Apr 2026',
        type: 'Mobile · Client',
        text: 'Built 6 mobile apps for the education sector: 4 Flutter cross-platform (Android + iOS) and 2 native Android (Kotlin & Java). 2 shipped to the Google Play Store and 2 to the App Store end-to-end.',
        longDescription: 'Developed a complete mobile suite for Smart Conseil in the education sector. Delivered 4 cross-platform Flutter applications (Android + iOS) and 2 native Android applications in Kotlin and Java. Two are published live on the Google Play Store and two on the App Store — from architecture design to release and post-release monitoring. Integrated AI features including OCR and automated content analysis, using Django-backed REST APIs.',
        features: [
          'Clean Architecture + BLoC state management',
          'AI-powered OCR and content analysis',
          '2 apps live on Google Play + 2 on App Store',
          'Full release cycle ownership',
          'Agile / Scrum with Git & GitLab',
        ],
        gallery: [
          // projectAsset('smartconseil-1.jpg'),
          // projectAsset('smartconseil-2.jpg'),
          // projectAsset('smartconseil-3.jpg'),
          // projectAsset('smartconseil-4.jpg'),
          // projectAsset('smartconseil-5.jpg'),
        ],
        tags: ['Flutter', 'Kotlin', 'Java', 'Dart', 'AI', 'Django', 'REST APIs'],
        tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
        stores: [
          {
            name: 'NetEthic Élève',
            emoji: '📖',
            play: 'https://play.google.com/store/apps/details?id=com.kaisens.parental&hl=fr',
            appStore: 'https://apps.apple.com/fr/app/netethic-%C3%A9l%C3%A8ve/id6478774700',
          },
          {
            name: 'NetEthic Education',
            emoji: '🔢',
            play: 'https://play.google.com/store/apps/details?id=com.test.nethetic_school&hl=fr',
            appStore: 'https://apps.apple.com/fr/app/netethic-education/id6479988570',
          },
        ],
        storesLabel: '4 apps live · Play Store & App Store',
      },

      {
        title: 'Orange Tunisia — Full-Stack Mobile & Web Platform',
        iconImage: publicAsset('orange.png'),
        date: 'Feb 2024 — Aug 2024',
        type: 'iOS · Android · Web · Backend',
        text: 'Contributed to a digital platform serving the 7 Orange Digital Center Clubs across Tunisian universities, featuring native iOS (SwiftUI) and Android (Kotlin, Jetpack Compose) apps, a React web interface, and a Node.js/Express backend with MongoDB.',
        longDescription: 'Contributed to the development of a full-stack digital platform for the 7 Orange Digital Center Clubs across Tunisian universities. Built native iOS (Swift, SwiftUI) and Android (Kotlin, Jetpack Compose) applications, a ReactJS web interface, and a Node.js / Express backend with MongoDB. Implemented event discovery and management, an interactive map of the ODC ecosystem, and real-time push notifications using Firebase Cloud Messaging, with CoreData for offline notification history.',
        features: [
          'Native iOS app with SwiftUI',
          'Native Android app with Jetpack Compose',
          'ReactJS web platform',
          'Node.js / Express + MongoDB backend',
          'Real-time push notifications via FCM',
          'Clean Architecture + Scrum (team of 6)',
        ],
        gallery: [
          // projectAsset('orange-1.jpg'),
          // projectAsset('orange-2.jpg'),
          // projectAsset('orange-3.jpg'),
        ],
        tags: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'CoreData'],
        tint: 'linear-gradient(135deg, #fff4e0 0%, #ffe8d6 100%)',
      },

      {
        title: 'Ooredoo Tunisia — SMS Script Manager',
        iconImage: publicAsset('ooredo.jpeg'),
        date: 'Jun 2023 — Aug 2023',
        type: 'Full-stack Developer · Internship',
        text: 'Web application to manage SMS scripts. Angular frontend + Spring Boot REST API, authentication and role-based access via Spring Security. Optimised PostgreSQL queries and the data access layer, cutting data retrieval time by 15%.',
        longDescription: 'Built a web application for Ooredoo Tunisia to manage SMS scripts end-to-end. Angular frontend connected to a Spring Boot REST API, with authentication and role-based access control enforced via Spring Security. Optimised PostgreSQL queries and the data access layer, achieving a 15% reduction in data retrieval time. Delivered a responsive mobile-first interface following Agile practices.',
        features: [
          'Angular + Spring Boot full-stack',
          'Role-based security with Spring Security',
          '15% faster PostgreSQL query performance',
          'Responsive mobile-first UI',
        ],
        gallery: [
          // projectAsset('ooredoo-1.jpg'),
          // projectAsset('ooredoo-2.jpg'),
        ],
        tags: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'TypeScript'],
        tint: 'linear-gradient(135deg, #e8ffe6 0%, #d6f5e8 100%)',
      },

      {
        title: 'Cloud Monsters — Edu Platform',
        iconImage: publicAsset('cloud.jpeg'),
        date: 'Jun 2022 — Jul 2022',
        type: 'Web Developer · Internship',
        text: "Interactive educational web platform in ReactJS that gamifies children's books. Managed users, books, levels and content through Firebase (auth, real-time DB, storage).",
        longDescription: "Built an interactive educational web platform in ReactJS that gamifies children's books. Designed and implemented the entire content management system — users, books, levels, and progression — on top of Firebase (authentication, real-time database, storage). Delivered a responsive UI tailored to a young audience, focused on engagement and playful visuals.",
        features: [
          'Gamified learning experience',
          'Firebase auth + real-time DB + storage',
          'Content management for books and levels',
          'Kid-friendly responsive UI',
        ],
        gallery: [
          // projectAsset('cloud-1.jpg'),
          // projectAsset('cloud-2.jpg'),
        ],
        tags: ['React', 'JavaScript', 'HTML/CSS', 'Firebase'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffe0e8 100%)',
      },

      {
        title: 'DevOps Pipeline',
        iconImage: publicAsset('esprit.jpeg'),
        iconColor: '2496ED',
        date: 'Sept 2023 — Jan 2024',
        type: 'Academic',
        text: 'Modern CI/CD pipeline with Jenkins, Docker, Grafana and Prometheus. Angular front-end talking to a Spring Boot backend, with automated tests, containerisation and infrastructure as code.',
        longDescription: 'Designed and implemented a modern CI/CD pipeline from scratch: Jenkins for orchestration, Docker for containerisation, Grafana and Prometheus for monitoring and observability. Built an Angular front-end talking to a Spring Boot backend, with automated tests at every stage, infrastructure as code, and reliable secure deployments.',
        features: [
          'Jenkins CI/CD pipeline',
          'Docker containerisation',
          'Grafana + Prometheus monitoring',
          'Automated tests at every stage',
          'Infrastructure as code',
        ],
        gallery: [
          projectAsset('devops-1.jpeg'),
          projectAsset('devops-2.jpeg'),
          projectAsset('devops-3.jpeg'),
          projectAsset('devops-4.jpeg'),
        ],
        tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Spring Boot'],
        tint: 'linear-gradient(135deg, #f3e0ff 0%, #e8d6ff 100%)',
      },

      {
        title: 'Artie — Robot Control',
        iconImage: publicAsset('esprit.jpeg'),
        iconColor: '5FA04E',
        date: 'Jan 2023 — Jun 2023',
        type: 'Academic · Team',
        text: 'A React dashboard and Node.js backend for managing users and steering a robot, plus a Flutter mobile app to control the robot and convert images into GCode.',
        longDescription: 'Team project to build a complete control system for a 3D-printing style robot. A React dashboard for user management and robot steering, a Node.js backend handling authentication and real-time commands, and a Flutter mobile app that controls the robot and converts images into GCode for printing.',
        features: [
          'React dashboard for control & user management',
          'Node.js backend with real-time commands',
          'Flutter mobile app for robot control',
          'Image → GCode conversion for 3D printing',
        ],
        gallery: [
          projectAsset('artie-1.jpg'),
          projectAsset('artie-2.jpg'),
        ],
        tags: ['React', 'Node.js', 'Flutter', 'GCode'],
        tint: 'linear-gradient(135deg, #e0fff5 0%, #d6f5ee 100%)',
      },

      {
        title: 'Clothy — Smart Wardrobe',
        iconImage: publicAsset('esprit.jpeg'),
        iconColor: 'F05138',
        date: 'Sept 2022 — Apr 2023',
        type: 'Academic · Mobile',
        text: 'Outfit planning app with image recognition (Core ML, TensorFlow) and real-time chat over WebSockets. Built with SwiftUI, Kotlin, Node.js and MongoDB.',
        longDescription: 'Designed and built a smart wardrobe assistant to help users plan outfits. Mobile apps in SwiftUI (iOS) and Kotlin (Android) with on-device image recognition using Core ML and TensorFlow to identify clothing items. Real-time chat powered by WebSockets, backed by a Node.js + MongoDB backend.',
        features: [
          'On-device image recognition (Core ML + TensorFlow)',
          'Real-time chat via WebSockets',
          'iOS + Android native apps',
          'Node.js + MongoDB backend',
        ],
        gallery: [
          projectAsset('clothy-1.jpeg'),
          projectAsset('clothy-2.jpeg'),
          projectAsset('clothy-3.jpeg'),
          projectAsset('clothy-4.jpeg'),
        ],
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
          'Developed mobile applications for the 7 Orange Digital Center Clubs across Tunisian universities using SwiftUI (iOS) and Kotlin with Jetpack Compose (Android).',
          'Designed an interactive map of the ODC ecosystem and a custom event calendar to showcase clubs, activities, and events.',
          'Implemented push notifications and social interactions (likes, comments), using Firebase Cloud Messaging and CoreData for local data persistence on iOS.',
          'Contributed to the ReactJS web platform, developing user-facing features and integrating REST APIs.',
          'Developed Node.js/Express REST APIs and MongoDB data models to support mobile and web application features.',
          'Applied Clean Architecture principles and collaborated within a six-person team using Scrum and Agile methodologies.',
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
          Ingénieur en informatique diplômé de <strong>l'ESPRIT</strong> (mention{' '}
          <strong>Excellent</strong>), je transforme des idées en applications web
          et mobiles performantes, de la conception à la mise en production. Chez{' '}
          <strong>Smart Conseil</strong>, j'ai livré <strong>6 applications mobiles</strong>{' '}
          (4 en Flutter, 2 en Android natif), dont <strong>2 publiées sur le Google
            Play Store et l'App Store</strong>, utilisées par de vrais utilisateurs.
          Je maîtrise aussi <strong>React</strong> et <strong>Angular</strong>, et
          j'intègre des API ainsi que des fonctionnalités d'
          <strong>intelligence artificielle</strong> (OCR, analyse d'images) pour
          créer des produits plus intelligents et plus utiles. Rigoureux, polyvalent
          et orienté impact, je conçois des solutions rapides, évolutives et centrées
          sur l'expérience utilisateur.
        </>
      ),
      ctaPrimary: 'Voir mes projets',
      ctaSoft: 'Me contacter',
      roles: [
        'Ingénieur Informatique',
        'Développeur Mobile',
        'Développeur Web Full-Stack',
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
      galleryLabel: 'Captures d\'écran',
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
        title: 'Smart Conseil — Suite Mobile',
        // iconSlug: 'flutter',
        iconColor: '02569B',
        iconImage: publicAsset('smart.png'),
        date: 'Avr 2025 — Avr 2026',
        type: 'Mobile · Client',
        text: "Développement de 6 applications mobiles pour le secteur éducatif : 4 multiplateformes Flutter (Android + iOS) et 2 natives Android (Kotlin & Java). 2 applications publiées sur le Google Play Store et 2 sur l'App Store.",
        longDescription: "Développement d'une suite mobile complète pour Smart Conseil dans le secteur éducatif. Livraison de 4 applications multiplateformes Flutter (Android + iOS) et de 2 applications natives Android en Kotlin et Java. Deux d'entre elles sont publiées sur le Google Play Store et deux sur l'App Store — de la conception d'architecture à la mise en production et au suivi post-release. Intégration de fonctionnalités IA, dont l'OCR et l'analyse automatisée de contenu, avec des API REST propulsées par Django.",
        features: [
          "Clean Architecture + gestion d'état BLoC",
          'IA : OCR et analyse de contenu',
          '2 apps publiées sur Google Play + 2 sur App Store',
          'Cycle complet de release maîtrisé',
          'Agile / Scrum avec Git & GitLab',
        ],
        gallery: [
          // projectAsset('smartconseil-1.jpg'),
          // projectAsset('smartconseil-2.jpg'),
          // projectAsset('smartconseil-3.jpg'),
          // projectAsset('smartconseil-4.jpg'),
          // projectAsset('smartconseil-5.jpg'),
        ],
        tags: ['Flutter', 'Kotlin', 'Java', 'Dart', 'IA', 'Django', 'REST APIs'],
        tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
        stores: [
          {
            name: 'NetEthic Élève',
            emoji: '📖',
            play: 'https://play.google.com/store/apps/details?id=com.kaisens.parental&hl=fr',
            appStore: 'https://apps.apple.com/fr/app/netethic-%C3%A9l%C3%A8ve/id6478774700',
          },
          {
            name: 'NetEthic Education',
            emoji: '🔢',
            play: 'https://play.google.com/store/apps/details?id=com.test.nethetic_school&hl=fr',
            appStore: 'https://apps.apple.com/fr/app/netethic-education/id6479988570',
          },
        ],
        storesLabel: '4 apps publiées · Play Store & App Store',
      },

      {
        title: 'Orange Tunisie — Plateforme Mobile & Web',
        iconImage: publicAsset('orange.png'),
        date: 'Fév 2024 — Août 2024',
        type: 'iOS · Android · Web · Backend',
        text: "Contribution à une plateforme numérique desservant les 7 Clubs Orange Digital Center dans les universités tunisiennes : apps iOS (SwiftUI), Android (Kotlin, Jetpack Compose), web React et backend Node.js/Express + MongoDB.",
        longDescription: "Contribution au développement d'une plateforme numérique pour les 7 Clubs Orange Digital Center dans les universités tunisiennes. Développement d'applications natives iOS (Swift, SwiftUI) et Android (Kotlin, Jetpack Compose), d'une interface web ReactJS et d'un backend Node.js/Express avec MongoDB. Mise en place de la découverte et gestion des événements, d'une carte interactive de l'écosystème ODC, et de notifications push en temps réel via Firebase Cloud Messaging avec stockage hors ligne CoreData.",
        features: [
          'App iOS native avec SwiftUI',
          'App Android native avec Jetpack Compose',
          'Plateforme web ReactJS',
          'Backend Node.js / Express + MongoDB',
          'Notifications push temps réel via FCM',
          'Clean Architecture + Scrum (équipe de 6)',
        ],
        gallery: [
          // projectAsset('orange-1.jpg'),
          // projectAsset('orange-2.jpg'),
          // projectAsset('orange-3.jpg'),
        ],
        tags: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'CoreData'],
        tint: 'linear-gradient(135deg, #fff4e0 0%, #ffe8d6 100%)',
      },

      {
        title: 'Ooredoo Tunisie — Gestionnaire de scripts SMS',
        iconImage: publicAsset('ooredo.jpeg'),
        date: 'Juin 2023 — Août 2023',
        type: 'Développeur Web Full-stack · Stage',
        text: "Application web de gestion de scripts SMS. Frontend Angular + API REST Spring Boot, authentification et contrôle d'accès par rôles avec Spring Security. Optimisation des requêtes PostgreSQL (-15% sur le temps de récupération).",
        longDescription: "Développement d'une application web pour Ooredoo Tunisie afin de gérer les scripts SMS de bout en bout. Frontend Angular connecté à une API REST Spring Boot, avec authentification et contrôle d'accès basé sur les rôles via Spring Security. Optimisation des requêtes PostgreSQL et de la couche d'accès aux données, avec une réduction de 15% du temps de récupération. Livraison d'une interface responsive mobile-first suivant les pratiques Agile.",
        features: [
          'Full-stack Angular + Spring Boot',
          'Sécurité par rôles avec Spring Security',
          'Requêtes PostgreSQL 15% plus rapides',
          'Interface responsive mobile-first',
        ],
        gallery: [
          // projectAsset('ooredoo-1.jpg'),
          // projectAsset('ooredoo-2.jpg'),
        ],
        tags: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'TypeScript'],
        tint: 'linear-gradient(135deg, #e8ffe6 0%, #d6f5e8 100%)',
      },

      {
        title: 'Cloud Monsters — Plateforme éducative',
        iconImage: publicAsset('cloud.jpeg'),
        date: 'Juin 2022 — Juil 2022',
        type: 'Développeur Web · Stage',
        text: "Plateforme éducative interactive en ReactJS qui gamifie les livres pour enfants. Gestion des utilisateurs, livres, niveaux et contenus via Firebase (auth, base temps réel, stockage).",
        longDescription: "Développement d'une plateforme éducative interactive en ReactJS qui gamifie les livres pour enfants. Conception et implémentation du système complet de gestion de contenu — utilisateurs, livres, niveaux et progression — sur Firebase (authentification, base temps réel, stockage). Livraison d'une UI responsive adaptée à un jeune public, axée sur l'engagement et les visuels ludiques.",
        features: [
          "Expérience d'apprentissage gamifiée",
          'Firebase auth + DB temps réel + stockage',
          'Gestion de contenu livres et niveaux',
          'UI responsive adaptée aux enfants',
        ],
        gallery: [
          // projectAsset('cloud-1.jpg'),
          // projectAsset('cloud-2.jpg'),
        ],
        tags: ['React', 'JavaScript', 'HTML/CSS', 'Firebase'],
        tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffe0e8 100%)',
      },

      {
        title: 'Pipeline DevOps',
        // iconSlug: 'docker',
        iconColor: '2496ED',
        iconImage: publicAsset('esprit.jpeg'),
        date: 'Sept 2023 — Jan 2024',
        type: 'Académique',
        text: "Pipeline CI/CD moderne avec Jenkins, Docker, Grafana et Prometheus. Frontend Angular connecté à un backend Spring Boot, avec tests automatisés et infrastructure as code.",
        longDescription: "Conception et mise en place d'un pipeline CI/CD moderne : Jenkins pour l'orchestration, Docker pour la conteneurisation, Grafana et Prometheus pour le monitoring et l'observabilité. Frontend Angular connecté à un backend Spring Boot, avec tests automatisés à chaque étape, infrastructure as code, et déploiements fiables et sécurisés.",
        features: [
          'Pipeline CI/CD Jenkins',
          'Conteneurisation Docker',
          'Monitoring Grafana + Prometheus',
          'Tests automatisés à chaque étape',
          'Infrastructure as code',
        ],
        gallery: [
          projectAsset('devops-1.jpeg'),
          projectAsset('devops-2.jpeg'),
          projectAsset('devops-3.jpeg'),
          projectAsset('devops-4.jpeg'),
        ],
        tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Spring Boot'],
        tint: 'linear-gradient(135deg, #f3e0ff 0%, #e8d6ff 100%)',
      },

      {
        title: 'Artie — Contrôle de robot',
        // iconSlug: 'nodedotjs',
        iconColor: '5FA04E',
        iconImage: publicAsset('esprit.jpeg'),
        date: 'Jan 2023 — Juin 2023',
        type: 'Académique · Équipe',
        text: "Dashboard React et backend Node.js pour gérer les utilisateurs et piloter un robot, plus une application Flutter pour contrôler le robot et convertir des images en GCode.",
        longDescription: "Projet d'équipe pour construire un système complet de contrôle d'un robot de type impression 3D. Dashboard React pour la gestion des utilisateurs et le pilotage du robot, backend Node.js gérant l'authentification et les commandes temps réel, et application mobile Flutter contrôlant le robot et convertissant les images en GCode pour l'impression.",
        features: [
          'Dashboard React pour contrôle et utilisateurs',
          'Backend Node.js avec commandes temps réel',
          'App mobile Flutter pour piloter le robot',
          'Conversion image → GCode',
        ],
        gallery: [
          projectAsset('artie-1.jpg'),
          projectAsset('artie-2.jpg'),
        ],
        tags: ['React', 'Node.js', 'Flutter', 'GCode'],
        tint: 'linear-gradient(135deg, #e0fff5 0%, #d6f5ee 100%)',
      },

      {
        title: 'Clothy — Garde-robe intelligente',
        // iconSlug: 'swift',
        iconColor: 'F05138',
        iconImage: publicAsset('esprit.jpeg'),
        date: 'Sept 2022 — Avr 2023',
        type: 'Académique · Mobile',
        text: "Application de planification de tenues avec reconnaissance d'images (Core ML, TensorFlow) et chat en temps réel via WebSockets. Développée avec SwiftUI, Kotlin, Node.js et MongoDB.",
        longDescription: "Conception et développement d'un assistant de garde-robe intelligent pour aider les utilisateurs à planifier leurs tenues. Applications mobiles en SwiftUI (iOS) et Kotlin (Android) avec reconnaissance d'images embarquée via Core ML et TensorFlow pour identifier les vêtements. Chat en temps réel propulsé par WebSockets, sur un backend Node.js + MongoDB.",
        features: [
          "Reconnaissance d'images embarquée (Core ML + TensorFlow)",
          'Chat en temps réel via WebSockets',
          'Apps natives iOS + Android',
          'Backend Node.js + MongoDB',
        ],
        gallery: [
          projectAsset('clothy-1.jpeg'),
          projectAsset('clothy-2.jpeg'),
          projectAsset('clothy-3.jpeg'),
          projectAsset('clothy-4.jpeg'),
        ],
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
          "Développement d'applications mobiles natives pour les 7 Clubs Orange Digital Center dans les universités tunisiennes, avec SwiftUI (iOS) et Kotlin / Jetpack Compose (Android).",
          "Conception d'un calendrier d'événements personnalisé et d'une carte interactive de l'écosystème ODC et de ses clubs.",
          "Mise en place de notifications push et d'interactions (likes, commentaires), avec Firebase Cloud Messaging et CoreData pour le stockage local sur iOS.",
          "Contribution au développement de la plateforme web ReactJS, avec création de fonctionnalités et intégration des API REST.",
          "Développement du backend Node.js / Express et MongoDB : API REST, modélisation des données et intégration avec les applications mobiles et web.",
          "Application des principes de Clean Architecture et collaboration au sein d'une équipe de 6 personnes selon la méthodologie Agile Scrum.",
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