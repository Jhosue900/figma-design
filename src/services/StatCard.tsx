import { useEffect, useState } from 'react';
import { LucideIcon, Star } from 'lucide-react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCardProps {
  icon: LucideIcon | 'stars' | string;
  label: string;
  value: string;
  bgStyle: string;
  accentColor: string; // Nueva prop para el color del orbe
}

function StatCard({ icon: Icon, label, value, bgStyle, accentColor }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Lógica del contador
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toLocaleString());
    });
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center w-full max-w-[290px] p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden group cursor-default"
      style={{
        background: bgStyle,
        minHeight: '300px',
        height: 'clamp(300px, 40vw, 430px)',
      }}
    >
      {/* 1. Orbe de luz ambiental */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 blur-[70px] transition-all duration-700 group-hover:scale-[2.5] group-hover:opacity-40 group-hover:blur-[90px] pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      {/* 2. Contenedor de Icono con animación Float */}
      <div className="relative z-10 mb-0 mt-2 flex items-center justify-center shrink-0 min-h-[60px] sm:min-h-[80px] transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-110">
        {Icon === 'stars' ? (
          <div className="flex gap-1 drop-shadow-2xl">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white -mt-2" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
          </div>
        ) : typeof Icon === 'string' ? (
          <img
            src={Icon}
            alt={label}
            className="w-[80%] h-[85%] object-contain drop-shadow-lg"
          />
        ) : (
          <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" strokeWidth={1.2} />
        )}
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center px-2">
        <p className="font-aston text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] text-white">
          {label}
        </p>
      </div>

      {/* 3. Valor con Contador Animado */}
      <div className="relative z-10 mt-3 sm:mt-4 shrink-0">
        <p className="font-montserrat font-bold text-[32px] sm:text-[38px] lg:text-[44px] text-white tracking-tighter">
          {value.includes('+') && '+'}{displayValue}{value.includes('%') && '%'}
        </p>
      </div>
    </motion.div>
  );
}

export default StatCard;