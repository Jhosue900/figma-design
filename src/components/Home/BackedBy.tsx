import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

import interceramic from '../../images/logoInterceramic.png';
import driscolls from '../../images/LogoDriscolls.png';
import KIA from '../../images/LogoKIAWhite.jpg';
import kenworth from '../../images/LogoKenworth.svg';

function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', src: interceramic, alt: 'Interceramic Logo' },
    { name: 'MINISTERIAL', isText: true, className: 'text-2xl font-light tracking-widest' },
    { name: "Driscoll's", src: driscolls, alt: "Driscoll's Logo" },
    { name: 'SWISSJUST', isText: true, className: 'text-2xl font-light tracking-widest' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo' },
    { name: 'KENWORTH', src: kenworth, alt: 'Kenworth Logo' },
  ];

  // Duplicamos marcas para que el scroll infinito se vea fluido
  const allBrands = [...brands, ...brands];

  return (
    <section className="relative w-full pt-12 pb-20 overflow-hidden bg-transparent group">
      
      {/* --- ECLIPSES LATERALES (Sombra difuminada) --- */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

      {/* --- CONTENIDO --- */}
      <div className="relative w-full max-w-[1519px] mx-auto px-8 z-10">
        
        <p className="font-montserrat font-light text-[24px] md:text-[36px] tracking-[-0.02em] text-white/60 text-center mb-16 uppercase">
          Backed by
        </p>

        <div className="relative flex items-center">
          {/* Botones de Navegación Manual (Visibles en hover) */}
          <button className="prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          
          <button className="next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            speed={4000} // Velocidad de la transición
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="flex items-center"
          >
            {allBrands.map((brand, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center py-4">
                <div className="flex items-center justify-center transition-all duration-500 hover:grayscale-0 grayscale opacity-40 hover:opacity-100 transform hover:scale-110">
                  {brand.isText ? (
                    <span className={`${brand.className} text-white whitespace-nowrap`}>
                      {brand.name}
                    </span>
                  ) : (
                    <img 
                      src={brand.src} 
                      alt={brand.alt} 
                      className="h-12 md:h-16 w-auto object-contain invert brightness-200"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default BackedBy;