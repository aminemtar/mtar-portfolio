// App.jsx
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

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
   CURSOR HALO (soft, light)
   ============================================================ */
const CursorHalo = () => {
  const { x, y } = useMouse();
  return <div className="cursor-halo" style={{ left: x, top: y }} />;
};

/* ============================================================
   PROGRESS BAR
   ============================================================ */
const Progress = () => {
  const p = useScrollProgress();
  return (
    <div className="progress-rail">
      <div className="progress-fill" style={{ width: `${p * 100}%` }} />
    </div>
  );
};

/* ============================================================
   NAVBAR
   ============================================================ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
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
          <a key={l.label} href={l.href} className="nav-item">
            {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="nav-hire">
        <span>Let's talk</span>
        <span className="hire-dot" />
      </a>
    </nav>
  );
};

/* ============================================================
   HERO
   ============================================================ */
const Hero = () => {
  const roles = [
    'Software Engineer',
    'Flutter Developer',
    'Full-Stack Developer',
    'Mobile App Builder',
  ];
  const [typed, setTyped] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 35 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setTyped(current.slice(0, typed.length + 1));
        if (typed.length === current.length) setTimeout(() => setDel(true), 1600);
      } else {
        setTyped(current.slice(0, typed.length - 1));
        if (typed.length === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, del, idx]);

  return (
    <section className="hero">
      <div className="hero-blobs">
        <div className="blob blob-peach" />
        <div className="blob blob-mint" />
        <div className="blob blob-lavender" />
        <div className="blob blob-sky" />
      </div>

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to opportunities · Tunis, Tunisia
        </div>

        <h1 className="hero-title">
          <span className="hero-line">Hi, I'm</span>
          <span className="hero-line hero-name">
            Mohamed Amine <em>Mtar</em>
          </span>
        </h1>

        <div className="hero-role">
          <span className="role-static">I work as a</span>
          <span className="role-typed">
            {typed}
            <span className="role-cursor" />
          </span>
        </div>

        <p className="hero-desc">
          Fresh software engineering graduate from <strong>ESPRIT</strong> with a{' '}
          <strong>mention excellente</strong>. I love turning ideas into polished
          mobile & web products — from Flutter apps shipped to the Play Store,
          to full-stack platforms with Node.js, Spring Boot and React.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            <span>See my work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-soft">
            <span>Get in touch</span>
          </a>
        </div>

        <div className="hero-socials">
          {[
            { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
            { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'Email', icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' },
          ].map((s) => (
            <a key={s.name} href="#" className="social-chip" aria-label={s.name}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.icon} />
              </svg>
              <span>{s.name}</span>
            </a>
          ))}
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
              <span className="stack-key">role</span>
              <span className="stack-val">Software Engineer</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">focus</span>
              <span className="stack-val">Mobile · Web</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">school</span>
              <span className="stack-val">ESPRIT · 2024</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">grade</span>
              <span className="stack-val stack-green">Excellente</span>
            </div>
            <div className="stack-row">
              <span className="stack-key">stack</span>
              <span className="stack-val">Flutter · React · Node</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
};

/* ============================================================
   MARQUEE (light pastel)
   ============================================================ */
const Marquee = () => {
  const items = [
    'Flutter', '✦', 'React', '✦', 'Node.js', '✦',
    'Spring Boot', '✦', 'SwiftUI', '✦', 'MongoDB', '✦',
    'Firebase', '✦', 'TypeScript', '✦', 'Docker', '✦',
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
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [ref, visible] = useReveal();
  const projects = [
    {
      title: 'DevOps Pipeline',
      emoji: '⚙️',
      date: 'Sept 2023 – Jan 2024',
      type: 'Academic',
      text: 'Modern CI/CD pipeline with Jenkins, Docker, Grafana and Prometheus. Angular front-end talking to a Spring Boot backend, with automated tests and infrastructure as code.',
      tags: ['Jenkins', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Spring Boot'],
      tint: 'linear-gradient(135deg, #e0f2ff 0%, #d8e4ff 100%)',
    },
    {
      title: 'Artie — Robot Control',
      emoji: '🤖',
      date: 'Jan 2023 – Jun 2023',
      type: 'Team project',
      text: 'A React dashboard and Node.js backend for managing users and steering a robot, plus a Flutter app that controls the robot and converts images into GCode.',
      tags: ['React', 'Node.js', 'Flutter', 'GCode'],
      tint: 'linear-gradient(135deg, #e8ffe6 0%, #d6f5e8 100%)',
    },
    {
      title: 'Clothy — Smart Wardrobe',
      emoji: '👕',
      date: 'Sept 2022 – Apr 2023',
      type: 'Mobile app',
      text: 'An outfit planning app with image recognition (Core ML, TensorFlow) and real-time chat over WebSockets, built with SwiftUI, Kotlin, Node.js and MongoDB.',
      tags: ['SwiftUI', 'Kotlin', 'Core ML', 'TensorFlow', 'WebSocket', 'MongoDB'],
      tint: 'linear-gradient(135deg, #ffe8f2 0%, #ffe0e8 100%)',
    },
    {
      title: 'Orange Digital Center iOS',
      emoji: '📱',
      date: 'Feb 2024 – Aug 2024',
      type: 'Final internship',
      text: 'An iOS app for the Orange Digital Center Clubs to manage events, backed by Node.js and MongoDB, with Firebase Cloud Messaging and offline notifications via CoreData.',
      tags: ['iOS', 'Node.js', 'MongoDB', 'Firebase', 'CoreData'],
      tint: 'linear-gradient(135deg, #fff4e0 0%, #ffe8d6 100%)',
    },
  ];

  return (
    <section id="work" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">01 · Selected work</span>
        <h2 className="section-title">
          Projects I'm <em>proud</em> of
        </h2>
        <p className="section-sub">
          From academic deep-dives to real client work — each one shaped how I build software today.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
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
  const [ref, visible] = useReveal();

  const groups = [
    {
      title: 'Mobile',
      color: '#7c9cff',
      items: ['Flutter', 'SwiftUI', 'Kotlin', 'Core ML', 'Firebase', 'CoreData'],
    },
    {
      title: 'Frontend',
      color: '#ff9bb8',
      items: ['ReactJS', 'Angular', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      color: '#8fe1b8',
      items: ['Node.js', 'Spring Boot', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools & DevOps',
      color: '#ffc48f',
      items: ['Git · GitLab', 'Docker', 'Jenkins', 'Grafana', 'Prometheus', 'Scrum'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">02 · Toolkit</span>
        <h2 className="section-title">
          What I build <em>with</em>
        </h2>
      </div>

      <div className="skills-grid">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`skill-card ${visible ? 'in' : ''}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="skill-card-head">
              <span className="skill-dot" style={{ background: g.color }} />
              <h3>{g.title}</h3>
            </div>
            <div className="skill-pills">
              {g.items.map((it) => (
                <span key={it} className="pill" style={{ borderColor: g.color + '55' }}>
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
   EXPERIENCE (Timeline)
   ============================================================ */
const Experience = () => {
  const [ref, visible] = useReveal();
  const items = [
    {
      role: 'Mobile Developer',
      company: 'Smart Conseil',
      period: 'May 2025 — Present',
      points: [
        'Shipping Flutter apps to the Play Store.',
        'Maintaining and evolving existing production apps.',
        'Building performant new modules and integrations.',
        'Integrating APIs and optimizing app performance.',
        'Working in an agile team with design & backend.',
      ],
    },
    {
      role: 'Final-Year Internship',
      company: 'Orange Tunisie',
      period: 'Feb 2024 — Aug 2024',
      points: [
        'Built an iOS app for Orange Digital Center clubs (event management).',
        'Developed a Node.js + MongoDB backend, tuning API response times.',
        'Integrated Firebase Cloud Messaging with CoreData offline storage.',
        'Applied Scrum and Clean Architecture throughout.',
      ],
    },
    {
      role: 'Engineering Internship',
      company: 'Ooredoo Tunisie',
      period: 'Jul 2023 — Aug 2023',
      points: [
        'Built an SMS script manager (Angular + Spring Boot).',
        'Implemented role-based security with Spring Security.',
        'Optimized queries on PostgreSQL.',
      ],
    },
    {
      role: 'Technician Internship',
      company: 'Cloud Monsters',
      period: 'Jun 2022 — Jul 2022',
      points: [
        'Built an interactive learning platform with ReactJS.',
        'Gamified children\'s books to boost engagement.',
        'Managed users and content through Firebase.',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">03 · Experience</span>
        <h2 className="section-title">
          Where I've <em>grown</em>
        </h2>
      </div>

      <div className="timeline">
        {items.map((it, i) => (
          <div
            key={it.company}
            className={`tl-item ${visible ? 'in' : ''}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="tl-node">
              <span className="tl-dot" />
              {i !== items.length - 1 && <span className="tl-line" />}
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
  const [ref, visible] = useReveal();
  const certs = [
    { name: 'Programming Foundations: Databases', by: 'LinkedIn' },
    { name: 'JavaScript Algorithms and Data Structures', by: 'FreeCodeCamp' },
    { name: 'Manage Your Versions with Git', by: 'Coursera' },
  ];

  return (
    <section className="section">
      <div ref={ref} className={`edu-wrap ${visible ? 'in' : ''}`}>
        <div className="edu-card">
          <span className="section-tag">04 · Education</span>
          <h2 className="section-title">
            Where I <em>learned</em>
          </h2>
          <div className="edu-entry">
            <div className="edu-badge">🎓</div>
            <div>
              <h3 className="edu-school">ESPRIT</h3>
              <p className="edu-program">
                Engineering Degree in Computer Science · 2019 – 2024
              </p>
              <p className="edu-note">
                Graduated with the highest honor — <strong>mention excellente</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="cert-card">
          <span className="section-tag">Certifications</span>
          <div className="cert-list">
            {certs.map((c, i) => (
              <div key={c.name} className="cert-row" style={{ transitionDelay: `${i * 120}ms` }}>
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
  const [ref, visible] = useReveal();
  const [copied, setCopied] = useState(false);
  const email = 'amine.mtar@example.com';

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`contact-inner ${visible ? 'in' : ''}`}>
        <div className="contact-halo" />
        <span className="section-tag">05 · Contact</span>
        <h2 className="contact-title">
          Let's build something <em>together</em>
        </h2>
        <p className="contact-sub">
          I'm looking for a team where I can grow as an engineer and ship things people love.
          Drop me a message — I usually reply the same day.
        </p>

        <div className="contact-actions">
          <button className={`email-pill ${copied ? 'is-copied' : ''}`} onClick={copy}>
            <span>{copied ? 'Copied to clipboard ✓' : email}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="contact-chips">
            {['GitHub', 'LinkedIn', 'Download CV'].map((l) => (
              <a key={l} href="#" className="chip">
                {l}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FOOTER
   ============================================================ */
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <span className="brand-mark">M</span>
        Mohamed Amine Mtar
      </div>
      <div className="footer-meta">
        © {new Date().getFullYear()} · Built with React · Made with ☕ in Tunis
      </div>
      <a href="#" className="footer-top">Back to top ↑</a>
    </div>
  </footer>
);

/* ============================================================
   APP
   ============================================================ */
function App() {
  return (
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
  );
}

export default App;