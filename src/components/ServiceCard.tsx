import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

function ServiceCard({ icon: Icon, title, description, gradient }: ServiceCardProps) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300`}>
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-40 blur-2xl -z-10" 
           style={{
             background: `radial-gradient(circle at 50% 50%, ${gradient.includes('pink') ? 'rgba(219, 39, 119, 0.3)' : 
                                                                gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' : 
                                                                gradient.includes('green') ? 'rgba(34, 197, 94, 0.3)' : 
                                                                'rgba(217, 119, 6, 0.3)'}, transparent 70%)`
           }}
      ></div>
      
      <Icon className="w-10 h-10 mb-6 text-white" strokeWidth={1.5} />
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;