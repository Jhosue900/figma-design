import NetworkImage from "../../images/NetworkDiagram.png";
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
  { id:  1, src: LOGO1,  top:  13.9, left:  10.4, size: 9.5 }, //OK
  { id:  2, src: LOGO2,  top:  86.5, left:  53.3, size: 11 }, //OK
  { id:  3, src: LOGO3,  top:  84.7, left:  35, size: 9 }, //OK
  { id:  4, src: LOGO4,  top:  63.4, left:  36.9, size: 9.5 }, //OK
  { id:  5, src: LOGO5,  top:  60.2, left:  77.9, size: 9.5 },
  { id:  6, src: LOGO6,  top: 78.9, left:  11.3, size: 10.5 }, //OK
  { id:  7, src: LOGO7,  top:  54.0, left:   4.6, size: 10 }, //OK
  { id:  8, src: LOGO8,  top:  12.5, left:  70.6, size: 8 }, //OK
  { id:  9, src: LOGO9,  top:  51, left:  24.3, size: 9.7 }, //OK
  { id: 10, src: LOGO10, top:  38.3, left:  2.29, size: 8 }, //OK
  { id: 11, src: LOGO11, top:  14.2, left:  30.8, size: 9 }, //OK
  { id: 12, src: LOGO12, top:  43.6, left:  63, size: 9 }, //OK
  { id: 13, src: LOGO13, top:  46.2, left:  88.8, size: 9.5 }, //OK
  { id: 14, src: LOGO14, top:  24.7, left:  78, size: 10 }, //OK
  { id: 15, src: LOGO15, top:  60.1, left:  58.9, size: 8.5 }, //OK
  { id: 16, src: LOGO16, top:  38.0, left:  16.5, size: 9 }, //OK
  { id: 17, src: LOGO17, top:   1, left:  44, size: 9.5 }, //OK
  { id: 18, src: LOGO18, top:  32, left:  31.9, size: 9 }, //OK
  { id: 19, src: LOGO19, top:  28.2, left:  51.9, size: 10 }, //OK
  { id: 20, src: LOGO20, top:  80.2, left:  72.8, size: 9.5 }, //OK
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const css = `
  @keyframes atomSpin {
    from { transform: rotate(0deg);   }
    to   { transform: rotate(360deg); }
  }
  @keyframes counterSpin {
    from { transform: rotate(0deg);    }
    to   { transform: rotate(-360deg); }
  }

  /* The whole image + chips spin as one */
  .atom-spinner {
    animation: atomSpin 28s linear infinite;
    transform-origin: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* Each chip counter-rotates → stays visually upright while orbiting */
  .logo-chip {
    position: absolute;
    transform: translate(-50%, -50%);
    animation: counterSpin 28s linear infinite;
    transform-origin: center center;
    border-radius: 50%;
    overflow: hidden;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .logo-chip img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
  }

  /* Pause on hover */
  .atom-wrapper:hover .atom-spinner,
  .atom-wrapper:hover .logo-chip {
    animation-play-state: paused;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <>
      <style>{css}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem] sm:pt-[8rem] lg:pt-[9rem] pb-2 sm:pb-2 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">

        {/* ── Text ── */}
        <div>
          <h1 className="font-aston text-[48px] sm:text-[56px] lg:text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white">
            El Poder de las Grandes Marcas
          </h1>

          <p className="font-montserrat text-soft-gray text-[18px] sm:text-[20px] lg:text-[25px] font-medium mb-6 sm:mb-8 leading-[1.4] max-w-xl">
            Desarrollamos estrategias de marketing online y offline para elevar
            tu marca, producto o servicio, ayudándote a destacar por encima de
            la competencia.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] leading-[28px] hover:bg-gray-600 transition-colors">
              Get Started
            </button>
            <button className="btn-gradient-border text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] leading-[28px] hover:opacity-80 transition-opacity">
              Learn More
            </button>
          </div>
        </div>

        {/* ── Atom ── */}
        <div
          className="atom-wrapper relative flex items-center justify-center order-first md:order-last"
        >
          <div style={{
            position:    "relative",
            width:       "100%",
            maxWidth:    "420px",
            aspectRatio: "1 / 1",
          }}>

            {/* Spinning layer */}
            <div className="atom-spinner">

              {/* Original atom PNG */}
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

              {/* 20 logo chips — pixel-perfect positions */}
              {NODES.map((node) => (
                <div
                  key={node.id}
                  className="logo-chip"
                  style={{
                    top:    `${node.top}%`,
                    left:   `${node.left}%`,
                    width:  `${node.size}%`,
                    height: `${node.size}%`,
                  }}
                >
                  <img src={node.src} alt={`logo ${node.id}`} />
                </div>
              ))}

             

            </div>
          </div>
        </div>

      </section>
    </>
  );
}