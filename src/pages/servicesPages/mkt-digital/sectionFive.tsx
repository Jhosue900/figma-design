import React from 'react';
import { motion } from 'framer-motion';

// Importación de la imagen de las plataformas
import plataformasImg from '../../../images/MKT Digital/redes-sociales.png';

const SectionFive = () => {
  return (
    <section className="relative w-full py-12 bg-transparent overflow-hidden flex flex-col items-center">
      
      {/* Contenedor de Texto de Encabezado */}
      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 !font-aston"
          style={{ fontFamily: 'var(--font-aston), sans-serif' }}
        >
          Expertos en Las Más Grandes Plataformas
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-200 text-base md:text-lg lg:text-xl font-light max-w-5xl mx-auto leading-relaxed !font-montserrat"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          Con base en una investigación profunda de tu "buyer persona" utilizamos solamente las plataformas 
          donde sabemos que tu mercado meta interactúa constantemente. Hacemos que tu marca o 
          empresa esté en la pantalla de quien sí te va a comprar.
        </motion.p>
      </div>

      {/* Contenedor de la Imagen Bento Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.4, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative w-full max-w-6xl px-4 flex justify-center group"
      >
        {/* Efecto de resplandor ambiental detrás de la imagen */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        
        <img 
          src={plataformasImg} 
          alt="Plataformas de Marketing Digital" 
          className="w-full h-auto object-contain select-none filter drop-shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
        />
      </motion.div>

    </section>
  );
};

export default SectionFive;