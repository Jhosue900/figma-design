import { LucideIcon, Star } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon | 'stars'; // Aceptamos el componente o el string 'stars'
  label: string;
  value: string;
  bgStyle: string; // Recibimos el degradado específico
}

function StatCard({ icon: Icon, label, value, bgStyle }: StatCardProps) {
  return (
    <div 
      className="flex flex-col items-center text-center w-full max-w-[290px] h-[396px] p-8 rounded-3xl border border-black relative overflow-hidden"
      style={{ background: bgStyle }}
    >
      {/* Icono sin fondo (Sin el círculo anterior) */}
      <div className="mb-0 mt-4 flex items-center justify-center shrink-0 min-h-[80px]">
        {Icon === 'stars' ? (
          <div className="flex gap-1">
            <Star className="w-8 h-8 text-white fill-white" />
            <Star className="w-10 h-10 text-white fill-white -mt-2" />
            <Star className="w-8 h-8 text-white fill-white" />
          </div>
        ) : (
          <Icon className="w-16 h-16 text-white" strokeWidth={1.2} />
        )}
      </div>

      {/* Label 1: Astonpoliz */}
      <div className="flex-grow flex items-center justify-center">
        <p className="font-aston text-[30px] md:text-[35px] leading-[1.1] text-white">
          {label}
        </p>
      </div>

      {/* Label Value: Montserrat Bold */}
      <div className="mt-4 shrink-0">
        <p className="font-montserrat font-bold text-[28px] text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;