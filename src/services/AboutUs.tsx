import StatCard from './StatCard.tsx';
import targetImg from '../images/target.png';
import TrendingUp from '../images/trending.png';
import Stars from '../images/stars.png';

function AboutUs() {
  const stats = [
    {
      icon: targetImg,
      label: 'Empresas Desarrolladas',
      value: '+500',
      bg: 'linear-gradient(180deg, rgba(227, 51, 42, 0.15) -0.2%, rgba(43, 138, 192, 0.1) 51.01%, rgba(0, 0, 0, 1) 100%)'
    },
    {
      icon: TrendingUp,
      label: 'Crecimiento promedio nuestros clientes',
      value: '+300%',
      bg: 'linear-gradient(0deg, rgba(3, 157, 225, 0.15) 0.01%, rgba(29, 164, 196, 0.1) 10%, rgba(65, 173, 156, 0.1) 24.99%, rgba(0, 0, 0, 1) 99.94%)'
    },
    {
      icon: Stars,
      label: 'Proyectos Realizados',
      value: '+1,000',
      bg: 'linear-gradient(0deg, rgba(96, 182, 123, 0.15) -0.07%, rgba(247, 176, 51, 0.1) 47.9%, rgba(0, 0, 0, 1) 99.86%)'
    }
  ];

  return (
    <section className="w-full bg-black py-16 sm:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1131px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — apilado en móvil, fila en desktop */}
        <div className="flex flex-col md:flex-row justify-end items-start gap-4 sm:gap-6 lg:gap-[30px]">
          <div className="flex flex-col">
            <p className="font-montserrat font-medium text-[14px] sm:text-[18px] lg:text-[20px] leading-[1.6] tracking-[-0.02em] text-white text-left md:text-end">
              NOSOTROS SOMOS
            </p>
            <h2 className="font-aston text-[64px] sm:text-[90px] lg:text-[120px] leading-none text-white mt-[-6px] sm:mt-[-10px]">
              WeProm
            </h2>
          </div>

          <div className="w-full md:max-w-[545px]">
            <p className="font-montserrat font-light text-[16px] sm:text-[20px] lg:text-[25px] leading-[1.6] tracking-[-0.02em] text-white">
              Tus próximos aliados para posicionar tu empresa, marca o producto. Nos enfocamos en desarrollar estrategias objetivas, creativas e innovadoras para ayudar a nuestros clientes a seguir creciendo.
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mt-12 sm:mt-16 lg:mt-[80px] flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-[40px] w-full max-w-[960px] justify-items-center">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon as any}
                label={stat.label}
                value={stat.value}
                bgStyle={stat.bg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;