import { LucideIcon } from 'lucide-react';
import greenBlur from '../../images/green.png';

interface ServiceCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  blurColor?: 'red' | 'blue' | 'green' | 'yellow' | 'none';
}

function ServiceCard({ icon, title, description, blurColor = 'none' }: ServiceCardProps) {
  const isImageIcon = typeof icon === 'string';
  const Icon = isImageIcon ? null : (icon as LucideIcon);

  const blurStyles: Record<string, string> = {
    red: 'rgba(220, 38, 38, 0.4)',
    blue: 'rgba(37, 99, 235, 0.4)',
    yellow: 'rgba(234, 179, 8, 0.4)',
  };

  return (
    <div 
      className="relative flex flex-col justify-between p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:bg-[#ffffff3d] group w-full max-w-[272px] mx-auto"
      style={{
        minHeight: '380px',
        height: 'auto',
        backgroundColor: '#FFFFFF26',
        borderRadius: '48px',
      }}
    >
      {/* Manchas de color */}
      {blurColor === 'green' && (
        <img 
          src={greenBlur} 
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] opacity-50 blur-[40px] pointer-events-none z-0 mix-blend-screen"
        />
      )}

      {blurColor !== 'green' && blurColor !== 'none' && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] blur-[10px] pointer-events-none z-0 opacity-100"
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