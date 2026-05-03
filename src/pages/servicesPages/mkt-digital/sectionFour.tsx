import React from 'react';
import { motion } from 'framer-motion';

// Importación de imágenes
import cardsVertical from '../../../images/MKT Digital/4cards-vertical.png';
import metodologias from '../../../images/MKT Digital/3metodologias.png';

const SectionFour = () => {
  return (
    <section className="relative w-full py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Bloque Superior: ¿Por qué elegir a WeProm? */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-center"
          >
            <h2 className="text-white text-4xl md:text-6xl font-normal leading-tight mb-8 !font-aston"
                style={{ fontFamily: 'var(--font-aston), sans-serif' }}>
              ¿Por qué <br /> elegir a <br /> WeProm?
            </h2>
            <button className="bg-[#8B1D1D] hover:bg-[#A32222] text-white px-8 py-3 rounded-full text-sm md:text-base font-montserrat transition-all duration-300">
              Descubre cómo podemos ayudarte.
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <img 
              src={cardsVertical} 
              alt="Beneficios WeProm" 
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Bloque Inferior: Metodología */}
        {/* Bloque Inferior: Metodología */}
        <div className="text-right flex flex-col items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-normal mb-6 !font-aston"
            style={{ fontFamily: 'var(--font-aston), sans-serif' }}
          >
            Nuestra metodología se basa <br /> en resultados.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-200 text-base md:text-lg font-light max-w-3xl leading-relaxed !font-montserrat"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            En WeProm hacemos proyectos de Marketing con visión a corto, mediano y largo plazo, 
            los cuales además serán sumamente rentables, optimizando tu presupuesto para lograr más, con menos.
          </motion.p>
        </div>

        {/* Imagen de Metodologías con efecto de elevación */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img 
            src={metodologias} 
            alt="Metodología WeProm" 
            className="w-full max-w-5xl h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SectionFour;