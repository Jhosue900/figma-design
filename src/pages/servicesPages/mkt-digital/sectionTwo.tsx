import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importación de imágenes
import fondoAzul from '../../../images/MKT Digital/fondo-azul-section2.png';
import fondoVerde from '../../../images/MKT Digital/fondo-verde-section2.png';
import fondoRojo from '../../../images/MKT Digital/fondo-rojo-section2.png';
import badgeSection from '../../../images/MKT Digital/badge-section2.png';

const services = [
  {
    title: "Marketing en redes sociales",
    description: "Campañas publicitarias que VENDEN y contenido que FORTALECE la conexión con tu marca.",
    image: fondoRojo,
    color: "from-red-900/40",
    glowColor: "rgba(239, 68, 68, 0.8)" // Rojo
  },
  {
    title: "Estrategia SEO & Posicionamiento",
    description: "Dominamos los algoritmos para que tu marca aparezca donde tus clientes están buscando.",
    image: fondoAzul,
    color: "from-blue-900/40",
    glowColor: "rgba(59, 130, 246, 0.8)" // Azul
  },
  {
    title: "Analítica y Crecimiento",
    description: "Transformamos datos en decisiones estratégicas para escalar tu facturación de forma sostenible.",
    image: fondoVerde,
    color: "from-emerald-900/40",
    glowColor: "rgba(16, 185, 129, 0.8)" // Verde
  }
];

const SectionTwo = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="py-20 bg-transparent text-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2 max-[749px]:text-center">
          <h2 className="text-5xl md:text-6xl font-aston !font-light !leading-snug max-w-sm tracking-normal">
            Servicios estratégicos
          </h2>
          <div className="hidden md:block w-px h-24 bg-zinc-400 mx-4" />
          <p className="text-zinc-200 font-montserrat max-w-2xl text-lg">
            Ofrecemos una gama completa de servicios diseñados para maximizar su presencia en línea, 
            impulsar sus ventas y construir conexiones con sus clientes.
          </p>
        </div>

        {/* Carrusel Moderno */}
        {/* Carrusel Moderno */}
        <div className="relative group flex justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center w-full"
            >
              {/* EFECTO DE LUZ (DETRÁS) */}
              <div 
                className="absolute w-[60%] h-[60%] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out -z-10"
                style={{ backgroundColor: services[index].glowColor }}
              />
        
              {/* IMAGEN PRINCIPAL */}
              <img
                src={services[index].image}
                alt={services[index].title}
                className="w-[80%] max-w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Botones de Navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Badge / Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 bg-zinc-900/80 border border-white/10 rounded-3xl p-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <img 
              src={badgeSection} 
              alt="Marcas aliadas" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <p className="text-zinc-300 font-montserrat text-sm md:text-lg">
              Alineado con los negocios que eligen la calidad.
            </p>
          </div>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap">
            Contáctanos
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default SectionTwo;