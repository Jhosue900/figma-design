import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

const TARGET_AUDIENCE = [
  {
    title: "Empresas Consolidadas",
    border: "border-blue-500/50 hover:border-blue-500/80", 
    shadow: "shadow-blue-500/20 hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]",
    iconColor: "text-blue-500",
    points: [
      "Buscan optimizar sus recursos",
      "Desean llegar a nuevos mercados",
      "Necesitan reestructurar sus procesos comerciales"
    ]
  },
  {
    title: "Empresas en Desarrollo",
    border: "border-amber-500/50 hover:border-amber-500/80",
    shadow: "shadow-amber-500/30 hover:shadow-[inset_0_0_20px_rgba(245,158,11,0.2)]",
    iconColor: "text-amber-500",
    points: [
      "Atraviesan puntos de inflexión",
      "Desean escalar sus ventas",
      "Requieren claridad operativa"
    ]
  },
  {
    title: "Startups y Emprendimientos",
    border: "border-green-500/60 hover:border-green-500/80",
    shadow: "shadow-green-500/30 hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.2)]",
    iconColor: "text-green-500",
    points: [
      "Desean escalar a nivel profesional",
      "Buscan una estrategia desde etapas tempranas",
      "Valoran la dirección estratégica sobre la improvisación"
    ]
  }
];

const SYMPTOMS = [
  "Falta de dirección estratégica y ejecución sin enfoque claro.",
  "Desalineación constante entre los esfuerzos comerciales y las ventas.",
  "Bajo rendimiento y falta de retorno sobre inversión en marketing.",
  "Dificultad para estructurar, medir y escalar los resultados de negocio."
];

const PublicoObjetivo = () => {
  return (
    <section className="w-full py-24 bg-transparent text-white font-montserrat">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Título Superior */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-aston text-center mb-16 tracking-tight"
        >
          ¿A quién dirigimos nuestros servicios?
        </motion.h2>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TARGET_AUDIENCE.map((item, idx) => (
            // Dentro del map de TARGET_AUDIENCE:
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }} // Efecto de elevación premium
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`py-6 px-4 rounded-3xl border ${item.border} bg-zinc-900/40 backdrop-blur-sm ${item.shadow} shadow-2xl transition-all duration-500 ease-out`}
            >
            
              <h3 className="text-xl font-extrabold mb-6 text-center">{item.title}</h3>
              <ul className="space-y-4">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed group/item">
                    {/* Contenedor del check con borde dinámico */}
                    <span className={`mt-1 p-0.5 rounded-full border ${item.iconColor.replace('text-', 'border-')}/40`}>
                      <Check 
                        size={12} 
                        className={`${item.iconColor} filter drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]`} 
                        strokeWidth={3} 
                      />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

        {/* Sección Sintomatología */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ shadow: "0 0 60px -12px rgba(239,68,68,0.3)" }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-10 md:p-14 border border-red-500/70 hover:border-red-400/90 bg-zinc-900/60 overflow-hidden group shadow-[0_0_50px_-12px_rgba(239,68,68,0.2)] hover:shadow-[inset_0_0_30px_rgba(239,68,68,0.15)] transition-all duration-700"
        >
          {/* Icono de fondo decorativo */}
          <AlertTriangle className="absolute right-[-20px] bottom-[-20px] text-white/5 rotate-12" size={300} />

          <h3 className="text-3xl md:text-4xl font-normal font-aston text-center mb-12 relative z-10">
            Sintomatología que erradicamos:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            {SYMPTOMS.map((symptom, sIdx) => (
              <motion.div 
                key={sIdx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (sIdx * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2 shadow-[0_0_10px_#ef4444]" />
                <p className="text-zinc-400 text-base md:text-lg leading-snug">
                  {symptom}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PublicoObjetivo;