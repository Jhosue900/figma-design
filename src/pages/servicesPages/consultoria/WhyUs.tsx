import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const reasons = [
  {
    title: "Autoridad Corporativa",
    description: "Más de 35 años acompañando empresas en su transformación. Experiencia que se traduce en decisiones más inteligentes y resultados más rápidos.",
    icon: Award,
    color: "#ef4444", // Rojo
  },
  {
    title: "Visión Holística del Negocio",
    description: "Alineamos objetivos comerciales, procesos y métricas con el propósito real de la empresa bajo una dirección clara.",
    icon: Users,
    color: "#22c55e", // Verde
  },
  {
    title: "Compromiso Directivo",
    description: "Nos involucramos en cada etapa del proyecto para asegurar que cada recurso invertido genere retorno.",
    icon: Target,
    color: "#3b82f6", // Azul
  }
];

const WhyUsCard = ({ reason }: { reason: typeof reasons[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group flex flex-col px-6 py-8 rounded-[32px] border border-white/40 bg-[#0A0A0A] overflow-hidden transition-all duration-500 ease-out"
    >
      {/* Borde dinámico spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 40%)`,
          margin: '-1px', padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor', maskComposite: 'exclude',
        }}
      />

      {/* Glow de color que sigue al cursor */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 group-hover:opacity-70 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), ${reason.color}44 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10">
        <div className="flex gap-4 items-center">
          <div className="mb-6">
            <reason.icon size={48} strokeWidth={1.2} style={{ color: reason.color }} />
          </div>
          <h3 className="text-white font-montserrat font-bold text-2xl mb-4">
            {reason.title}
          </h3>
        </div>

        <p className="text-gray-300 font-montserrat leading-relaxed text-[16px]">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section className="w-full py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Encabezado fiel al diseño */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-6xl"
        >
          <h2 className="text-white font-aston text-4xl lg:text-6xl font-normal mb-8 tracking-tight">
            ¿Por qué nosotros?
          </h2>
          <p className="text-white font-montserrat text-lg lg:text-xl leading-relaxed">
            Nos integramos a tu operación como <span className="text-white font-bold">consultores estratégicos del más alto nivel</span>, aportando la experiencia y la visión ejecutiva que <span className="text-white font-bold">convierte los esfuerzos de la empresa en una máxima rentabilidad comercial.</span>
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mb-32">
          {reasons.map((reason, idx) => (
            <WhyUsCard key={idx} reason={reason} />
          ))}
        </div>

        {/* Botón CTA Final */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-gray-200 transition-colors"
        >
          Habla con un experto
        </motion.button>
      </div>
    </section>
  );
};

export default WhyUs;