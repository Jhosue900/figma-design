import { Target, TrendingUp, Search } from 'lucide-react';
import StatCard from './StatCard.tsx';

function AboutUs() {
  const stats = [
    {
      icon: Target,
      label: 'Empresas Desarrollo',
      value: '+500',
      iconColor: 'border-cyan-500/30',
      bgGradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: TrendingUp,
      label: 'Crecimiento promedio nuestros clientes',
      value: '+300%',
      iconColor: 'border-cyan-500/30',
      bgGradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Search,
      label: 'Proyectos Realizados',
      value: '+1,000',
      iconColor: 'border-amber-500/30',
      bgGradient: 'from-amber-500/20 to-yellow-500/20'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900/50 py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">NOSOTROS SOMOS</p>
            <h2 className="text-7xl font-bold mb-6">WeProm</h2>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  iconColor={stat.iconColor}
                  bgGradient={stat.bgGradient}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Tus próximos aliados para posicionar tu empresa, marca o producto. Nos enfocamos en desarrollar estrategias objetivas, creativas e innovadoras para ayudar a nuestros clientes a seguir creciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;