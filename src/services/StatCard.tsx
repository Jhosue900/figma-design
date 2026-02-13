import { LucideIcon, Star } from 'lucide-react';

interface StatCardProps {
  // Ahora icon puede ser un componente de Lucide, el string 'stars', o la ruta de una imagen
  icon: LucideIcon | 'stars' | string; 
  label: string;
  value: string;
  bgStyle: string;
}

function StatCard({ icon: Icon, label, value, bgStyle }: StatCardProps) {
  return (
    <div 
      className="flex flex-col items-center text-center w-full max-w-[290px] h-[430px] p-8 rounded-3xl border border-black relative overflow-hidden"
      style={{ background: bgStyle }}
    >
      <div className="mb-0 mt-2 flex items-center justify-center shrink-0 min-h-[80px]">
        {/* LÓGICA DE ICONOS: */}
        {Icon === 'stars' ? (
          <div className="flex gap-1">
            <Star className="w-8 h-8 text-white fill-white" />
            <Star className="w-10 h-10 text-white fill-white -mt-2" />
            <Star className="w-8 h-8 text-white fill-white" />
          </div>
        ) : typeof Icon === 'string' ? (
          /* Renderizar imagen si el Icon es un string (la ruta del target.png) */
          <img 
            src={Icon} 
            alt={label} 
            className="w-[85%] h-[92%] object-contain" 
          />
        ) : (
          /* Renderizar componente Lucide normal */
          <Icon className="w-16 h-16 text-white" strokeWidth={1.2} />
        )}
      </div>

      <div className="flex-grow flex items-normal justify-center">
        <p className="font-aston text-[30px] md:text-[32px] leading-[1.1] text-white">
          {label}
        </p>
      </div>

      <div className="mt-4 shrink-0">
        <p className="font-montserrat font-bold text-[28px] text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;