import React from 'react';
import { motion } from 'framer-motion';


import verticalLine from '../../../images/branding/linea-vertical.png';

const steps = [
  {
    title: "Concepto Creativo, Interpretación y Diseño de Logotipo.",

    color: "rgba(220, 38, 38, 0.8)", // Rojo
    side: "right" // Texto a la derecha, icono a la izquierda
  },
  {
    title: "Análisis de la Marca y de sus Objetivos Comerciales.",

    color: "rgba(37, 99, 235, 0.8)", // Azul
    side: "left" // Texto a la izquierda, icono a la derecha
  },
  {
    title: "Análisis Comparativo de la Imagen de la Competencia.",

    color: "rgba(22, 163, 74, 0.8)", // Verde
    side: "right"
  },
  {
    title: "Investigación sobre la Industria, Tendencias, Simbologías y Elementos Gráficos.",

    color: "rgba(202, 138, 4, 0.8)", // Dorado/Amarillo
    side: "left"
  },
  {
    title: "Tipografías, colorimetrías y usos institucionales de la marca.",

    color: "rgba(220, 38, 38, 0.8)", // Rojo
    side: "right"
  },
  {
    title: "Diseño de material institucional y de apoyo: Medios Impresos y Digitales.",

    color: "rgba(37, 99, 235, 0.8)", // Azul
    side: "left"
  }
];

const OurProcess = () => {
  return (
    <section className="w-full bg-transparent py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado - Fiel al diseño */}
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row justify-evenly items-start mb-6 gap-8">
          <div className="max-w-xl">
            <h2 className="font-montserrat text-white text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Nuestro Proceso
            </h2>
            <h3 className="font-aston text-white text-5xl sm:text-7xl lg:text-8xl font-normal tracking-wide mt-2">
              Creativo
            </h3>
          </div>
          <div className="max-w-[35rem]">
            <p className="font-montserrat text-gray-100 text-lg leading-relaxed pt-4">
              Cada proyecto comienza con una fase de investigación y diagnóstico, seguida de estrategia, diseño y comunicación. Aplicamos la metodología <span className="font-bold">WeProm Branding System®</span>, creada para alinear propósito, imagen y estrategia con resultados medibles.
            </p>
          </div>
        </div>

        {/* Línea de Tiempo Central */}
        {/* Línea de Tiempo Central */}
        <div className="relative mt-6">
          {/* Imagen de Línea Vertical con Puntos - Reemplaza la línea blanca sólida */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-0 hidden lg:block overflow-hidden">
            <motion.img 
              src={verticalLine} //
              alt="Línea de proceso"
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="object-cover h-full"
            />
          </div>
          
          <div className="space-y-32 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex items-center lg:h-44"
              >
                {/* LADO IZQUIERDO */}
                <div className="hidden lg:flex w-1/2 justify-end items-center pr-24">
                  {step.side === 'left' && (
                    <p className="text-white text-right font-montserrat text-xl font-medium max-w-sm">
                      {step.title}
                    </p>
                  )}
                </div>
            
                {/* CENTRO: Espacio para la línea */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-12" />
            
                {/* LADO DERECHO */}
                <div className="w-full lg:w-1/2 flex justify-start items-center pl-24">
                  {step.side === 'right' && (
                    <p className="text-white text-left font-montserrat text-xl font-medium max-w-sm">
                      {step.title}
                    </p>
                  )}
                  
                  {/* Texto para móvil */}
                  <p className="lg:hidden text-white font-montserrat text-lg font-medium ml-12 border-l-2 border-white/20 pl-4">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;