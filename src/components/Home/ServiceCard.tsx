import { LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import greenBlur from '../../images/green.png';

interface ServiceCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  blurColor?: 'red' | 'blue' | 'green' | 'yellow' | 'none';
}

function ServiceCard({ icon, title, description, blurColor = 'none' }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Actualizar variables de posición para el spotlight
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Efecto Tilt (Inclinación)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
  };

  // ... resto de las constantes (isImageIcon, blurStyles)
  const isImageIcon = typeof icon === 'string';
  const Icon = isImageIcon ? null : (icon as LucideIcon);

  const blurStyles: Record<string, string> = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#22c55e',
    yellow: '#eab308',
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between p-7 sm:p-8 overflow-hidden transition-all duration-200 ease-out group w-full max-w-[320px] mx-auto border border-white/10"
      style={{
        minHeight: '420px',
        backgroundColor: '#121212', // Fondo oscuro para que luzca el efecto
        borderRadius: '40px',
      }}
    >

      {/* Nuevo Spotlight dinámico */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${blurStyles[blurColor] || 'white'} 0%, transparent 60%)`
        }}
      />


      {/* Manchas de color */}
      {blurColor === 'green' && (
        <img 
          src={greenBlur} 
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] opacity-10 blur-[40px] pointer-events-none z-0 mix-blend-screen"
        />
      )}

      {blurColor !== 'green' && blurColor !== 'none' && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] blur-[10px] pointer-events-none z-0 opacity-10"
          style={{
            background: `radial-gradient(circle, ${blurStyles[blurColor]} 0%, transparent 70%)`
          }}
        />
      )}

      <div className="relative z-10 h-full flex flex-col justify-between gap-8 sm:gap-12">
        <div>
          {isImageIcon ? (
            <img 
              src={icon as string}
              alt={title}
              className="w-10 h-10 sm:w-[46px] sm:h-[46px] object-contain"
            />
          ) : Icon && (
            <Icon 
              className="text-white opacity-100 w-10 h-10 sm:w-[46px] sm:h-[46px]" 
              strokeWidth={1.5} 
            />
          )}
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mt-auto">
          <h3 
            className="font-montserrat font-semibold text-white text-[17px] sm:text-[19px]"
            style={{ lineHeight: '28px', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
          <p 
            className="font-montserrat font-normal text-[18px] sm:text-[20px] lg:text-[22px]"
            style={{ lineHeight: '28px', letterSpacing: '-0.02em', color: '#CACFD8' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;