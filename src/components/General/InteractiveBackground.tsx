import React, { useEffect, useState, useRef } from 'react';

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // --- Lógica de Partículas Premium ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 40; // Cantidad moderada para elegancia
    const colors = ['#DA3731', '#1096D6', '#9EB35D', '#F7B033'];

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        
        // Dibujar líneas entre partículas cercanas (Networking style)
        for (let j = index; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 1 - (distance / 150); // Desvanecimiento por distancia
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Capa de Partículas (Nueva) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-40" // Opacidad baja para no distraer
      />

      {/* Orbe Rojo - Arriba Izquierda */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-agency-red/20 rounded-full blur-[120px] animate-blob" />
      
      {/* Orbe Azul - Derecha Centro */}
      <div 
        className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-agency-blue/15 rounded-full blur-[130px] animate-blob"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Orbe Verde - Abajo Izquierda */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] bg-agency-green/15 rounded-full blur-[120px] animate-blob"
        style={{ animationDelay: '4s' }}
      />

      {/* Orbe Amarillo - Interactivo con Mouse */}
      <div 
        className="absolute w-[400px] h-[400px] bg-agency-yellow/10 rounded-full blur-[100px] pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' // Más suave
        }}
      />
    </div>
  );
};

export default InteractiveBackground;