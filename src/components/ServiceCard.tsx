import { LucideIcon } from 'lucide-react';
import greenBlur from '../images/green.png'; // Importación de la mancha

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  showGreenBlur?: boolean;
}

function ServiceCard({ icon: Icon, title, description, showGreenBlur }: ServiceCardProps) {
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
      {/* --- MANCHA VERDE SUPERPUESTA --- */}
      {showGreenBlur && (
        <img 
          src={greenBlur} 
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] opacity-50 blur-[40px] pointer-events-none z-0 mix-blend-screen"
        />
      )}

      {/* Capa 1: Icono (Arriba) */}
      <div className="relative z-10">
        <Icon 
          style={{ width: '46px', height: '46px' }} 
          className="text-white opacity-100" 
          strokeWidth={1.5} 
        />
      </div>

      {/* Contenedor de Texto (Abajo) */}
      <div className="flex flex-col gap-4 mt-auto z-10"> {/* mt-auto empuja todo al fondo */}
        {/* Label 1: Título */}
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

        {/* Label 2: Descripción */}
        <p 
          className="font-montserrat font-normal"
          style={{
            width: '224px',
            height: 'auto', // Cambiado a auto para que el padding inferior sea real
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
  );
}

export default ServiceCard;