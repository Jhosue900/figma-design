import ServiceCard from '../components/Home/ServiceCard';
import SearchIcon from '../images/servicesImages/Search.png'
import FingerprintIcon from '../images/servicesImages/FINGERPRINT.png'
import MegaphoneIcon from '../images/servicesImages/Megaphone.png'
import PeopleTableIcon from '../images/servicesImages/PeopleTable.png'

function Services() {
  const services = [
    {
      icon: SearchIcon,
      title: 'Investigación de Mercados',
      description: 'Tomamos decisiones con base en datos, consumidores, competencia y el entorno para identificar oportunidades reales y ventajas competitivas.',
    },
    {
      icon: MegaphoneIcon,
      title: 'Marketing digital',
      description: 'Diseñamos estrategias digitales enfocadas en resultados; integramos pauta, contenido y analítica para maximizar la inversión.',
    },
    {
      icon: FingerprintIcon,
      title: 'Professional Branding',
      description: 'Construimos marcas profesionales, coherentes y memorables, definiendo un posicionamiento, mensaje y presencia visual que conecte con el mercado meta.',
    },
    {
      icon: PeopleTableIcon,
      title: 'Consultoría en Marketing',
      description: 'Acompañamos a tu empresa con una visión estratégica integral; diagnosticamos, optimizamos y estructuramos planes alineados a tus objetivos comerciales.',
    }
  ];

  const colors: ('red' | 'blue' | 'green' | 'yellow')[] = ['red', 'blue', 'green', 'yellow'];

  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

      <h2 className="font-aston text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] text-white text-center mb-4 sm:mb-6">
        Digital Marketing Agency Guadalajara
      </h2>

      <p className="font-montserrat font-light antialiased text-[16px] sm:text-[22px] lg:text-[31px] leading-[1.4] tracking-[-0.02em] text-white/90 text-center mb-12 sm:mb-20 max-w-[1160px] mx-auto">
        Somos WeProm, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
      </p>

      {/* Grid: 1 col móvil, 2 tablet, 4 desktop — centrado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            blurColor={colors[index]}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;