export const spawn = { x:0, z:22, heading:Math.PI, speed:0 };
export function stepCar(car, throttle, steer, brake, dt, buildings) {
  dt=Math.max(0,Math.min(dt,.05));
  const acceleration=throttle*12-(brake?20:3.5)*Math.sign(car.speed);
  let speed=car.speed+acceleration*dt;
  if(!throttle && Math.sign(speed)!==Math.sign(car.speed))speed=0;
  speed=Math.max(-5,Math.min(12,speed));
  const heading=car.heading-steer*Math.min(Math.abs(speed)/4,1)*1.65*dt*Math.sign(speed);
  const x=car.x+Math.sin(heading)*speed*dt,z=car.z+Math.cos(heading)*speed*dt;
  const collision=Math.abs(x)>24||Math.abs(z)>28||buildings.some(b=>Math.abs(x-b.x)<4.1&&Math.abs(z-b.z)<3);
  return {x:collision?car.x:x,z:collision?car.z:z,heading,speed:collision?0:speed};
}
export function angleDelta(target,current){return Math.atan2(Math.sin(target-current),Math.cos(target-current));}
