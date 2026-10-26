import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
const StoryContext=createContext({active:0});
const ids=['top','results','experience','work','about','toolkit','contact'];
export function HorizontalStory({children,lang}){
 const [active,setActive]=useState(0),[direction,setDirection]=useState(1);const activeRef=useRef(0),last=useRef(0),root=useRef(null);
 const go=useCallback(index=>{index=Math.max(0,Math.min(6,index));if(index===activeRef.current)return;setDirection(index>activeRef.current?1:-1);activeRef.current=index;setActive(index);last.current=Date.now();history.replaceState(null,'',`#${ids[index]}`);},[]);
 useEffect(()=>{
  const link=e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const index=ids.indexOf(a.getAttribute('href').slice(1));if(index>=0){e.preventDefault();go(index);}};
  const hash=()=>{const index=ids.indexOf(location.hash.slice(1));if(index>=0)go(index);};
  const key=e=>{if(document.querySelector('[aria-modal="true"]')||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='PageDown'||e.key==='ArrowRight'){e.preventDefault();go(activeRef.current+1);}if(e.key==='PageUp'||e.key==='ArrowLeft'){e.preventDefault();go(activeRef.current-1);}};
  let delta=0,previous=0;
  const wheel=e=>{if(document.querySelector('[aria-modal="true"]')||e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const panel=root.current.querySelector('.chapter-active');if(!panel)return;const bottom=panel.scrollHeight-panel.clientHeight-panel.scrollTop<3,top=panel.scrollTop<3;if((e.deltaY>0&&bottom)||(e.deltaY<0&&top)){e.preventDefault();const now=Date.now();if(now-last.current<1100)return;if(now-previous>180)delta=0;previous=now;delta+=e.deltaY;if(Math.abs(delta)>90){go(activeRef.current+(delta>0?1:-1));delta=0;}}else delta=0;};
  document.addEventListener('click',link);window.addEventListener('hashchange',hash);window.addEventListener('keydown',key);const el=root.current;el.addEventListener('wheel',wheel,{passive:false});hash();return()=>{document.removeEventListener('click',link);window.removeEventListener('hashchange',hash);window.removeEventListener('keydown',key);el.removeEventListener('wheel',wheel);};
 },[go]);
 const touch=useRef(null),fr=lang==='fr';const names=fr?['Accueil','Résultats','Parcours','Projets','À propos','Expertise','Contact']:['Intro','Impact','Experience','Work','About','Toolkit','Contact'];
 return <StoryContext.Provider value={{active}}><main ref={root} className="horizontal-story" style={{'--slide-direction':direction}} onTouchStart={e=>{touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x,dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>85&&Math.abs(dx)>Math.abs(dy)*1.5)go(activeRef.current+(dx<0?1:-1));touch.current=null;}}>{children}<div className="story-navigation"><button disabled={active===0} onClick={()=>go(active-1)} aria-label={fr?'Chapitre précédent':'Previous chapter'}>←</button><div className="story-chapters">{names.map((name,i)=><button key={name} aria-current={i===active?'step':undefined} onClick={()=>go(i)}><span>0{i+1}</span>{name}</button>)}</div><button disabled={active===6} onClick={()=>go(active+1)} aria-label={fr?'Chapitre suivant':'Next chapter'}>→</button></div><p className="story-instructions" aria-live="polite">0{active+1} / 07 · {names[active]} <span> · {fr?'Défiler pour lire · Flèches pour changer de chapitre':'Scroll to read · Arrows to change chapter'}</span></p></main></StoryContext.Provider>;
}
export function Chapter({children,index}){
 const {active}=useContext(StoryContext);const ref=useRef(null);
 useEffect(()=>{if(active===index){ref.current.scrollTop=0;}},[active,index]);
 return <div ref={ref} className={`film-chapter ${active===index?'chapter-active':''} ${index<active?'chapter-before':'chapter-after'}`} inert={active!==index} aria-hidden={active!==index} style={{'--chapter-offset':index-active}}>{children}</div>;
}
