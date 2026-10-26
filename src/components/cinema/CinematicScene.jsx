import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
export default function CinematicScene(){
 const host=useRef(null);
 useEffect(()=>{
  const el=host.current;let renderer;try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}catch{return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,60);camera.position.set(0,0,9);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xe0efff,0x1d2233,2));const key=new THREE.DirectionalLight(0xb2d6ff,5);key.position.set(3,4,4);scene.add(key);const rim=new THREE.PointLight(0xffe5c1,25);rim.position.set(-3,-1,2);scene.add(rim);
  const group=new THREE.Group();scene.add(group);
  const geometry=new THREE.TorusKnotGeometry(1.5,.38,180,24,2,3),material=new THREE.MeshPhysicalMaterial({color:0x82a9cb,metalness:.85,roughness:.23,clearcoat:1});const sculpture=new THREE.Mesh(geometry,material);group.add(sculpture);
  const ringGeometry=new THREE.TorusGeometry(2.75,.012,8,160),ringMaterial=new THREE.MeshBasicMaterial({color:0x98b8d8,transparent:true,opacity:.35});const ring=new THREE.Mesh(ringGeometry,ringMaterial);ring.rotation.set(.6,.8,.2);group.add(ring);
  const pointer={x:0,y:0};let progress=0,visible=true,frame,last=0,time=0;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const move=e=>{pointer.x=e.clientX/innerWidth-.5;pointer.y=e.clientY/innerHeight-.5;};const scroll=()=>{progress=Math.min(scrollY/innerHeight,1.5);};const visibility=()=>{visible=!document.hidden;last=0;};
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('scroll',scroll,{passive:true});document.addEventListener('visibilitychange',visibility);
  const resize=()=>{renderer.setSize(el.clientWidth,el.clientHeight);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(el);resize();scroll();
  const animate=now=>{frame=requestAnimationFrame(animate);const dt=last?Math.min((now-last)/1000,.05):0;last=now;if(!visible)return;if(!reduced){time+=dt;sculpture.rotation.set(time*.08+pointer.y*.12,time*.13+progress*.5,pointer.x*.1);group.position.y=Math.sin(time*.4)*.07-progress*.3;}renderer.render(scene,camera);};frame=requestAnimationFrame(animate);
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('pointermove',move);window.removeEventListener('scroll',scroll);document.removeEventListener('visibilitychange',visibility);geometry.dispose();material.dispose();ringGeometry.dispose();ringMaterial.dispose();env.dispose();renderer.dispose();renderer.domElement.remove();};
 },[]);
 return <div ref={host} className="film-sculpture" aria-hidden="true"/>;
}
