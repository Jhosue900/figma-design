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

  // Array de imágenes
  const images = [
    DataCard1,
    DataCard2,
    DataCard3,
    DataCard4,
    DataCard5,
    DataCard6,
    DataCard7,
    DataCard8,
  ];

  // Configuración actualizada basada en la imagen de referencia
  // Las tarjetas están más compactas y superpuestas
  const stackedImages = [
    { width: 320, height: 240, top: 140, left: 0, z: 10, opacity: 0.6, scale: 0.85 },      // Muy atrás izquierda
    { width: 380, height: 280, top: 110, left: 80, z: 20, opacity: 0.75, scale: 0.9 },     // Atrás izquierda
    { width: 450, height: 330, top: 80, left: 180, z: 30, opacity: 0.85, scale: 0.95 },    // Medio izquierda
    { width: 520, height: 380, top: 50, left: 300, z: 40, opacity: 0.95, scale: 1 },       // Centro
    { width: 580, height: 420, top: 30, left: 450, z: 50, opacity: 1, scale: 1.05 },       // Centro-derecha (principal)
    { width: 520, height: 380, top: 50, left: 630, z: 45, opacity: 0.9, scale: 0.98 },     // Derecha
  ];

  // Función para obtener las 6 imágenes visibles en el carrusel
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  // Navegación
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="w-full max-w-[1341px] mx-auto px-8 py-20 bg-transparent flex flex-col items-center">
      
      {/* --- TEXTOS --- */}
      <h2 
        className="font-aston text-white text-center mb-6 antialiased"
        style={{ fontSize: '70px', fontWeight: 400, lineHeight: '110%' }}
      >
        Tarjetas de datos y resultados del proyecto de marketing
      </h2>

      <p 
        className="font-montserrat font-light text-white text-center mb-4 antialiased max-w-[1208px]"
        style={{ fontSize: '36px', lineHeight: '140%', letterSpacing: '-0.02em' }}
      >
        Estas tarjetas brindan una vista clara y organizada de nuestros resultados clave y datos del proyecto, lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
      </p>
      
      {/* --- CONTROLES DE NAVEGACIÓN --- */}
      <div className="flex gap-4 mb-12 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* --- SECCIÓN DE IMÁGENES APILADAS (STACKED GROUP) --- */}
      <div 
        className="relative mt-8 mb-32"
        style={{ width: '1200px', height: '500px' }}
      >
        {stackedImages.map((img, i) => (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              width: `${img.width}px`,
              height: `${img.height}px`,
              top: `${img.top}px`,
              left: `${img.left}px`,
              zIndex: hoveredIndex === i ? 100 : img.z,
              opacity: hoveredIndex === i ? 1 : img.opacity,
              transform: hoveredIndex === i 
                ? 'scale(1.1) translateY(-10px)' 
                : `scale(${img.scale})`,
              boxShadow: hoveredIndex === i 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {visibleImages[i] && (
              <img 
                src={visibleImages[i]} 
                alt={`Data Card ${i + 1}`}
                className="w-full h-full object-cover"
                style={{
                  filter: hoveredIndex === i ? 'brightness(1.1)' : 'brightness(1)',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* --- TARJETA INFERIOR (USUARIOS) --- 
      
      <div className="w-full max-w-[1208px] bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-[24px] p-8 flex items-center gap-8">
        <div className="flex-1">
          <h3 className="text-[40px] font-bold mb-2 text-white">+180,000</h3>
          <p className="text-gray-400 text-lg uppercase tracking-widest font-montserrat">USUARIOS</p>
        </div>
        <div className="w-32 h-32 bg-gray-700/50 rounded-lg backdrop-blur-md" />
        <div className="flex-1 text-right">
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-2 font-montserrat">INTERACCIONES</p>
          <p className="text-[40px] font-bold text-white">+400%</p>
        </div>
      </div>
      
      
      */}
      
    </section>
  );
}

export default ProjectResults;