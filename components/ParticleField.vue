<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface Props {
  particleCount?: number;
  color?: string;
  maxSize?: number;
  speed?: number;
  connectDistance?: number;
  mouseInfluence?: number;
  depth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  particleCount: 80,
  color: '255, 255, 255',
  maxSize: 3,
  speed: 0.5,
  connectDistance: 120,
  mouseInfluence: 100,
  depth: true,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId: number;
let particles: Particle[] = [];
let mouse = { x: -1000, y: -1000 };
let canvasWidth = 0;
let canvasHeight = 0;

interface Particle {
  x: number;
  y: number;
  z: number; // depth layer (0-1)
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  opacity: number;
}

function createParticle(): Particle {
  const z = props.depth ? Math.random() : 1;
  const baseSize = Math.random() * props.maxSize + 0.5;
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    z,
    vx: (Math.random() - 0.5) * props.speed * z,
    vy: (Math.random() - 0.5) * props.speed * z,
    size: baseSize * z,
    baseSize,
    opacity: 0.2 + z * 0.6,
  };
}

function initParticles() {
  particles = [];
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(createParticle());
  }
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouse.x = -1000;
  mouse.y = -1000;
}

function handleResize() {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const parent = canvas.parentElement;
  if (!parent) return;

  canvasWidth = parent.offsetWidth;
  canvasHeight = parent.offsetHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Reinitialize particles for new dimensions
  initParticles();
}

function animate() {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Update and draw particles
  particles.forEach((particle, i) => {
    // Mouse influence
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < props.mouseInfluence) {
      const force = (props.mouseInfluence - distance) / props.mouseInfluence;
      const angle = Math.atan2(dy, dx);
      particle.vx -= Math.cos(angle) * force * 0.5 * particle.z;
      particle.vy -= Math.sin(angle) * force * 0.5 * particle.z;
    }

    // Apply velocity with damping
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vx *= 0.99;
    particle.vy *= 0.99;

    // Add slight drift
    particle.vx += (Math.random() - 0.5) * 0.02 * particle.z;
    particle.vy += (Math.random() - 0.5) * 0.02 * particle.z;

    // Boundary wrapping
    if (particle.x < -10) particle.x = canvasWidth + 10;
    if (particle.x > canvasWidth + 10) particle.x = -10;
    if (particle.y < -10) particle.y = canvasHeight + 10;
    if (particle.y > canvasHeight + 10) particle.y = -10;

    // Draw particle with glow effect
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 2
    );
    gradient.addColorStop(0, `rgba(${props.color}, ${particle.opacity})`);
    gradient.addColorStop(0.5, `rgba(${props.color}, ${particle.opacity * 0.5})`);
    gradient.addColorStop(1, `rgba(${props.color}, 0)`);

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw connections to nearby particles
    for (let j = i + 1; j < particles.length; j++) {
      const other = particles[j];
      const cdx = particle.x - other.x;
      const cdy = particle.y - other.y;
      const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

      if (cdist < props.connectDistance) {
        const lineOpacity = (1 - cdist / props.connectDistance) * 0.3 * particle.z * other.z;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(${props.color}, ${lineOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  animationId = requestAnimationFrame(animate);
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

  const canvas = canvasRef.value;
  if (canvas) {
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
  }

  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);

  const canvas = canvasRef.value;
  if (canvas) {
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', handleMouseLeave);
  }
});

// Watch for prop changes
watch(() => props.particleCount, () => {
  initParticles();
});
</script>

<template>
  <canvas
    ref="canvasRef"
    class="particle-canvas absolute inset-0 w-full h-full pointer-events-auto"
  ></canvas>
</template>

<style scoped>
.particle-canvas {
  z-index: 1;
}
</style>
