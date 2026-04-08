import { LucideIcon, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import greenBlur from '../../images/green.png';

interface ServiceCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  blurColor?: 'red' | 'blue' | 'green' | 'yellow' | 'none';
  isOpen: boolean;
  onToggle: () => void;
}

function ServiceCard({ icon, title, description, blurColor = 'none', isOpen, onToggle }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (!isOpen) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
  };

  const isImageIcon = typeof icon === 'string';
  const IconComponent = !isImageIcon ? (icon as any) : null;

  const blurStyles: Record<string, string> = {
    red:    '#ef4444',
    blue:   '#3b82f6',
    green:  '#22c55e',
    yellow: '#eab308',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col overflow-hidden transition-all duration-500 ease-out group/card w-full max-w-[320px] mx-auto border border-white/10 hover:border-white/30"
      style={{
        backgroundColor: '#121212',
        borderRadius: '40px',
        padding: '28px 32px',
      }}
    >
      {/* Borde dinámico spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 40%)`,
          margin: '-1px',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Spotlight de color */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-35 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${blurStyles[blurColor] || 'white'} 0%, transparent 40%)`
        }}
      />

      {/* Mancha de color de fondo */}
      {blurColor === 'green' && (
        <img
          src={greenBlur}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] opacity-5 blur-[40px] pointer-events-none z-0 mix-blend-screen"
        />
      )}
      {blurColor !== 'green' && blurColor !== 'none' && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] blur-[10px] pointer-events-none z-0 opacity-5"
          style={{ background: `radial-gradient(circle, ${blurStyles[blurColor]} 0%, transparent 70%)` }}
        />
      )}

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-5">

        {/* Icono + Título */}
        <div className="flex items-center gap-4">
          {isImageIcon ? (
            <img src={icon as string} alt={title} className="w-9 h-9 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
          ) : (
            <IconComponent className="text-white opacity-100 flex-shrink-0" size={36} strokeWidth={1.5} />
          )}
          <h3
            className="font-montserrat font-semibold text-white text-[17px] sm:text-[19px]"
            style={{ lineHeight: '26px', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
        </div>

        {/* Separador */}
        <div className="h-px bg-white/10" />

        {/* Descripción expandible */}
        {/* Descripción expandible */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="description"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <motion.p
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="font-montserrat font-normal text-[16px] sm:text-[18px] pb-4"
                style={{ lineHeight: '28px', letterSpacing: '-0.02em', color: '#CACFD8' }}
              >
                {description}
              </motion.p>
              
              {/* NUEVO BOTÓN CTA: Conoce más */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="pb-4"
              >
                <button className="px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-sm font-montserrat font-bold uppercase tracking-wider">
                  Conoce más
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón Ver más / Ver menos */}
        <button
          onClick={onToggle}
          className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 text-sm font-montserrat font-medium w-fit"
        >
          <span>{isOpen ? 'Ver menos' : 'Ver más'}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronDown size={16} strokeWidth={2} />
          </motion.div>
        </button>

      </div>
    </div>
  );
}

export default ServiceCard;