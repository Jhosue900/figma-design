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
    gradient: 'from-pink-900/40 via-pink-800/20 to-transparent',
  },
  {
    icon: MegaphoneIcon,
    title: 'Marketing digital',
    description: 'Diseñamos estrategias digitales enfocadas en resultados; integramos pauta, contenido y analítica para maximizar la inversión.',
    gradient: 'from-cyan-900/40 via-cyan-800/20 to-transparent',
  },
  {
    icon: FingerprintIcon,
    title: 'Professional Branding',
    description: 'Construimos marcas profesionales, coherentes y memorables, definiendo un posicionamiento, mensaje y presencia visual que conecte con el mercado meta',
    gradient: 'from-green-900/40 via-green-800/20 to-transparent',
  },
  {
    icon: PeopleTableIcon,
    title: 'Consultoría en Marketing',
    description: 'Acompañamos a tu empresa con una visión estratégica integral; diagnosticamos, optimizamos y estructuramos planes alineados a tus objetivos comerciales.',
    gradient: 'from-amber-900/40 via-amber-800/20 to-transparent',
  }
];

  return (
    <section className="max-w-[1180px] mx-auto px-8 py-20">

      <h2 className="font-aston text-[64px] leading-[1.1] text-white text-center mb-6">
        Digital Marketing Agency Guadalajara
      </h2>
      
      <p className="font-montserrat font-light antialiased text-[31px] leading-[1.4] tracking-[-0.02em] text-white/90 text-center mb-20 max-w-[1160px] mx-auto">
        Somos WeProm, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        {services.map((service, index) => {
          // Definimos qué color le toca a cada tarjeta
          const colors: ('red' | 'blue' | 'green' | 'yellow')[] = ['red', 'blue', 'green', 'yellow'];
          
          return (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              blurColor={colors[index]} // Asigna: 0:red, 1:blue, 2:green, 3:yellow
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;