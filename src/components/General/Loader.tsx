import { useEffect, useState } from "react";
import logoImage from "../../images/LOGOLISOBLANCO.png";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setIsExiting(true);
        }, 500);
      }

      setProgress(value);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]
      ${isExiting ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* RADIAL GLOW */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-[140px] animate-pulse-glow" />

      <div className="relative flex flex-col items-center gap-12">

        {/* LOGO */}
        <div className="relative flex items-center justify-center">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl animate-logo-glow" />

          <img
            src={logoImage}
            alt="weprom marketing"
            className="w-56 md:w-64 object-contain opacity-0 animate-logo-in relative"
          />

          {/* SIDE LINES */}
          <div className="absolute top-1/2 -left-40 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-line-left"></div>
          <div className="absolute top-1/2 -right-40 w-32 h-[1px] bg-gradient-to-l from-transparent via-white/30 to-transparent animate-line-right"></div>
        </div>

        {/* TEXT + PROGRESS */}
        <div className="flex flex-col items-center gap-6 opacity-0 animate-text-in">

          <div className="flex flex-col items-center gap-1">
            <h2 className="font-aston text-white text-3xl tracking-tight">
              weprom
            </h2>

            <p className="font-montserrat text-white/50 text-xs tracking-[0.35em] uppercase">
              Marketing
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div className="flex flex-col items-center gap-3 w-72">

            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg,#EF4444,#3B82F6,#10B981,#F59E0B)",
                  boxShadow:
                    "0 0 20px rgba(59,130,246,0.45),0 0 30px rgba(16,185,129,0.25)",
                }}
              />
            </div>

            <p className="font-montserrat text-white/40 text-[11px] tracking-widest uppercase">
              Preparando experiencia
            </p>
          </div>
        </div>
      </div>

      <style>{`

      /* LOGO ENTRANCE */

      @keyframes logo-in {
        0%{
          opacity:0;
          transform:translateY(-30px) scale(.92);
        }

        60%{
          opacity:1;
        }

        100%{
          opacity:1;
          transform:translateY(0) scale(1);
        }
      }

      .animate-logo-in{
        animation:logo-in 1.2s cubic-bezier(.22,1,.36,1) forwards;
      }


      /* TEXT */

      @keyframes text-in {
        0%,40%{
          opacity:0;
          transform:translateY(20px);
        }

        100%{
          opacity:1;
          transform:translateY(0);
        }
      }

      .animate-text-in{
        animation:text-in 1.6s cubic-bezier(.22,1,.36,1) forwards;
      }


      /* SIDE LINES */

      @keyframes line-left{
        0%{
          opacity:0;
          transform:translateX(-40px);
        }

        100%{
          opacity:1;
          transform:translateX(0);
        }
      }

      @keyframes line-right{
        0%{
          opacity:0;
          transform:translateX(40px);
        }

        100%{
          opacity:1;
          transform:translateX(0);
        }
      }

      .animate-line-left{
        animation:line-left 1.4s ease forwards;
      }

      .animate-line-right{
        animation:line-right 1.4s ease forwards;
      }


      /* GLOW */

      @keyframes logo-glow{
        0%{
          opacity:.2;
          transform:scale(.9);
        }

        50%{
          opacity:.45;
          transform:scale(1.05);
        }

        100%{
          opacity:.2;
          transform:scale(.9);
        }
      }

      .animate-logo-glow{
        animation:logo-glow 4s ease-in-out infinite;
      }


      /* BACKGROUND GLOW */

      @keyframes pulse-glow{
        0%{
          opacity:.25;
          transform:scale(1);
        }

        50%{
          opacity:.4;
          transform:scale(1.1);
        }

        100%{
          opacity:.25;
          transform:scale(1);
        }
      }

      .animate-pulse-glow{
        animation:pulse-glow 6s ease-in-out infinite;
      }

      `}</style>
    </div>
  );
}