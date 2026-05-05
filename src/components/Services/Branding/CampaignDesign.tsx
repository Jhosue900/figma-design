import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import campaignImg from '../../../images/branding/section2_1.png';

const CampaignDesign = () => {
  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row justify-around items-center md:items-center mb-20 gap-6">
          <div className="text-center md:text-left">
            
            <h2 className="font-aston text-white text-3xl sm:text-4xl lg:text-5xl font-normal">
              Servicios que Ofrecemos
            </h2>
          </div>
          
          
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
                <div className="px-10 py-28 sm:px-16 lg:pl-16 lg:pr-2 order-2 lg:order-1 leading-loose z-20">
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

        <div className="flex items-center justify-center">
          <button className="px-9 py-4 bg-white hover:bg-gray-300 text-black font-montserrat font-bold rounded-full transition-all duration-300 text-sm tracking-wider mt-20">
            Hablar con un asesor
          </button>
        </div>

      </div>


    </section>
  );
};

export default CampaignDesign;