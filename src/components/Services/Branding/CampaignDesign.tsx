import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import campaignImg from '../../../images/branding/section2_1.png';

const CampaignDesign = () => {
  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row justify-around items-center md:items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <p className="font-montserrat text-white text-3xl sm:text-4xl font-light mb-4 tracking-wide">
              Servicios que incluye el
            </p>
            <h2 className="font-aston text-white text-3xl sm:text-4xl lg:text-5xl font-normal">
              Marca profesional
            </h2>
          </div>
          
          <button className="px-9 py-4 bg-[#333333] hover:bg-white hover:text-black text-white font-montserrat font-bold rounded-full transition-all duration-300 text-sm tracking-wider">
            Hablar con un asesor
          </button>
        </div>

        {/* Contenedor Principal con Borde Degradado - CARD */}
        <div className="relative group">
          
          {/* Flechas de Navegación (UI) */}
          <button className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform">
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>
          <button className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform">
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          {/* Wrapper del Borde (Efecto Gradient Border) */}
          <div className="p-[3px] rounded-[40px] sm:rounded-[60px] bg-gradient-to-r from-[#ff3d00] via-[#00a2ff] to-[#ffb800]">
            
            {/* Contenido Interior */}
            <div className="bg-[#0a0a0a] rounded-[39px] sm:rounded-[59px] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                
                {/* Texto */}
                <div className="px-10 py-28 sm:px-16 lg:pl-16 lg:pr-2 order-2 lg:order-1 leading-loose">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="font-aston font-normal text-white text-3xl sm:text-4xl lg:text-5xl !leading-[1.3] mb-4 tracking-wide"
                  >
                    Diseño de Campañas Publicitarias para Medios Impresos o Digitales.
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-montserrat text-gray-200 text-md sm:text-base leading-loose max-w-full"
                  >
                    Una vez teniendo tu marca, será momento de darlo a conocer a través de campañas publicitarias en las cuales comunicaremos de manera creativa y llamativa tu mensaje para que te tengan siempre presente.
                  </motion.p>
                </div>

                {/* Imagen/Mockup */}
                {/* Imagen/Mockup */}
                <div className="relative order-1 lg:order-2 h-[300px] lg:h-full w-full flex items-center justify-end">
                  <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                    <img 
                      src={campaignImg} 
                      alt="Campaign Billboard Mockup" 
                      className="w-full h-[77%] object-contain scale-120 lg:scale-y-[1.5] lg:scale-x-[1.4] drop-shadow-2xl"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampaignDesign;