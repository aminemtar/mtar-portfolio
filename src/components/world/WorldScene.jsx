import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { locations } from './locations';

export default function WorldScene({ destination, blocked, controls, onNear, onArrive, onFail, lang, reduced }) {
  const host=useRef(null), live=useRef({});
  useEffect(()=>{live.current={destination,blocked,controls,onNear,onArrive,onFail,reduced};},[destination,blocked,controls,onNear,onArrive,onFail,reduced]);
  const [unavailable,setUnavailable]=useState(false);
  useEffect(()=>{
    const el=host.current;
    let renderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true});}catch{queueMicrotask(()=>{setUnavailable(true);live.current.onFail();});return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x101c32);
    renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;el.appendChild(renderer.domElement);
    const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x101c32,36,75);
    const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(18,24,25);
    scene.add(new THREE.HemisphereLight(0xc8eaff,0x536172,2.5));
    const sun=new THREE.DirectionalLight(0xffe7ce,3);sun.position.set(8,22,10);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-24,right:24,top:24,bottom:-24});scene.add(sun);
    const materials=[];const geometries=[];const textures=[];
    const mat=(c)=>{const m=new THREE.MeshStandardMaterial({color:c,roughness:.65});materials.push(m);return m;};
    const grass=mat(0x31565b),path=mat(0x71828c),navy=mat(0x182d48),white=mat(0xdce8ec),wood=mat(0x604b44);
    const mesh=(g,m,x,y,z,parent=scene)=>{geometries.push(g);const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;};
    const box=(w,h,d,m,x,y,z,p)=>mesh(new THREE.BoxGeometry(w,h,d),m,x,y,z,p);
    mesh(new THREE.CylinderGeometry(22,20,2.8,10),navy,0,-1.7,0);
    const ground=mesh(new THREE.CylinderGeometry(21.8,21.8,.4,80),grass,0,-.2,0);ground.name='ground';
    locations.forEach(loc=>{
      const length=Math.hypot(loc.x,loc.z);
      if(length){const road=box(1.6,.04,length,path,loc.x/2,.04,loc.z/2);road.rotation.y=Math.atan2(loc.x,loc.z);}
    });
    function label(text,x,y,z,color='#e9f5ff'){
      const c=document.createElement('canvas');c.width=768;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#14253a';ctx.fillRect(0,0,768,128);ctx.font='600 43px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(text,384,64);
      const texture=new THREE.CanvasTexture(c);textures.push(texture);const m=new THREE.SpriteMaterial({map:texture});materials.push(m);const sprite=new THREE.Sprite(m);sprite.position.set(x,y,z);sprite.scale.set(5.8,.97,1);scene.add(sprite);
    }
    const beacons=[];
    locations.forEach((loc,index)=>{
      const accent=mat(loc.color);const station=new THREE.Group();station.position.set(loc.x,0,loc.z);scene.add(station);
      mesh(new THREE.CylinderGeometry(2.8,2.9,.25,32),white,0,.12,0,station);
      const beacon=mesh(new THREE.TorusGeometry(2.55,.055,8,64),accent,0,.3,0,station);beacon.rotation.x=-Math.PI/2;beacons.push(beacon);
      if(loc.id==='work'){
        [-1.1,1.1].forEach(x=>{box(1.55,2.4,1.2,navy,x,1.5,0,station);box(1.3,1,.05,accent,x,1.9,.63,station);box(1.5,.15,.6,white,x,1,.7,station);mesh(new THREE.SphereGeometry(.1,8,8),accent,x+.3,1.2,.8,station);});
      }else if(loc.id==='skills'){
        box(3,.2,1.4,wood,0,1,0,station);[-1.2,1.2].forEach(x=>box(.15,1,.8,navy,x,.5,0,station));box(1.6,1,.12,navy,0,1.8,-.2,station);box(1.4,.8,.04,accent,0,1.8,-.12,station);mesh(new THREE.TorusKnotGeometry(.4,.12,48,8),accent,1.1,1.65,.2,station);
      }else if(loc.id==='experience'){
        for(let j=0;j<3;j++){box(.9,1+j*.5,.9,navy,-1.1+j*1.1,.5+j*.25,0,station);box(.6,.1,.95,accent,-1.1+j*1.1,1.05+j*.5,0,station);}
      }else if(loc.id==='education'){
        for(let j=0;j<4;j++){const b=box(2,.3,1,mat([0x83b6e8,0xe69fff,0x52dfbc,0xffba75][j]),0,.6+j*.32,0,station);b.rotation.y=j*.17;}mesh(new THREE.OctahedronGeometry(.5),accent,0,2.7,0,station);
      }else if(loc.id==='contact'){
        box(2.4,1.5,.2,accent,0,1.6,0,station);const flap=mesh(new THREE.ConeGeometry(1.15,.7,3),white,0,1.6,.18,station);flap.rotation.z=Math.PI;box(.2,1,.2,white,0,.6,0,station);
      }else{
        mesh(new THREE.CylinderGeometry(.8,1.2,.8,8),navy,0,.65,0,station);mesh(new THREE.IcosahedronGeometry(.85,0),accent,0,1.9,0,station);
      }
      label(`${loc.icon}  ${loc[lang]}`,loc.x,4.15,loc.z);
      if(index===0)label('MOHAMED AMINE MTAR',0,5.3,0,'#68d5ff');
    });
    // Trees sit outside all walking paths.
    for(let i=0;i<23;i++){const a=i/23*Math.PI*2,r=18+(i%3)*.55,x=Math.sin(a)*r,z=Math.cos(a)*r;box(.22,1.2,.22,wood,x,.6,z);mesh(new THREE.ConeGeometry(.75,2.5,6),mat(i%2?0x448579:0x397469),x,2,z);}
    const player=new THREE.Group();player.position.set(0,0,5);scene.add(player);const coat=mat(0x4595ff),skin=mat(0xf1c5a0);
    box(.65,.85,.4,coat,0,1,0,player);mesh(new THREE.SphereGeometry(.28,16,12),skin,0,1.7,0,player);const legs=[box(.22,.6,.25,navy,-.2,.35,0,player),box(.22,.6,.25,navy,.2,.35,0,player)];box(.8,.16,.65,navy,0,1.94,0,player);
    const keys=new Set();let goal=null,lastDestination=null,near=null,frame,last=0,clock=0;
    const down=e=>{if(live.current.blocked||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();keys.add(e.key.toLowerCase());};
    const up=e=>keys.delete(e.key.toLowerCase());const clear=()=>keys.clear();
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);window.addEventListener('blur',clear);
    const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
    const click=e=>{if(live.current.blocked)return;const r=el.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);const hit=ray.intersectObject(ground)[0];if(hit){goal=hit.point.clone();goal.y=0;}};
    renderer.domElement.addEventListener('pointerdown',click);
    const resize=()=>{renderer.setSize(el.clientWidth,el.clientHeight);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();};const ro=new ResizeObserver(resize);ro.observe(el);resize();
    const look=new THREE.Vector3(),desiredCamera=new THREE.Vector3();
    function tick(time){frame=requestAnimationFrame(tick);const dt=last?Math.min((time-last)/1000,.05):0;last=time;if(document.hidden)return;clock+=dt;
      const current=live.current;
      if(current.destination!==lastDestination){lastDestination=current.destination;const loc=locations.find(l=>l.id===current.destination?.id);if(loc)goal=new THREE.Vector3(loc.x,0,loc.z+2);}
      let dx=0,dz=0;
      if(!current.blocked){
        dx=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('q')||keys.has('arrowleft')?1:0)+(current.controls.x||0);
        dz=(keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('w')||keys.has('z')||keys.has('arrowup')?1:0)+(current.controls.z||0);
        if(dx||dz)goal=null;
        else if(goal){const delta=goal.clone().sub(player.position);if(delta.length()<.15){goal=null;current.onArrive();}else{dx=delta.x;dz=delta.z;}}
        const direction=new THREE.Vector3(dx,0,dz);if(direction.length()){direction.normalize();player.position.addScaledVector(direction,dt*5);player.rotation.y=Math.atan2(direction.x,direction.z);legs[0].rotation.x=current.reduced?0:Math.sin(clock*12)*.5;legs[1].rotation.x=-legs[0].rotation.x;}else legs.forEach(l=>l.rotation.x=0);
        if(player.position.length()>20)player.position.setLength(20);
      }else{keys.clear();}
      const closest=locations.find(l=>Math.hypot(l.x-player.position.x,l.z+1-player.position.z)<3.2)?.id||null;
      if(near!==closest){near=closest;current.onNear(near);}
      desiredCamera.set(player.position.x*.55+16,23,player.position.z*.55+21);camera.position.lerp(desiredCamera,current.reduced?1:1-Math.exp(-dt*3));look.set(player.position.x*.6,0,player.position.z*.6);camera.lookAt(look);
      beacons.forEach((b,i)=>{b.material.emissive.setHex(locations[i].id===near?locations[i].color:0);b.material.emissiveIntensity=.4;});
      renderer.render(scene,camera);
    }
    frame=requestAnimationFrame(tick);
    const lost=e=>{e.preventDefault();setUnavailable(true);live.current.onFail();};renderer.domElement.addEventListener('webglcontextlost',lost);
    return()=>{cancelAnimationFrame(frame);ro.disconnect();window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);window.removeEventListener('blur',clear);renderer.domElement.removeEventListener('pointerdown',click);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();};
  },[lang]);
  return <div className="world-render" ref={host} aria-hidden="true">{unavailable&&<p>3D unavailable — use the accessible portfolio.</p>}</div>;
}
