import { useState, useCallback } from 'react';
import ServiceCard from '../components/Home/ServiceCard';
import SearchIcon from '../images/servicesImages/Search.png'
import FingerprintIcon from '../images/servicesImages/FINGERPRINT.png'
import MegaphoneIcon from '../images/servicesImages/Megaphone.png'
import PeopleTableIcon from '../images/servicesImages/PeopleTable.png'

import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Video } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'

function Services() {
  const navigate = useNavigate();
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const handleToggle = useCallback((title: string) => {
    setOpenTitle(prev => prev === title ? null : title);
  }, []);

  const services = [
    {
      icon: MegaphoneIcon,
      title: 'Marketing digital',
      path: '/servicios/marketing-digital',
      description: 'Diseñamos estrategias digitales enfocadas en resultados; integramos pauta, contenido y analítica para maximizar la inversión.',
    },
    {
      icon: FingerprintIcon,
      title: 'Professional Branding',
      path: '/servicios/branding',
      description: 'Construimos marcas profesionales, coherentes y memorables, definiendo un posicionamiento, mensaje y presencia visual que conecte con el mercado meta.',
    },
    {
      icon: Video,
      title: 'Producción Audiovisual',
      path: '/servicios/audiovisual',
      description: 'Potenciamos la narrativa de tu marca con estándares cinematográficos; conceptualizamos, filmamos y editamos piezas de alta fidelidad adaptadas a los objetivos comerciales de cualquier industria.',
    },
    {
      icon: PeopleTableIcon,
      title: 'Consultoría en Marketing',
      path: '/servicios/consultoriademarketing',
      description: 'Acompañamos a tu empresa con una visión estratégica integral; diagnosticamos, optimizamos y estructuramos planes alineados a tus objetivos comerciales.',
    },
    {
      icon: SearchIcon,
      title: 'Investigación de Mercados',
      path: '/servicios/investigacion',
      description: 'Tomamos decisiones con base en datos, consumidores, competencia y el entorno para identificar oportunidades reales y ventajas competitivas.',
    }
  ];

  const colors: ('red' | 'blue' | 'green' | 'yellow')[] = ['red', 'blue', 'green', 'yellow', 'blue'];

  // Cierra todas las cards cuando el swiper se mueve
  const handleSlideChange = useCallback(() => {
    setOpenTitle(null);
  }, []);

  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="font-aston text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] text-white text-center mb-4 sm:mb-6">
          La Mejor Agencia de Marketing en México
        </h2>

        <p className="font-montserrat font-light antialiased text-[16px] sm:text-[22px] lg:text-[31px] leading-[1.4] tracking-[-0.02em] text-white/90 text-center mb-12 sm:mb-20 max-w-[1160px] mx-auto">
          Somos WeProm, tus próximos aliados en el posicionamiento de tu marca, empresa o producto.
        </p>

        <h3 className="font-aston text-[22px] sm:text-[34px] lg:text-[50px] leading-[1.1] text-white text-center mb-10">
          Nuestros Servicios
        </h3>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 relative group">

        {/* Sombra Izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#000] to-transparent opacity-60 rounded-[40px]" />

        {/* Sombra Derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#000] to-transparent opacity-60 rounded-[40px]" />

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={12}
          slidesPerView={1}
          observer={true}
          observeParents={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="services-swiper !py-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title} className="!h-auto flex items-stretch">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                blurColor={colors[index]}
                isOpen={openTitle === service.title}
                onToggle={() => handleToggle(service.title)}
                onLearnMore={() => navigate(service.path)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-[#121212]/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 shadow-xl backdrop-blur-sm">
          <ChevronLeft size={28} />
        </button>

        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-[#121212]/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 shadow-xl backdrop-blur-sm">
          <ChevronRight size={28} />
        </button>
      </div>

      <style>{`
        .swiper-button-disabled {
          opacity: 0 !important;
          pointer-events: none;
        }
      
        .services-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }
      
        .services-swiper .swiper-pagination-bullet-active {
          background: #fff !important;
          width: 20px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      
        .swiper-button-prev-custom, .swiper-button-next-custom {
          cursor: pointer;
        }
      
        @media (max-width: 768px) {
          .swiper-button-prev-custom, 
          .swiper-button-next-custom,
          .bg-gradient-to-r,
          .bg-gradient-to-l {
            display: none !important;
          }
          .services-swiper {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;