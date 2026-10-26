import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { INFO } from '../../data/info';
import './studio.css';
const Scene = lazy(() => import('./StudioScene'));

export function Studio() {
  const { lang, setLang, t } = useT();
  const fr=lang==='fr';
  const [chapter,setChapter]=useState(0);
  const [tour,setTour]=useState(false);
  const [paused,setPaused]=useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const heading=useRef(null);
  const chapters=fr?[
    ['Bienvenue dans mon univers.','Ingénieur logiciel. Je transforme vos idées en expériences web et mobiles, de la première esquisse à la mise en production.','Découvrir mes projets','work'],
    ['Des idées. De vrais produits.','Applications éducatives chez Smart Conseil, écosystème Orange Digital Center et garde-robe intelligente Clothy. Découvrez les produits et leur histoire.','Explorer les projets','work'],
    ['Une idée, toutes les plateformes.','Flutter, SwiftUI et Kotlin pour le mobile. React et Angular pour le web. Des API robustes et une IA utile pour relier le tout.','Mes compétences','skills'],
    ['Du code à la production.','Smart Conseil, Orange, Ooredoo et Cloud Monsters : une expérience concrète de la conception, de la collaboration et de la livraison.','Mon parcours','experience'],
    ['Créons la suite ensemble.','Basé à Tunis, ouvert aux opportunités en Tunisie, en France et à distance. Parlons de votre prochain produit.','Me contacter','contact']
  ]:[
    ['Welcome to my world.','Software engineer. Turning ambitious ideas into thoughtful web and mobile experiences, from the first sketch to production.','Explore selected work','work'],
    ['Ideas made real.','Education apps at Smart Conseil, the Orange Digital Center ecosystem, and Clothy’s intelligent wardrobe. Meet the products and the thinking behind them.','Explore the projects','work'],
    ['One idea. Every platform.','Flutter, SwiftUI and Kotlin for mobile. React and Angular for the web. Robust APIs and useful AI to bring it all together.','Inside my toolkit','skills'],
    ['Built. Shipped. Improved.','Smart Conseil, Orange, Ooredoo and Cloud Monsters. Hands-on experience designing, collaborating and delivering products to real users.','Follow my journey','experience'],
    ['Let’s build what’s next.','Based in Tunis. Open to opportunities in Tunisia, France and remotely. Tell me about the product you have in mind.','Start a conversation','contact']
  ];
  const go=i=>{setChapter(i);setTour(true);requestAnimationFrame(()=>heading.current?.focus({preventScroll:true}));};
  useEffect(()=>{
    const handler=e=>{if(!tour || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
      if(e.key==='Escape')setTour(false);
      if(e.key==='ArrowRight'){e.preventDefault();setChapter(c=>Math.min(4,c+1));}
      if(e.key==='ArrowLeft'){e.preventDefault();setChapter(c=>Math.max(0,c-1));}
    }; window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);
  },[tour]);
  return <section className="studio" id="home" aria-label={fr?'Studio interactif':'Interactive studio'}>
    <a className="skip-link" href="#work">{fr?'Aller aux projets':'Skip to projects'}</a>
    <header className="studio-nav">
      <a className="studio-logo" href="#home" aria-label="Mohamed Amine Mtar home">m<span>t</span>ar<span className="logo-period">.</span></a>
      <nav aria-label={fr?'Navigation principale':'Main navigation'}><a href="#work">{t.nav.work}</a><a href="#experience">{t.nav.experience}</a><a href="#contact">Contact ↗</a></nav>
      <div className="studio-nav-tools"><button onClick={()=>setLang(fr?'en':'fr')} aria-label={fr?'Switch to English':'Passer en français'}>{fr?'EN':'FR'}</button><a href={INFO.cv[lang]} download={INFO.cvFileName[lang]}>CV ↓</a></div>
    </header>
    <div className="studio-grid">
      <div className="studio-copy">
        <div className="studio-eyebrow"><span/> {fr?'DISPONIBLE POUR DE NOUVEAUX DÉFIS':'AVAILABLE FOR NEW OPPORTUNITIES'}</div>
        <p className="studio-intro">MOHAMED AMINE MTAR <span> / </span> SOFTWARE ENGINEER</p>
        <h1 tabIndex={-1} ref={heading}>{chapters[chapter][0].split(' ').slice(0,-1).join(' ')} <em>{chapters[chapter][0].split(' ').at(-1)}</em></h1>
        <p className="studio-description">{chapters[chapter][1]}</p>
        <div className="studio-actions"><button className="studio-primary" onClick={()=>tour&&chapter===4?document.getElementById('contact')?.scrollIntoView():go(tour?chapter+1:0)}>{tour?(chapter===4?(fr?'Me contacter':'Get in touch'):(fr?'Étape suivante':'Next chapter')):(fr?'Visite guidée':'Take a guided tour')} <span>↗</span></button><a href={`#${chapters[chapter][3]}`}>{chapters[chapter][2]} <span>→</span></a></div>
        <div className="studio-signature"><img src={INFO.photo} alt="Mohamed Amine Mtar"/><div><strong>{fr?'Pensé avec soin. Construit pour durer.':'Thoughtfully designed. Built to last.'}</strong><span>Flutter · SwiftUI · Kotlin · React</span></div></div>
      </div>
      <div className="studio-art"><div className="studio-art-grid"/><span className="scene-label">MTAR STUDIO <span>01 — 05</span></span><Suspense fallback={<div className="scene-fallback">{fr?'Ouverture du studio…':'Opening the studio…'}</div>}><Scene chapter={chapter} paused={paused}/></Suspense><div className="scene-caption"><span>↖ {fr?'Bougez pour explorer':'Move to explore'}</span><button onClick={()=>setPaused(v=>!v)} aria-pressed={paused}>{paused?(fr?'Animer':'Enable motion'):(fr?'Pause animation':'Pause motion')} {paused?'▷':'Ⅱ'}</button></div><span className="art-note">{fr?'LE CODE RENCONTRE LA CRÉATIVITÉ':'WHERE CODE MEETS CRAFT'}</span></div>
    </div>
    <div className="studio-bottom"><span className="studio-index">{tour?(fr?'VOTRE VISITE':'YOUR GUIDED TOUR'):(fr?'CHOISISSEZ VOTRE ESCALE':'CHOOSE YOUR NEXT STOP')}<small>0{chapter+1} / 05</small></span><div className="chapter-links">{(fr?['Bienvenue','Projets','Compétences','Parcours','Contact']:['Welcome','Work','Toolkit','Journey','Contact']).map((name,i)=><button key={name} aria-current={chapter===i?'step':undefined} onClick={()=>go(i)}><span>0{i+1}</span>{name}</button>)}</div>{tour && <div className="tour-controls"><button disabled={chapter===0} onClick={()=>go(chapter-1)} aria-label={fr?'Précédent':'Previous'}>←</button><button onClick={()=>chapter===4?setTour(false):go(chapter+1)}>{chapter===4?(fr?'Terminer':'Finish'):'→'}</button><button onClick={()=>setTour(false)} aria-label={fr?'Quitter la visite':'Exit tour'}>×</button></div>}</div>
    <div className="studio-footnote"><span>{INFO.location[lang]} <span>↗</span> {fr?'Ouvert sur le monde':'Working worldwide'}</span><a href="#work">{fr?'DÉFILER POUR DÉCOUVRIR':'SCROLL TO DISCOVER'} ↓</a><span>REACT + THREE.JS</span></div>
  </section>;
}
