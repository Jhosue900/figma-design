import React, { useEffect, useRef } from 'react';
import NetworkImage from "../../images/atomoHD-2.webp";


import LOGO1  from "../../images/Atomo/log1.png";
import LOGO2  from "../../images/Atomo/log2.png";
import LOGO3  from "../../images/Atomo/log3.png";
import LOGO4  from "../../images/Atomo/log4.png";
import LOGO5  from "../../images/Atomo/log5.png";
import LOGO6  from "../../images/Atomo/log6.png";
import LOGO7  from "../../images/Atomo/log7.png";
import LOGO8  from "../../images/Atomo/log8.png";
import LOGO9  from "../../images/Atomo/log9.png";
import LOGO10 from "../../images/Atomo/log10.png";
import LOGO11 from "../../images/Atomo/log11.png";
import LOGO12 from "../../images/Atomo/log12.png";
import LOGO13 from "../../images/Atomo/log13.png";
import LOGO14 from "../../images/Atomo/log14.png";
import LOGO15 from "../../images/Atomo/log15.png";
import LOGO16 from "../../images/Atomo/log16.png";
import LOGO17 from "../../images/Atomo/log17.png";
import LOGO18 from "../../images/Atomo/log18.png";
import LOGO19 from "../../images/Atomo/log19.png";
import LOGO20 from "../../images/Atomo/log20.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LogoNode {
  id:   number;
  src:  string;
  /** % from top-left, pointing to the CENTER of each circle */
  top:  number;
  left: number;
  /** diameter as % of container width */
  size: number;
}


const CONFIG = {
  velocidadGiro: 0.002,      // Ajustado para ser más elegante
  areaGravedadCursor: 180,   // Radio de atracción del mouse
  fuerzaAtraccion: 0.0004,
  fuerzaRepulsion: 0.04,
  colisionDist: 45,          // Distancia para que no se encimen
};


// ─── Node positions ───────────────────────────────────────────────────────────
// Positions extracted programmatically from the actual PNG (485×482 px).
// top/left = centre of each black circle node.

