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
    <section className="w-full bg-transparent py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header de la Sección */}
        <div className="flex flex-col md:flex-row justify-evenly items-end mb-2 gap-8">
          <div>
            <h2 className="font-aston text-white text-5xl md:text-6xl font-light leading-tight">
              Creamos marcas <br />
              <span className="font-normal">que no se olvidan</span>
            </h2>
          </div>
          <div className="flex-1 md:max-w-lg">
            <p className="font-montserrat text-white text-lg leading-relaxed font-light text-left md:text-left">
              Marcas profesionales, corporativas e institucionales que han confiado en nuestra visión.
            </p>
          </div>
        </div>

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
          <button className="px-20 py-4 rounded-full bg-white/5 border border-white/10 text-white font-montserrat text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500">
            Portafolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeCreateBrands;