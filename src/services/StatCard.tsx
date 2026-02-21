import { LucideIcon, Star } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon | 'stars' | string;
  label: string;
  value: string;
  bgStyle: string;
}

function StatCard({ icon: Icon, label, value, bgStyle }: StatCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center w-full max-w-[290px] p-6 sm:p-8 rounded-3xl border border-black relative overflow-hidden"
      style={{
        background: bgStyle,
        minHeight: '300px',
        height: 'clamp(300px, 40vw, 430px)',
      }}
    >
      {/* Icono */}
      <div className="mb-0 mt-2 flex items-center justify-center shrink-0 min-h-[60px] sm:min-h-[80px]">
        {Icon === 'stars' ? (
          <div className="flex gap-1">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white -mt-2" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
          </div>
        ) : typeof Icon === 'string' ? (
          <img
            src={Icon}
            alt={label}
            className="w-[80%] h-[85%] object-contain"
          />
        ) : (
          <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.2} />
        )}
      </div>

      <div className="flex-grow flex items-center justify-center px-2">
        <p className="font-aston text-[22px] sm:text-[26px] md:text-[30px] leading-[1.1] text-white">
          {label}
        </p>
      </div>

      <div className="mt-3 sm:mt-4 shrink-0">
        <p className="font-montserrat font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;