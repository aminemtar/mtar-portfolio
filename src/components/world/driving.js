export const spawn = { x: 0, z: 22, heading: Math.PI, speed: 0 };

// Arcade-style handling: gentle acceleration, predictable steering and
// strong natural deceleration when the driver releases the throttle.
export function stepCar(car, throttle, steer, brake, dt, buildings) {
  dt = Math.max(0, Math.min(dt, 0.05));
  const input = Math.max(-1, Math.min(1, throttle));
  const turn = Math.max(-1, Math.min(1, steer));
  const previousSpeed = car.speed;

  // Low maximum speed makes the city easy to navigate, particularly on touch.
  const maxForward = 7.5;
  const maxReverse = 2.8;
  const acceleration = input >= 0 ? 6.2 : 4.3;
  const drag = brake ? 16 : 7.2;
  let speed = previousSpeed;

  if (brake) {
    speed = Math.sign(speed) * Math.max(0, Math.abs(speed) - drag * dt);
  } else if (input !== 0) {
    // Reverse input first slows a moving car instead of instantly flipping direction.
    speed += input * acceleration * dt;
  } else {
    speed = Math.sign(speed) * Math.max(0, Math.abs(speed) - drag * dt);
  }

  speed = Math.max(-maxReverse, Math.min(maxForward, speed));
  // Only snap to rest when the driver is NOT accelerating.\n  // Otherwise high-refresh-rate phones (120 Hz) can reset speed every frame.\n  if (input === 0 && Math.abs(speed) < 0.06) speed = 0;

  // Steering fades at speed and requires movement, preventing spins in place.
  // A little steering at parking speed remains possible for tight city turns.
  const speedRatio = Math.min(Math.abs(speed) / maxForward, 1);
  const steeringRate = (1.45 - 0.65 * speedRatio) * Math.min(Math.abs(speed) / 2, 1);
  const heading = car.heading - turn * steeringRate * dt * Math.sign(speed || previousSpeed || 1);

  const x = car.x + Math.sin(heading) * speed * dt;
  const z = car.z + Math.cos(heading) * speed * dt;
  const collision = Math.abs(x) > 23.5 || Math.abs(z) > 27.5 ||
    buildings.some(b => Math.abs(x - b.x) < 4.1 && Math.abs(z - b.z) < 3);

  // Don't let the car repeatedly accelerate into a wall.
  return { x: collision ? car.x : x, z: collision ? car.z : z,
    heading: collision ? car.heading : heading, speed: collision ? 0 : speed };
}

export function angleDelta(target, current) {
  return Math.atan2(Math.sin(target - current), Math.cos(target - current));
}
