import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import interceramic from '../../images/logoInterceramic.png';
import driscolls from '../../images/LogoDriscolls.png';
import KIA from '../../images/LogoKIA.webp';
import kenworth from '../../images/LogoKenworth.svg';

const COLORS = {
  red:    '#FF3B30',
  blue:   '#007AFF',
  green:  '#34C759',
  yellow: '#FF9500',
};

function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', src: interceramic, alt: 'Interceramic Logo' },
    { name: 'MINISTERIAL', isText: true, className: 'text-base sm:text-xl md:text-2xl font-medium tracking-[0.2em] pt-1' },
    { name: "Driscoll's", src: driscolls, alt: "Driscoll's Logo" },
    { name: 'SWISSJUST', isText: true, className: 'text-base sm:text-xl md:text-2xl font-medium tracking-[0.2em] pt-1' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo' },
    { name: 'KENWORTH', src: kenworth, alt: 'Kenworth Logo' },
  ];

  const stats = [
    { number: '35+',     label: 'Años de experiencia',   color: COLORS.red    },
    { number: '1.000+',  label: 'Clientes satisfechos',  color: COLORS.blue   },
    { number: '12.000+', label: 'Proyectos completados', color: COLORS.green  },
    { number: '100%',    label: 'Tasa de satisfacción',  color: COLORS.yellow },
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
                <div className="flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  {brand.isText ? (
                    <span className={`${brand.className} text-black whitespace-nowrap`}>
                      {brand.name}
                    </span>
                  ) : (
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className={`w-auto object-contain transition-all ${
                        brand.name === 'KIA' ? 'h-10 sm:h-14 md:h-16' : 'h-7 sm:h-9 md:h-11'
                      }`}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 sm:p-12 mb-12 mt-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,59,48,0.05), rgba(255,149,0,0.05), rgba(0,122,255,0.05))',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group/stat"
              >
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 transition-transform duration-300 group-hover/stat:scale-110"
                  style={{
                    background: `linear-gradient(to bottom, ${stat.color}, ${stat.color}B3)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/60 font-medium">
                  {stat.label}
                </div>
                <div
                  className="w-12 h-1 mx-auto mt-3 rounded-full transform scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${stat.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default BackedBy;