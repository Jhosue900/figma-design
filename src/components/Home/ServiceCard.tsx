import { LucideIcon } from 'lucide-react';
import greenBlur from '../images/green.png';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  blurColor?: 'red' | 'blue' | 'green' | 'yellow' | 'none'; // Nueva prop
}

function ServiceCard({ icon: Icon, title, description, blurColor = 'none' }: ServiceCardProps) {
  // Configuración de colores para los halos
  const blurStyles: Record<string, string> = {
    red: 'rgba(220, 38, 38, 0.4)',    // Rojo
    blue: 'rgba(37, 99, 235, 0.4)',   // Azul
    yellow: 'rgba(234, 179, 8, 0.4)', // Amarillo
  };

  return (
    <div 
      className="relative flex flex-col justify-between p-[24px] overflow-hidden transition-all duration-300 hover:bg-[#ffffff3d] group"
      style={{
        width: '272px',
        height: '510px',
        backgroundColor: '#FFFFFF26',
        borderRadius: '48px',
      }}
    >
      {/* --- MANCHAS DE COLOR --- */}
      
      {/* Caso especial: Verde (con tu imagen) */}
      {blurColor === 'green' && (
        <img 
          src={greenBlur} 
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] opacity-50 blur-[40px] pointer-events-none z-0 mix-blend-screen"
        />
      )}

      {/* Casos: Rojo, Azul, Amarillo (con gradiente radial) */}
      {blurColor !== 'green' && blurColor !== 'none' && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] blur-[10px] pointer-events-none z-0 opacity-100"
          style={{
            background: `radial-gradient(circle, ${blurStyles[blurColor]} 0%, transparent 70%)`
          }}
        />
      )}

      {/* Contenido (Icono y Texto) - Mantenemos el z-10 para que flote sobre la mancha */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <Icon 
            style={{ width: '46px', height: '46px' }} 
            className="text-white opacity-100" 
            strokeWidth={1.5} 
          />
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <h3 
            className="font-montserrat font-semibold text-white"
            style={{
              width: '217px',
              fontSize: '19px',
              lineHeight: '28px',
              letterSpacing: '-2%',
            }}
          >
            {title}
          </h3>
          <p 
            className="font-montserrat font-normal"
            style={{
              width: '224px',
              height: 'auto',
              fontSize: '22px',
              lineHeight: '28px',
              letterSpacing: '-2%',
              color: '#CACFD8'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;