const NODES: LogoNode[] = [
  { id:  1, src: LOGO1,  top:  18.3, left:  59.3, size: 9.5 }, //OK
  { id:  2, src: LOGO2,  top:  90.8, left:  58.2, size: 11 }, //OK
  { id:  3, src: LOGO3,  top:  88.9, left:  40, size: 9 }, //OK
  { id:  4, src: LOGO4,  top:  68.4, left:  42.9, size: 9.5 }, //OK
  { id:  5, src: LOGO5,  top:  65.2, left:  82.9, size: 9.5 },
  { id:  6, src: LOGO6,  top: 85.0, left:  16.0, size: 10.5 }, //OK
  { id:  7, src: LOGO7,  top:  59.0, left:   8.2, size: 10 }, //OK
  { id:  8, src: LOGO8,  top:  15.5, left:  74.0, size: 8 }, //OK
  { id:  9, src: LOGO9,  top:  56, left:  29.3, size: 9.7 }, //OK
  { id: 10, src: LOGO10, top:  42.3, left:  6.29, size: 8 }, //OK
  { id: 11, src: LOGO11, top:  18.2, left:  34.8, size: 9 }, //OK
  { id: 12, src: LOGO12, top:  49.0, left:  67, size: 9 }, //OK
  { id: 13, src: LOGO13, top:  50.2, left:  93.2, size: 9.5 }, //OK
  { id: 14, src: LOGO14, top:  30.0, left:  83, size: 10 }, //OK
  { id: 15, src: LOGO15, top:  63.0, left:  63.2, size: 8.5 }, //OK
  { id: 16, src: LOGO16, top:  42, left:  20.5, size: 9 }, //OK
  { id: 17, src: LOGO17, top:   6, left:  48, size: 9.5 }, //OK
  { id: 18, src: LOGO18, top:  37, left:  35.9, size: 9 }, //OK
  { id: 19, src: LOGO19, top:  33.2, left:  55.9, size: 10 }, //OK
  { id: 20, src: LOGO20, top:  85.0, left:  77.0, size: 9.5 }, //OK
  { id: 21, src: LOGO20, top:  18.7, left:  15.0, size: 9.5 }, //OK
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const css = `
  .atom-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo-chip {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    /* Las transiciones visuales se mantienen, pero el movimiento (transform) lo delega a JS para 60fps */
    transition: box-shadow 0.4s ease, border 0.4s ease, background-color 0.4s ease;
    border: 1px solid transparent;
    will-change: transform; /* Optimización GPU */
  }

  .logo-chip img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
    /* Transición tipo resorte para el hover de la imagen interna */
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Efecto Hover Premium */
  .logo-chip:hover {
    z-index: 50;
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15), 
                0 0 15px rgba(255, 255, 255, 0.3) inset;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: #1a1a1a;
  }

  .logo-chip:hover img {
    /* Escalamos la imagen interna para no pelear con las físicas de JS del contenedor padre */
    transform: scale(1.4); 
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const physicsRef = useRef([]);

  // Inicializar estado de físicas (velocidad y desfase de órbita)
  if (physicsRef.current.length === 0) {
    physicsRef.current = NODES.map((_, i) => ({
      vx: 0,
      vy: 0,
      timeOffset: i * ((Math.PI * 2) / NODES.length) // Desfase para que no se muevan igual
    }));
  }

  useEffect(() => {
    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += 0.02; // Velocidad de la micro-órbita

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        NODES.forEach((node, i) => {
          const el = nodesRef.current[i];
          const physics = physicsRef.current[i];
          if (!el) return;

          // 1. Posición base relativa al contenedor
          const baseX = (node.left / 100) * rect.width;
          const baseY = (node.top / 100) * rect.height;

          // 2. Órbita local (gira suavemente dentro de su agujero)
          const localRadius = 6; // px de radio de movimiento
          const targetX = baseX + Math.cos(time + physics.timeOffset) * localRadius;
          const targetY = baseY + Math.sin(time + physics.timeOffset) * localRadius;

          // 3. Interacción magnética con el mouse
          let mouseDx = 0;
          let mouseDy = 0;
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - baseX;
            const dy = mouseRef.current.y - baseY;
            const dist = Math.hypot(dx, dy);
            const interactionArea = 120; // Radio magnético del cursor

            if (dist < interactionArea) {
              // Atracción suave
              const force = (interactionArea - dist) * 0.003;
              mouseDx = dx * force;
              mouseDy = dy * force;
            }
          }

          // 4. Ecuación de resorte (Spring Physics)
          physics.vx += (targetX + mouseDx - (baseX + physics.vx * 10)) * 0.02;
          physics.vy += (targetY + mouseDy - (baseY + physics.vy * 10)) * 0.02;

          // Fricción
          physics.vx *= 0.88;
          physics.vy *= 0.88;

          // 5. Renderizado a 60fps
          // Se mantiene el translate(-50%, -50%) para centrar, más el offset dinámico
          el.style.transform = `translate(-50%, -50%) translate3d(${physics.vx * 10}px, ${physics.vy * 10}px, 0)`;
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    mouseRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };


  return (
    <>
      <style>{css}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem] sm:pt-[8rem] lg:pt-[9rem] pb-2 sm:pb-2 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">
        
        {/* ── Text (Se mantiene igual) ── */}
        <div>
          <h1 className="font-aston text-[48px] sm:text-[56px] lg:text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white">
            El Poder de las Grandes Marcas
          </h1>
          <p className="font-montserrat text-soft-gray text-[18px] sm:text-[20px] lg:text-[25px] font-medium mb-6 sm:mb-8 leading-[1.4] max-w-xl">
            Desarrollamos estrategias de marketing online y offline para elevar tu marca, producto o servicio, ayudándote a destacar por encima de la competencia.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
             <button className="bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] hover:bg-gray-600 transition-colors">Get Started</button>
             <button className="btn-gradient-border text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] hover:opacity-80 transition-opacity">Learn More</button>
          </div>
        </div>

        {/* ── Atom ── */}
        <div className="relative flex items-center justify-center order-first md:order-last">
          <div style={{
            position:    "relative",
            width:       "100%",
            maxWidth:    "420px",
            aspectRatio: "1 / 1",
          }}>

            <div 
              className="atom-container"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseLeave}
            >
              {/* Átomo PNG estático */}
              <img
                src={NetworkImage}
                alt="Network of top brands"
                style={{
                  width:     "100%",
                  height:    "100%",
                  objectFit: "contain",
                  display:   "block",
                  pointerEvents: "none" // Clave para que el PNG no bloquee la lectura del mouse
                }}
              />

              {/* Logos de clientes dinámicos */}
              {NODES.map((node, index) => (
                <div
                  key={node.id}
                  ref={(el) => (nodesRef.current[index] = el)}
                  className="logo-chip"
                  style={{
                    top: `${node.top}%`,
                    left: `${node.left}%`,
                    width: `${node.size}%`,
                    height: `${node.size}%`,
                  }}
                >
                  <img src={node.src} alt={`Logo de cliente ${node.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}