import React from 'react';
import { motion } from 'framer-motion';

// Importación de la imagen del arco
import digitalMktArc from '../../../images/MKT Digital/digitalmktsection1.png';

const HeroMkt = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start items-center bg-transparent overflow-hidden pt-32 md:pt-40">
      
      {/* Spotlight superior - Reflejo blanquecino sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-white/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      {/* Contenedor estricto solo para los textos */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Bloque de Texto */}
        <div className="text-center max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 !font-aston"
            style={{ fontFamily: 'var(--font-aston), sans-serif' }}
          >
            Acelere el crecimiento de su negocio transformando su estrategia digital
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-zinc-300 text-lg md:text-xl lg:text-xl font-light max-w-4xl mx-auto leading-relaxed !font-montserrat"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Somos tu socio estratégico en marketing digital, generando resultados medibles e impulsando un crecimiento sostenible. Nos encantaría llevar a tu empresa al siguiente nivel.
          </motion.p>
        </div>
      </div>

      {/* Arco de Imágenes - Fuera del container para ocupar el 100% del ancho (w-full) */}
      {/* Arco de Imágenes (Hanging Element) */}
      <motion.div 
        // Animación: entra desde la izquierda (-100px) y se estabiliza
        initial={{ opacity: 0, x: -100, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ 
          duration: 1.4, 
          delay: 0.3, 
          ease: [0.16, 1, 0.3, 1] // Curva suave tipo "expo out"
        }}
        // w-[120vw] hace que sobresalga de la pantalla, el -mt-8 o -mt-12 es el "tuck" premium
        className="relative w-[130vw] md:w-[115vw] lg:w-[105vw] flex justify-center -mt-[15rem] md:-mt-[20rem] lg:-mt-[25rem] z-0 pointer-events-none"
      >
        <img 
          src={digitalMktArc} 
          alt="Ecosistema Digital" 
          // Usamos max-w-none para que el contenedor dicte el tamaño y no el ancho del padre
          className="w-full max-w-[1600px] h-auto object-contain select-none"
        />
        
        {/* Gradiente sutil para suavizar la base contra el fondo negro */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>
      
    </section>
  );
};

export default HeroMkt;