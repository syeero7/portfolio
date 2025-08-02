export default class Particle {
  private x: number;
  private y: number;
  private size: number;
  private speedX: number;
  private speedY: number;
  private color: string;
  private density: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.size = Math.random() * 2 + 2;
    this.x = Math.random() * (canvasWidth - this.size * 2) + this.size;
    this.y = Math.random() * (canvasHeight - this.size * 2) + this.size;
    this.speedX = Math.random() * 2 - 0.5;
    this.speedY = Math.random() * 2 - 0.5;
    this.density = Math.random() * 20 + 10;
    this.color = "hsla(0, 0%, 100%, 0.75)";
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }

  update(mouseX: number, mouseY: number, canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + this.size > canvas.width || this.x - this.size < 0)
      this.speedX *= -1;

    if (this.y + this.size > canvas.height || this.y - this.size < 0)
      this.speedY *= -1;

    const repulsionRadius = 150;
    const distanceX = mouseX - this.x;
    const distanceY = mouseY - this.y;
    const distanceSq = distanceX * distanceX + distanceY * distanceY;
    const repulsionRadiusSq = repulsionRadius * repulsionRadius;
    if (distanceSq >= repulsionRadiusSq) return;

    const distance = Math.sqrt(distanceSq);
    if (distance >= repulsionRadius) return;

    const force = repulsionRadius / Math.max(distance, 0.5);
    const directionX = distanceX / distance;
    const directionY = distanceY / distance;

    this.x -= directionX * force * (this.density * 0.05);
    this.y -= directionY * force * (this.density * 0.05);
  }
}
