import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importación de imágenes según tu estructura de Git Bash
import img1 from '../../../images/branding/section4/section4_1.png';
import img2 from '../../../images/branding/section4/section4_2.png';
import img3 from '../../../images/branding/section4/section4_3.png';
import img4 from '../../../images/branding/section4/section4_4.png';

const slides = [img1, img2, img3, img4];

const WeCreateBrands = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section className="w-full bg-transparent py-14 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header de la Sección */}
        

        {/* Contenedor del Carrusel */}
        <div className="relative group">
          {/* Navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all"
          >
            <ChevronLeft size={60} strokeWidth={1} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all"
          >
            <ChevronRight size={60} strokeWidth={1} />
          </button>

          {/* Área de Imagen con AnimatePresence */}
          <div className="relative aspect-[16/8] md:aspect-[21/9] w-full flex items-center justify-center overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={slides[index]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full object-contain"
                alt={`Proyecto de branding ${index + 1}`}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Botón Inferior */}
        <div className="mt-2 flex justify-center">
          <button className="px-10 py-4 rounded-full bg-white border border-white/10 text-black font-montserrat text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-bold">
            Portafolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeCreateBrands;