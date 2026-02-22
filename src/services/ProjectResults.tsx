import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DataCard1 from '../images/DataCards/DataCard1.png'
import DataCard2 from '../images/DataCards/DataCard2.png'
import DataCard3 from '../images/DataCards/DataCard3.png'
import DataCard4 from '../images/DataCards/DataCard4.png'
import DataCard5 from '../images/DataCards/DataCard5.png'
import DataCard6 from '../images/DataCards/DataCard6.png'
import DataCard7 from '../images/DataCards/DataCard7.png'
import DataCard8 from '../images/DataCards/DataCard8.png'

function ProjectResults() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [DataCard1, DataCard2, DataCard3, DataCard4, DataCard5, DataCard6, DataCard7, DataCard8];

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < images.length; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="w-full max-w-[1341px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-transparent flex flex-col items-center overflow-hidden">

      {/* Textos */}
      <h2
        className="font-aston text-white text-center mb-4 sm:mb-6 antialiased text-[36px] sm:text-[52px] lg:text-[70px]"
        style={{ fontWeight: 400, lineHeight: '110%' }}
      >
        Tarjetas de datos y resultados del proyecto de marketing
      </h2>

      <p
        className="font-montserrat font-light text-white text-center mb-4 antialiased max-w-[1208px] text-[16px] sm:text-[22px] lg:text-[36px]"
        style={{ lineHeight: '140%', letterSpacing: '-0.02em' }}
      >
        Estas tarjetas brindan una vista clara y organizada de nuestros resultados clave y datos del proyecto, lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
      </p>

      {/* Controles */}
      <div className="flex gap-4 mb-4 mt-2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      {/* 
        DESKTOP: Stacked carousel (solo visible en lg+)
        MOBILE/TABLET: Swipe-style single card con indicadores
      */}

      {/* Desktop stacked view */}
      <div className="hidden lg:block relative w-full" style={{ height: '500px' }}>
        {[
          { widthPct: 27, heightPct: 48, topPx: 140, leftPct: 0,   z: 10, opacity: 0.6,  scale: 0.85 },
          { widthPct: 32, heightPct: 56, topPx: 110, leftPct: 6.5, z: 20, opacity: 0.75, scale: 0.9  },
          { widthPct: 37, heightPct: 66, topPx: 80,  leftPct: 15,  z: 30, opacity: 0.85, scale: 0.95 },
          { widthPct: 43, heightPct: 76, topPx: 50,  leftPct: 25,  z: 40, opacity: 0.95, scale: 1    },
          { widthPct: 48, heightPct: 84, topPx: 30,  leftPct: 37,  z: 50, opacity: 1,    scale: 1.05 },
          { widthPct: 43, heightPct: 76, topPx: 50,  leftPct: 52,  z: 45, opacity: 0.9,  scale: 0.98 },
        ].map((img, i) => (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              width: `${img.widthPct}%`,
              height: `${img.heightPct}%`,
              top: `${img.topPx}px`,
              left: `${img.leftPct}%`,
              zIndex: hoveredIndex === i ? 100 : img.z,
              opacity: hoveredIndex === i ? 1 : img.opacity,
              transform: hoveredIndex === i
                ? 'scale(1.08) translateY(-10px)'
                : `scale(${img.scale})`,
              boxShadow: hoveredIndex === i
                ? '0 25px 50px -12px rgba(0,0,0,0.5)'
                : '0 10px 30px -10px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {visibleImages[i] && (
              <img
                src={visibleImages[i]}
                alt={`Data Card ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: hoveredIndex === i ? 'brightness(1.1)' : 'brightness(1)' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile / Tablet: single card slider */}
      <div className="lg:hidden w-full flex flex-col items-center gap-4 mt-4">
        <div className="w-full max-w-[490px] sm:max-w-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={visibleImages[4]}
            alt="Data Card"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-white w-5' : 'bg-white/30'
              }`}
              aria-label={`Ir a tarjeta ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default ProjectResults;