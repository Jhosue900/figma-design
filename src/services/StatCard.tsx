import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  iconColor: string;
  bgGradient: string;
}

function StatCard({ icon: Icon, label, value, iconColor, bgGradient }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="mb-3 flex justify-center">
        <div className={`w-12 h-12 bg-gradient-to-br ${bgGradient} rounded-lg flex items-center justify-center border ${iconColor}`}>
          <Icon className={`w-6 h-6 ${iconColor.replace('border-', 'text-')}`} />
        </div>
      </div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      <p className="text-2xl font-bold text-orange-400">{value}</p>
    </div>
  );
}

export default StatCard;