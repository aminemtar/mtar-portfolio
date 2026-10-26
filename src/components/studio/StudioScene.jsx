import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Procedural artwork: no remote models, textures or network requests.
export default function StudioScene({ chapter, paused }) {
  const host = useRef(null);
  const target = useRef(chapter);
  const pause = useRef(paused);
  const [failed, setFailed] = useState(false);
  useEffect(() => { target.current = chapter; }, [chapter]);
  useEffect(() => { pause.current = paused; }, [paused]);
  useEffect(() => {
    const el = host.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
    catch { queueMicrotask(() => setFailed(true)); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
    camera.position.set(7, 5, 10);
    scene.add(new THREE.HemisphereLight(0xeaf6ff, 0x53668b, 3));
    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(4, 8, 5); scene.add(light);
    const rim = new THREE.PointLight(0x407dff, 35); rim.position.set(-4, 3, 2); scene.add(rim);
    const world = new THREE.Group(); scene.add(world);
    const mat = (color, metalness = .15) => new THREE.MeshStandardMaterial({ color, metalness, roughness: .28 });
    const blue = mat(0x2463eb, .45), dark = mat(0x101e3b), white = mat(0xe9f1ff), mint = mat(0x98e8cf);
    function box(w,h,d,material,x,y,z,parent=world) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
      mesh.position.set(x,y,z); parent.add(mesh); return mesh;
    }
    const base = new THREE.Mesh(new THREE.CylinderGeometry(3.3,3.5,.35,80),white);
    base.position.y=-1.65; world.add(base);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.45,.025,12,100),blue);
    ring.rotation.x=-Math.PI/2; ring.position.y=-1.4; world.add(ring);
    // Desktop workstation.
    box(4,.18,2,white,0,-.65,0);
    box(.15,1,1.45,dark,-1.65,-1.2,0); box(.15,1,1.45,dark,1.65,-1.2,0);
    box(2.65,1.7,.16,dark,0,.65,-.45);
    box(2.4,1.43,.04,blue,0,.65,-.35);
    box(.16,.55,.16,white,0,-.4,-.45); box(.8,.07,.45,white,0,-.6,-.45);
    for(let i=0;i<6;i++) box(.45+(i%3)*.24,.045,.025,i%2?mint:white,-.55+(i%2)*.2,1.08-i*.16,-.315);
    box(1.2,.06,.5,dark,-.25,-.52,.55);
    for(let i=0;i<5;i++) for(let j=0;j<3;j++) box(.16,.015,.08,white,-.7+i*.22,-.48,.4+j*.12);
    // Floating mobile device.
    const phone = new THREE.Group(); phone.position.set(2.1,.3,.9); phone.rotation.set(-.1,-.45,.12); world.add(phone);
    box(.85,1.65,.13,dark,0,0,0,phone); box(.73,1.43,.03,white,0,0,.08,phone);
    box(.57,.48,.02,blue,0,.29,.105,phone);
    for(let i=0;i<3;i++) box(.48,.055,.02,blue,0,-.12-i*.17,.105,phone);
    box(.25,.045,.02,dark,0,.68,.11,phone);
    // Orbital craft elements.
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(.55,1),mint); orb.position.set(-2.25,.75,.8); world.add(orb);
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(.85,.04,12,80),blue); orbit.position.copy(orb.position); orbit.rotation.set(.8,.4,.2); world.add(orbit);
    const pointer = {x:0,y:0};
    const move = e => { const r=el.getBoundingClientRect(); pointer.x=(e.clientX-r.left)/r.width-.5; pointer.y=(e.clientY-r.top)/r.height-.5; };
    el.addEventListener('pointermove',move);
    const resize = () => { const w=el.clientWidth,h=el.clientHeight; renderer.setSize(w,h); camera.aspect=w/h; camera.updateProjectionMatrix(); };
    const observer=new ResizeObserver(resize); observer.observe(el); resize();
    let frame, visible=true, elapsed=0, last=0;
    const visibility = () => { visible=!document.hidden; last=0; };
    document.addEventListener('visibilitychange',visibility);
    const tick = time => {
      frame=requestAnimationFrame(tick);
      const dt=last?Math.min((time-last)/1000,.05):0; last=time;
      if(!visible) return;
      if(!pause.current) elapsed+=dt;
      const desired = -.35 + target.current*.48 + (pause.current?0:pointer.x*.16);
      world.rotation.y=THREE.MathUtils.damp(world.rotation.y,desired,4,dt);
      world.rotation.x=THREE.MathUtils.damp(world.rotation.x,pause.current?0:pointer.y*.05,4,dt);
      phone.position.y=.3+(pause.current?0:Math.sin(elapsed)*.12);
      orb.rotation.y=elapsed*.25;
      camera.lookAt(0,-.1,0); renderer.render(scene,camera);
    };
    frame=requestAnimationFrame(tick);
    const lost=e=>{e.preventDefault();setFailed(true);}; renderer.domElement.addEventListener('webglcontextlost',lost);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); el.removeEventListener('pointermove',move);
      document.removeEventListener('visibilitychange',visibility);
      scene.traverse(obj=>{obj.geometry?.dispose(); if(obj.material) obj.material.dispose();});
      renderer.dispose(); renderer.domElement.remove();
    };
  }, []);
  return <div className="studio-canvas" ref={host} aria-hidden="true">{failed && <div className="scene-fallback"><span>⌘</span><p>Mobile · Web · AI</p></div>}</div>;
}
