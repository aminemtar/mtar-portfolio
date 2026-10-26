import { useEffect, useRef } from 'react';

// Native scrolling drives an overlapping stack: each outgoing chapter stays
// pinned while the next chapter slides over it. Tall chapters remain readable.
export function Chapter({ children, index }) {
 const root=useRef(null);
 useEffect(()=>{
  const el=root.current,stage=el.firstElementChild;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0;
  const measure=()=>{
   if(motion.matches){el.classList.remove('chapter-enabled');stage.style.removeProperty('transform');return;}
   el.classList.add('chapter-enabled');
   el.style.setProperty('--chapter-top',`${Math.min(80,innerHeight-stage.offsetHeight)}px`);
   el.style.setProperty('--chapter-overlap',`${innerHeight*.72}px`);
  };
  const draw=()=>{
   frame=0;if(motion.matches)return;
   const next=el.nextElementSibling;
   const y=next?.classList.contains('film-chapter')?next.getBoundingClientRect().top:innerHeight;
   const p=Math.max(0,Math.min(1,1-y/innerHeight));
   // The next surface is rendered above this one: a spatial handoff rather
   // than a reveal. The darkening layer never intercepts input.
   stage.style.setProperty('--chapter-scale',String(1-p*.055));
   stage.style.setProperty('--chapter-dim',String(p*.22));
   stage.style.setProperty('--chapter-lift',`${-p*28}px`);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(draw);};
  const resize=()=>{measure();schedule();};
  const observer=new ResizeObserver(resize);observer.observe(stage);
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',resize);motion.addEventListener('change',resize);measure();draw();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',resize);motion.removeEventListener('change',resize);};
 },[]);
 return <div ref={root} className="film-chapter" style={{'--chapter-order':index}}>{children}</div>;
}
