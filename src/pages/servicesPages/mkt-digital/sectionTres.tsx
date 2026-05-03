import React from 'react';
import { motion } from 'framer-motion';

// Importación de la imagen de las tarjetas
import cardsImage from '../../../images/MKT Digital/cards-section3.png';

const SectionTres = () => {
  return (
    <section className="relative w-full py-20 bg-transparent overflow-hidden flex flex-col items-center">
      
      {/* Contenedor de Texto */}
      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 !font-aston"
          style={{ fontFamily: 'var(--font-aston), sans-serif' }}
        >
          Tarjetas de datos y resultados del <br className="hidden md:block" /> proyecto de marketing
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-200 text-lg md:text-3xl font-light max-w-5xl mx-auto leading-relaxed !font-montserrat"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          Estas tarjetas brindan una vista clara y organizada de nuestros resultados clave y datos del proyecto, 
          lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
        </motion.p>
      </div>

      {/* Contenedor de la Imagen de Tarjetas */}
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.3, 
          ease: [0.22, 1, 0.36, 1] // Cubic bezier para movimiento fluido
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-6xl px-4 flex justify-center"
      >
        <img 
          src={cardsImage} 
          alt="Data Cards Marketing Results" 
          className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.05)]"
        />
        
        {/* Reflejo/Brillo ambiental sutil detrás de las cartas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      </motion.div>

    </section>
  );
};

export default SectionTres;