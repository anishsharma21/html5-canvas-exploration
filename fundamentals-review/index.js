const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const radius = 1;
const numBalls = 1000;
const balls = [];
const speed = 50; // Reduced speed

class Ball {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.dx = (Math.cos(angle) * speed) / 60;
    this.dy = (Math.sin(angle) * speed) / 60;
    this.isPaused = false;
    this.changeDirection();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (!this.isPaused) {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x - radius < 0 || this.x + radius > canvas.width) this.dx *= -1;
      if (this.y - radius < 0 || this.y + radius > canvas.height) this.dy *= -1;
    }
  }

  changeDirection() {
    this.isPaused = true;
    setTimeout(() => {
      this.angle = Math.random() * 2 * Math.PI;
      this.dx = (Math.cos(this.angle) * speed) / 60;
      this.dy = (Math.sin(this.angle) * speed) / 60;
      this.isPaused = false;

      const moveDuration = Math.random() * 1500 + 500;
      setTimeout(() => this.changeDirection(), moveDuration);
    }, Math.random() * 1500 + 500); // Pause between 0.5 and 2 seconds
  }

  checkCollision(otherBall) {
    const dx = this.x - otherBall.x;
    const dy = this.y - otherBall.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius * 2) {
      const angle = Math.atan2(dy, dx);
      const speed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
      this.dx = Math.cos(angle) * speed;
      this.dy = Math.sin(angle) * speed;
      otherBall.dx = -Math.cos(angle) * speed;
      otherBall.dy = -Math.sin(angle) * speed;
    }
  }
}

function initBalls() {
  for (let i = 0; i < numBalls; i++) {
    const x = Math.random() * (canvas.width - 2 * radius) + radius;
    const y = Math.random() * (canvas.height - 2 * radius) + radius;
    const angle = Math.random() * 2 * Math.PI;
    balls.push(new Ball(x, y, angle));
  }
}

function drawBalls() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => ball.draw());
}

function updateBalls() {
  balls.forEach((ball) => ball.update());
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      balls[i].checkCollision(balls[j]);
    }
  }
}

function animate() {
  updateBalls();
  drawBalls();
  requestAnimationFrame(animate);
}

initBalls();
animate();
