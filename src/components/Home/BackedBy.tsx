import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import interceramic from '../../images/logoInterceramic.png';
import driscolls from '../../images/LogoDriscolls.png';
import KIA from '../../images/LogoKIAWhite.jpg';
import kenworth from '../../images/LogoKenworth.svg';

function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', src: interceramic, alt: 'Interceramic Logo' },
    { name: 'MINISTERIAL', isText: true, className: 'text-base sm:text-xl md:text-2xl font-medium tracking-[0.2em] pt-1' },
    { name: "Driscoll's", src: driscolls, alt: "Driscoll's Logo" },
    { name: 'SWISSJUST', isText: true, className: 'text-base sm:text-xl md:text-2xl font-medium tracking-[0.2em] pt-1' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo' },
    { name: 'KENWORTH', src: kenworth, alt: 'Kenworth Logo' },
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="relative w-full pt-10 sm:pt-12 pb-14 sm:pb-20 overflow-hidden bg-transparent group">
      
      <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
      <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

      <div className="relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10">
        
        <p className="font-montserrat font-light text-[18px] sm:text-[24px] md:text-[36px] tracking-[-0.02em] text-white/60 text-center mb-10 sm:mb-16 uppercase">
          Backed by
        </p>

        <div className="relative flex items-center">
          <button className="prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          
          <button className="next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="flex items-center"
          >
            {allBrands.map((brand, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center py-4">
                <div className="flex items-center justify-center h-16 sm:h-20 transition-all duration-500 opacity-90 hover:opacity-100 transform hover:scale-105">

                  {brand.isText ? (
                    <span className={`${brand.className} text-white whitespace-nowrap`}>
                      {brand.name}
                    </span>
                  ) : (
                    <img 
                      src={brand.src} 
                      alt={brand.alt} 
                      className={`w-auto object-contain transition-all ${
                        brand.name === 'KIA' 
                          ? 'h-10 sm:h-14 md:h-16 grayscale brightness-[10]' // Más grande para KIA
                          : brand.name === 'KENWORTH'
                          ? 'h-7 sm:h-9 md:h-11 grayscale brightness-[10]'   // Estándar para Kenworth
                          : 'h-7 sm:h-9 md:h-11 brightness-0 invert'        // Estándar para el resto
                      }`}
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