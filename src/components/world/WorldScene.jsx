import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { locations } from './locations';
import { spawn, stepCar, angleDelta } from './driving';

export default function WorldScene({ destination, blocked, controls, onNear, onArrive, onFail, onDrive, reset, lang, reduced }) {
 const host=useRef(null),live=useRef({});
 useEffect(()=>{live.current={destination,blocked,controls,onNear,onArrive,onFail,onDrive,reset,reduced};},[destination,blocked,controls,onNear,onArrive,onFail,onDrive,reset,reduced]);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const el=host.current;let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true});}catch{queueMicrotask(()=>live.current.onFail());return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x101d33);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;renderer.shadowMap.enabled=true;el.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x101d33,48,110);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();pmrem.dispose();
  const camera=new THREE.PerspectiveCamera(48,1,.1,150);camera.position.set(25,32,42);
  scene.add(new THREE.HemisphereLight(0xbde6ff,0x465568,2.8));const sun=new THREE.DirectionalLight(0xffd7a5,3.5);sun.position.set(-15,30,15);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-32,right:32,top:32,bottom:-32});scene.add(sun);
  const geometries=[],materials=[],textures=[];
  const material=(color,metalness=.2,roughness=.5,emissive=0)=>{const m=new THREE.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:1.2});materials.push(m);return m;};
  const asphalt=material(0x17283a),pavement=material(0x5a7185),metal=material(0x23364e,.8,.24),glass=material(0x4082a2,.65,.15),ivory=material(0xcbd9dd,.35,.3),grass=material(0x254b46),paint=material(0x97aabc),blue=material(0x268cff,.7,.2),rubber=material(0x111821),chrome=material(0xa6c4d4,.9,.18);
  const mesh=(geo,mat,x,y,z,parent=scene)=>{geometries.push(geo);const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const box=(w,h,d,m,x,y,z,parent)=>mesh(new THREE.BoxGeometry(w,h,d),m,x,y,z,parent);
  box(52,1,62,metal,0,-.65,0);const ground=box(50,.3,60,grass,0,-.15,0);
  box(6,.035,56,asphalt,0,.03,0);
  for(let z=-26;z<28;z+=3)box(.12,.02,1.2,paint,0,.06,z);
  locations.forEach(l=>{box(19,.04,4.6,asphalt,l.x/2,.04,l.z+4.7);box(9,.14,6,pavement,l.x,.1,l.z);for(let x=2;x<15;x+=3)box(1,.02,.12,paint,Math.sign(l.x)*x,.08,l.z+4.7);for(let i=0;i<3;i++)box(.1,.02,2.2,paint,l.x-2+i*2,.08,l.z+4.7);});
  const informationBoards=[];
  function label(text,x,y,z,width=7,color='#e4f4ff',parent=scene){
   const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#11233a';ctx.fillRect(0,0,1024,128);ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='600 40px sans-serif';ctx.fillStyle=color;ctx.fillText(text,512,64,980);const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;textures.push(tex);const mat=new THREE.SpriteMaterial({map:tex,depthTest:false,depthWrite:false,toneMapped:false});materials.push(mat);const sprite=new THREE.Sprite(mat);sprite.position.set(x,y,z);sprite.scale.set(width,width/8,1);sprite.renderOrder=100;parent.add(sprite);
  }
  const beacons=[];
  locations.forEach((l,index)=>{
   const accent=material(l.color,.5,.2),neon=material(l.color,.2,.2,l.color),building=new THREE.Group();building.position.set(l.x,0,l.z);scene.add(building);
   const height=l.id==='experience'?10:l.id==='skills'?6:4.8;
   box(6.6,height,4.2,l.id==='education'?ivory:metal,0,height/2+.2,0,building);
   box(6.2,height-.8,.08,glass,0,height/2+.2,2.14,building);
   for(let floor=1;floor<height;floor+=1.4){box(6.7,.12,4.4,chrome,0,floor,0,building);for(let x=-2.5;x<=2.5;x+=1.25)box(.045,1,.09,neon,x,floor+.5,2.2,building);}
   box(7,.22,4.6,accent,0,height+.3,0,building);box(7.3,.1,4.9,neon,0,height+.45,0,building);
   box(1.2,2,.12,glass,0,1.1,2.3,building);box(2.5,.12,1.7,accent,0,2.3,2.8,building);
   // One camera-facing information board per building, lifted clear of the roof.
   // Depth testing is disabled only for information, so city geometry cannot hide it.
   const board=new THREE.Group();board.position.set(l.x,height+3.6,l.z);scene.add(board);informationBoards.push(board);
   label(`${l.icon} / ${l[lang]}`,0,1.25,0,7,'#e4f4ff',board);
   label(l.headline,0,.35,0,7,'#ffffff',board);
   label(l.summary,0,-.5,0,7,'#9ddcff',board);
   const photo=(url,x,y,w,h)=>{
    const texture=new THREE.TextureLoader().load(url,loaded=>{
     const ratio=loaded.image.width/loaded.image.height;
     const fit=Math.min(w/ratio,h);sprite.scale.set(fit*ratio,fit,1);
    });texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);
    const m=new THREE.SpriteMaterial({map:texture,depthTest:false,depthWrite:false,toneMapped:false});materials.push(m);
    const sprite=new THREE.Sprite(m);sprite.position.set(x,y,.02);sprite.scale.set(w,h,1);sprite.renderOrder=101;board.add(sprite);
   };
   if(l.id==='work'){
    photo(`${import.meta.env.BASE_URL}projects/clothy-1.jpeg`,-1.2,-2.5,2,2.8);
    photo(`${import.meta.env.BASE_URL}projects/artie-1.jpg`,1.2,-2.5,2,2.8);
   }
   if(l.id==='about')photo(`${import.meta.env.BASE_URL}profil.png`,0,-2.5,2.3,2.8);
   if(l.id==='contact'){const ring=mesh(new THREE.TorusGeometry(1.3,.13,10,48),neon,0,height+2,0,building);ring.rotation.y=.4;}
   const beacon=mesh(new THREE.TorusGeometry(1.4,.05,8,48),neon,l.x,.13,l.z+4.7);beacon.rotation.x=-Math.PI/2;beacons.push(beacon);label('P',l.x,.2,l.z+4.7,1.1);
   // Street lamps and trees frame each block; the roadway remains clear.
   [-4.5,4.5].forEach(x=>{box(.1,4,.1,chrome,l.x+x,2,l.z+2.5);box(.7,.12,.5,neon,l.x+x,4,l.z+2.5);mesh(new THREE.CylinderGeometry(.13,.2,1.4,8),metal,l.x+x,.7,l.z-2.3);mesh(new THREE.IcosahedronGeometry(.9,1),grass,l.x+x,2,l.z-2.3);});
   if(index===0)label('MTAR AVENUE',0,7,-22,8,'#87d8ff');
  });
  // A recognisable sports coupe, modelled locally with paint, glass and alloy wheels.
  const carMesh=new THREE.Group();scene.add(carMesh);
  box(1.55,.45,2.9,blue,0,.55,0,carMesh);box(1.35,.25,2.6,blue,0,.82,.05,carMesh);box(1.14,.53,1.25,glass,0,1.06,-.2,carMesh);box(1.15,.1,1.2,blue,0,1.36,-.2,carMesh);box(1.6,.1,.3,metal,0,.95,-1.35,carMesh);
  const wheels=[];[-.82,.82].forEach(x=>[-.94,.94].forEach(z=>{const wheel=mesh(new THREE.CylinderGeometry(.34,.34,.22,20),rubber,x,.36,z,carMesh);wheel.rotation.z=Math.PI/2;wheels.push(wheel);const hub=mesh(new THREE.CylinderGeometry(.19,.19,.235,12),chrome,x,.36,z,carMesh);hub.rotation.z=Math.PI/2;}));
  const headlights=material(0xe3faff,.2,.2,0x8ddfff),taillights=material(0xff4c5f,.2,.2,0xff233d);[-.5,.5].forEach(x=>{box(.35,.12,.06,headlights,x,.73,1.48,carMesh);box(.35,.1,.06,taillights,x,.73,-1.48,carMesh);});
  let car={...spawn},route=[],lastDestination=null,lastReset=live.current.reset,near=null,last=0,frame,report=0;const keys=new Set();
  const clear=()=>keys.clear();const down=e=>{if(live.current.blocked||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();keys.add(e.key.toLowerCase());};const up=e=>keys.delete(e.key.toLowerCase());window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);
  const setRoute=(x,z)=>{route=[{x:0,z:car.z},{x:0,z},{x,z}];};
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();const click=e=>{if(live.current.blocked)return;const rect=el.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);const hit=ray.intersectObject(ground)[0];if(hit){const closest=locations.reduce((a,b)=>Math.hypot(a.x-hit.point.x,a.z-hit.point.z)<Math.hypot(b.x-hit.point.x,b.z-hit.point.z)?a:b);setRoute(closest.x,closest.z+4.7);}};renderer.domElement.addEventListener('pointerdown',click);
  const resize=()=>{renderer.setSize(el.clientWidth,el.clientHeight);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(el);resize();const targetCamera=new THREE.Vector3(),look=new THREE.Vector3();
  function tick(time){frame=requestAnimationFrame(tick);const dt=last?Math.min((time-last)/1000,.05):0;last=time;if(document.hidden)return;const c=live.current;
   if(c.reset!==lastReset){car={...spawn};route=[];lastReset=c.reset;}
   if(c.destination!==lastDestination){lastDestination=c.destination;const l=locations.find(l=>l.id===c.destination?.id);if(l)setRoute(l.x,l.z+4.7);}
   if(!c.blocked){let throttle=(keys.has('w')||keys.has('z')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0)-c.controls.z;let steer=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('q')||keys.has('arrowleft')?1:0)+c.controls.x;const brake=keys.has(' ');
    if(throttle||steer||brake)route=[];
    if(route.length){let next=route[0];const distance=Math.hypot(next.x-car.x,next.z-car.z);if(distance<1){route.shift();if(!route.length){car.speed=0;c.onArrive();}}else{const desired=Math.atan2(next.x-car.x,next.z-car.z),delta=angleDelta(desired,car.heading);car.heading+=Math.max(-2.4*dt,Math.min(2.4*dt,delta));throttle=1;steer=0;car.speed=Math.min(car.speed,Math.abs(delta)>.6?2.5:Math.max(2,Math.min(7,distance*2)));}}
    car=stepCar(car,throttle,steer,brake,dt,locations);
   }else{car.speed=0;keys.clear();}
   carMesh.position.set(car.x,0,car.z);carMesh.rotation.y=car.heading;wheels.forEach(w=>w.rotation.x+=car.speed*dt*2.7);
   const closest=locations.find(l=>Math.hypot(l.x-car.x,l.z+4.7-car.z)<3.3&&Math.abs(car.speed)<3)?.id||null;if(closest!==near){near=closest;c.onNear(near);}
   const viewing=c.blocked&&!c.destination&&car.z===spawn.z;
   if(viewing){targetCamera.set(27,32,41);look.set(0,0,0);}else{targetCamera.set(car.x-Math.sin(car.heading)*12,10,car.z-Math.cos(car.heading)*12);look.set(car.x+Math.sin(car.heading)*4,1,car.z+Math.cos(car.heading)*4);}
   camera.position.lerp(targetCamera,c.reduced?1:1-Math.exp(-dt*3));camera.lookAt(look);
   informationBoards.forEach(board=>{
    board.quaternion.copy(camera.quaternion);
    // Keep distant cards readable without letting nearby cards fill the screen.
    const scale=THREE.MathUtils.clamp(camera.position.distanceTo(board.position)/30,.85,1.65);
    board.scale.setScalar(scale);
   });renderer.render(scene,camera);
   report+=dt;if(report>.1){report=0;c.onDrive?.({x:car.x,z:car.z,heading:car.heading,speed:Math.abs(car.speed)*3.6,autopilot:route.length>0});}
  }
  frame=requestAnimationFrame(tick);const lost=e=>{e.preventDefault();setFailed(true);live.current.onFail();};renderer.domElement.addEventListener('webglcontextlost',lost);
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());env.dispose();renderer.dispose();renderer.domElement.remove();};
 },[lang]);
 return <div className="world-render" ref={host} aria-hidden="true">{failed&&<p>3D unavailable</p>}</div>;
}
