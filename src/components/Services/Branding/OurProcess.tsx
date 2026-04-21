import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Brain, 
  MessageSquareText, 
  Search, 
  Ruler, 
  Files 
} from 'lucide-react';

const steps = [
  {
    title: "Concepto Creativo, Interpretación y Diseño de Logotipo.",
    icon: <PenTool size={40} strokeWidth={1.2} />,
    color: "rgba(220, 38, 38, 0.8)", // Rojo
    side: "right" // Texto a la derecha, icono a la izquierda
  },
  {
    title: "Análisis de la Marca y de sus Objetivos Comerciales.",
    icon: <Brain size={40} strokeWidth={1.2} />,
    color: "rgba(37, 99, 235, 0.8)", // Azul
    side: "left" // Texto a la izquierda, icono a la derecha
  },
  {
    title: "Análisis Comparativo de la Imagen de la Competencia.",
    icon: <MessageSquareText size={40} strokeWidth={1.2} />,
    color: "rgba(22, 163, 74, 0.8)", // Verde
    side: "right"
  },
  {
    title: "Investigación sobre la Industria, Tendencias, Simbologías y Elementos Gráficos.",
    icon: <Search size={40} strokeWidth={1.2} />,
    color: "rgba(202, 138, 4, 0.8)", // Dorado/Amarillo
    side: "left"
  },
  {
    title: "Tipografías, colorimetrías y usos institucionales de la marca.",
    icon: <Ruler size={40} strokeWidth={1.2} />,
    color: "rgba(220, 38, 38, 0.8)", // Rojo
    side: "right"
  },
  {
    title: "Diseño de material institucional y de apoyo: Medios Impresos y Digitales.",
    icon: <Files size={40} strokeWidth={1.2} />,
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
        <div className="flex flex-col lg:flex-row justify-evenly items-start mb-24 gap-8">
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
        <div className="relative">
          {/* Línea Blanca Central Sólida */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1.5px] bg-white/90 z-0 hidden lg:block" />
          
          <div className="space-y-32 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex items-center lg:h-32"
              >
                {/* LADO IZQUIERDO */}
                <div className="hidden lg:flex w-1/2 justify-end items-center pr-20">
                  {step.side === 'left' ? (
                    <p className="text-white text-right font-montserrat text-xl lg:text-xl font-medium max-w-sm">
                      {step.title}
                    </p>
                  ) : (
                    <div className="text-white/90 transform scale-110">{step.icon}</div>
                  )}
                </div>

                {/* CENTRO: El Punto con Glow */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Glow exterior */}
                    <div 
                      className="absolute inset-0 rounded-full blur-[12px] opacity-80"
                      style={{ backgroundColor: step.color }}
                    />
                    {/* Círculo base */}
                    <div className="relative w-9 h-9 rounded-full border border-white/40 bg-black flex items-center justify-center overflow-hidden">
                       <div 
                        className="w-full h-full opacity-60"
                        style={{ background: `radial-gradient(circle, ${step.color} 0%, transparent 80%)` }}
                       />
                    </div>
                  </div>
                </div>

                {/* LADO DERECHO */}
                <div className="w-full lg:w-1/2 flex justify-start items-center pl-20">
                  {step.side === 'right' ? (
                    <p className="text-white text-left font-montserrat text-xl lg:text-xl font-medium max-w-sm">
                      {step.title}
                    </p>
                  ) : (
                    <div className="text-white/90 transform scale-110 hidden lg:block">{step.icon}</div>
                  )}
                  
                  {/* Texto para móvil (se muestra debajo/al lado en pantallas pequeñas) */}
                  <p className="lg:hidden text-white font-montserrat text-lg font-medium ml-12">
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