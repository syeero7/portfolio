import Particle from "./Particle";

const canvas = document.querySelector("#particles") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const particleCount = 25;
const mouseCoords: { x: number; y: number } = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
let particles: Particle[];

export function initializeAnimation() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", handleResize);
  window.addEventListener("mousemove", handleMouseMove);
  createParticles(particleCount);
  animate();
}

function animate() {
  context!.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update(mouseCoords.x, mouseCoords.y, canvas);
    particles[i].draw(context!);
  }

  requestAnimationFrame(animate);
}

function createParticles(count: number) {
  particles = Array.from({ length: count }).map(
    () => new Particle(canvas.width, canvas.height),
  );
}

function handleMouseMove(e: MouseEvent) {
  mouseCoords.x = e.clientX;
  mouseCoords.y = e.clientY;
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles(particleCount);
}
