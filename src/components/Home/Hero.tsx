import NetworkImage from "../../images/atomoHD-2.webp";
import iconHero     from "../../images/icon-hero.png";

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

// ─── Node positions ───────────────────────────────────────────────────────────
// Positions extracted programmatically from the actual PNG (485×482 px).
// top/left = centre of each black circle node.

const NODES: LogoNode[] = [
  { id:  1, src: LOGO1,  top:  18.3, left:  59.3, size: 9.5 }, //OK
  { id:  2, src: LOGO2,  top:  91.5, left:  53.3, size: 11 }, //OK
  { id:  3, src: LOGO3,  top:  88.9, left:  40, size: 9 }, //OK
  { id:  4, src: LOGO4,  top:  67.4, left:  41.9, size: 9.5 }, //OK
  { id:  5, src: LOGO5,  top:  65.2, left:  82.9, size: 9.5 },
  { id:  6, src: LOGO6,  top: 83.9, left:  16.3, size: 10.5 }, //OK
  { id:  7, src: LOGO7,  top:  59.0, left:   9.6, size: 10 }, //OK
  { id:  8, src: LOGO8,  top:  15.5, left:  74.0, size: 8 }, //OK
  { id:  9, src: LOGO9,  top:  56, left:  29.3, size: 9.7 }, //OK
  { id: 10, src: LOGO10, top:  42.3, left:  6.29, size: 8 }, //OK
  { id: 11, src: LOGO11, top:  18.2, left:  34.8, size: 9 }, //OK
  { id: 12, src: LOGO12, top:  47.6, left:  68, size: 9 }, //OK
  { id: 13, src: LOGO13, top:  50.2, left:  93.2, size: 9.5 }, //OK
  { id: 14, src: LOGO14, top:  30.0, left:  83, size: 10 }, //OK
  { id: 15, src: LOGO15, top:  64.1, left:  62.9, size: 8.5 }, //OK
  { id: 16, src: LOGO16, top:  42, left:  20.5, size: 9 }, //OK
  { id: 17, src: LOGO17, top:   6, left:  48, size: 9.5 }, //OK
  { id: 18, src: LOGO18, top:  37, left:  35.9, size: 9 }, //OK
  { id: 19, src: LOGO19, top:  33.2, left:  55.9, size: 10 }, //OK
  { id: 20, src: LOGO20, top:  85.2, left:  77.0, size: 9.5 }, //OK
  { id: 21, src: LOGO20, top:  18.7, left:  15.0, size: 9.5 }, //OK
];

// ─── Styles ───────────────────────────────────────────────────────────────────

// ─── Styles ───────────────────────────────────────────────────────────────────

const css = `
  /* Micro-movimiento para simular un electrón vibrando/orbitando en su lugar */
  @keyframes floatMicro {
    0%, 100% { transform: translate(-50%, -50%) translateY(0) translateX(0); }
    25% { transform: translate(-50%, -50%) translateY(-3px) translateX(2px); }
    50% { transform: translate(-50%, -50%) translateY(2px) translateX(-2px); }
    75% { transform: translate(-50%, -50%) translateY(3px) translateX(3px); }
  }

  .atom-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo-chip {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    background: #111; /* Fondo del logo dentro del hueco */
    display: flex;
    align-items: center;
    justify-content: center;
    /* IMPORTANTE: Permitir interactividad para el hover */
    pointer-events: auto;
    cursor: pointer;
    /* Transición súper suave tipo "bouncing" para el hover */
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                box-shadow 0.4s ease, 
                border 0.4s ease,
                background-color 0.4s ease;
    border: 1px solid transparent;
    animation: floatMicro 6s ease-in-out infinite;
  }

  .logo-chip img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
    transition: transform 0.4s ease;
  }

  /* Efecto Hover Premium */
  .logo-chip:hover {
    /* Escala el chip y detiene su posición para que el hover sea estable */
    transform: translate(-50%, -50%) scale(1.35) !important;
    z-index: 50; /* Lo trae al frente */
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15), 
                0 0 15px rgba(255, 255, 255, 0.3) inset;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: #1a1a1a;
  }

  .logo-chip:hover img {
    transform: scale(1.15); /* Crece un poco más la imagen internamente */
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
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

            <div className="atom-container">
              {/* Átomo PNG estático */}
              <img
                src={NetworkImage}
                alt="Network of top brands"
                style={{
                  width:     "100%",
                  height:    "100%",
                  objectFit: "contain",
                  display:   "block",
                }}
              />

              {/* Logos de clientes dinámicos */}
              {NODES.map((node, index) => {
                // Cálculo de delay y duración para que parezca movimiento orgánico
                const delay = (index * -0.5) + "s";
                const duration = (5 + (index % 3)) + "s"; 

                return (
                  <div
                    key={node.id}
                    className="logo-chip"
                    style={{
                      top: `${node.top}%`,
                      left: `${node.left}%`,
                      width: `${node.size}%`,
                      height: `${node.size}%`,
                      animationDelay: delay,
                      animationDuration: duration
                    }}
                  >
                    <img src={node.src} alt={`Logo de cliente ${node.id}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}