import React, { useState } from 'react';
import { MonitorPlay, Smartphone, Box, Camera, Building2 } from 'lucide-react';

const DroneIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    <path d="M10.5 10.5 7 7" />
    <path d="M13.5 10.5 17 7" />
    <path d="M10.5 13.5 7 17" />
    <path d="M13.5 13.5 17 17" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

const SolucionesAudiovisuales = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Video Institucional',
      description: 'Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo.',
      icon: <Building2 size={32} />,
      color: '#c5362e',
    },
    {
      id: 2,
      title: 'Video Publicitario',
      description: 'Campañas comerciales diseñadas para capturar la atención, detonar conversiones y escalar tus ventas en TV o medios digitales.',
      icon: <MonitorPlay size={32} />,
      color: '#e6af41',
    },
    {
      id: 3,
      title: 'Social Media',
      description: 'Reels publicitarios, UGC y testimoniales. Narrativa visual ágil y optimizada para retener la atención y convertir seguidores en clientes.',
      icon: <Smartphone size={32} />,
      color: '#599ddf',
    },
    {
      id: 4,
      title: 'Animación 2D y 3D',
      description: 'Damos vida a tus conceptos. Motion graphics y modelado 3D de alta calidad para comunicar mensajes complejos de manera atractiva y efectiva.',
      icon: <Box size={32} />,
      color: '#80b67d',
    },
    {
      id: 5,
      title: 'Fotografía Profesional',
      description: 'Capturamos la esencia de tu marca con una dirección de arte impecable. Fotografía de producto, editorial y corporativa de primer nivel.',
      icon: <Camera size={32} />,
      color: '#c5362e',
    },
    {
      id: 6,
      title: 'Producción con Drones',
      description: 'Perspectivas que elevan el valor de tu producción. Vuelos FPV inmersivos y tomas panorámicas estabilizadas con calidad cinematográfica.',
      icon: <DroneIcon size={32} />,
      color: '#599ddf',
    },
  ];

  return (
    <section className="w-full bg-transparent py-12 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">

      {/* Encabezado */}
      <div className="text-center mb-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-aston tracking-tight mb-4 text-white">
          Soluciones Audiovisuales Integrales
        </h2>
        <p className="text-white font-aston font-normal text-base md:text-lg">
          Desarrollamos proyectos escalables con un enfoque estratégico. Selecciona un servicio para conocer más.
        </p>
      </div>

      {/* Tarjetas expansibles */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto lg:h-[350px]">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900
                ${isActive ? 'h-[240px] lg:h-full lg:flex-[3]' : 'h-[68px] lg:h-full lg:flex-1'}
              `}
            >
              {/* Fondo con brillo dinámico */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(to bottom right, ${service.color}20, transparent)`,
                  opacity: isActive ? 1 : 0,
                }}
              />

              {/* Contenido colapsado — móvil */}
              <div className={`absolute inset-0 flex items-center px-5 transition-opacity duration-300 lg:hidden ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
                <div className="flex-shrink-0 mr-4" style={{ color: service.color }}>
                  <div className="transform scale-75">{service.icon}</div>
                </div>
                <h3 className="text-white/70 font-bold text-[15px] sm:text-base truncate">
                  {service.title}
                </h3>
              </div>

              {/* Contenido vertical — desktop colapsado */}
              <div className={`absolute inset-0 flex-col items-center justify-start pt-6 pb-6 transition-opacity duration-300 hidden lg:flex ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div style={{ color: service.color }}>{service.icon}</div>
                <span
                  className="text-white/40 font-bold whitespace-nowrap tracking-wider uppercase text-sm mt-auto"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {service.title}
                </span>
              </div>

              {/* Contenido expandido */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-start transition-opacity duration-700 ${isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
                {/* Ícono decorativo de fondo */}
                <div
                  className="absolute -right-8 -top-8 opacity-5"
                  style={{ color: service.color, transform: 'scale(3)' }}
                >
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 shadow-lg border"
                    style={{
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-montserrat mb-3 text-white">
                    {service.title}
                  </h3>

                  <p className="text-white/60 font-montserrat font-light text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Línea inferior — solo móvil */}
              <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-700 lg:hidden"
                style={{ backgroundColor: service.color, width: isActive ? '100%' : '0%' }}
              />
            </div>
          );
        })}
      </div>

      {/* Botón CTA */}
      <div className="mt-12 lg:mt-16">
        <button
          className="px-8 py-4 font-aston font-bold rounded-full flex items-center gap-2 group transition-all duration-300 text-black"
          style={{
            background: 'white',
            border: '2px solid transparent',
          }}
        >
          Cotizar Proyecto
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default SolucionesAudiovisuales;