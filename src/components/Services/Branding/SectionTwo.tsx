import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const SectionTwo = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
            
            {/* Columna Izquierda: Frase y Botones */}
            <div className="flex flex-col items-start text-left">
              <h2 className="font-montserrat font-medium text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-12 tracking-tight text-center">
                “La primera impresión nunca se olvida”
              </h2>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
                <button className="px-10 py-4 bg-[#555555] hover:bg-[#666666] text-white font-montserrat font-medium rounded-full transition-all duration-300 text-sm sm:text-base min-w-[220px]">
                  Portafolio
                </button>
                <button className="px-10 py-4 bg-[#2a2a2a] hover:bg-[#333333] text-white font-montserrat font-medium rounded-full transition-all duration-300 text-sm sm:text-base min-w-[220px]">
                  Servicios
                </button>
              </div>

            </div>

            {/* Columna Derecha: Párrafos descriptivos */}
            <div className="flex flex-col gap-5">
              <p className="font-montserrat text-white text-lg sm:text-xl lg:text-[22px] leading-relaxed font-semibold">
                La identidad de tu marca es la manera en que tus clientes 
                te percibirán, por ello, es importante desarrollar un 
                concepto creativo y línea de diseño únicos que transmitan 
                los objetivos y diferenciadores de tu empresa.
              </p>

              <p className="font-montserrat text-white/90 text-lg sm:text-xl lg:text-[22px] leading-relaxed font-light">
                Esta identidad será transmitida a través de todos los medios 
                para posicionar tu marca con campañas publicitarias y de 
                posicionamiento.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SectionTwo;