import React from 'react';
import { Award, Users, Briefcase, Building2 } from 'lucide-react';

import merca20Logo from '../../../images/marketResearch/merca20-red.png';

const edgeData = [
  {
    title: 'Trayectoria',
    desc: 'Más de 35 años conociendo el mercado y sabiendo analizar cada parte que lo conforma.',
    color: '#c5362e', // Rojo coincidente con tu paleta corporativa
    colorAlpha: 'rgba(197, 54, 46, 0.1)',
    Icon: Award,
  },
  {
    title: 'Equipo',
    desc: 'Somos un equipo multidisciplinario y multicultural, adaptado a cualquier tipo de proyecto.',
    color: '#599ddf', // Azul
    colorAlpha: 'rgba(89, 157, 223, 0.1)',
    Icon: Users,
  },
  {
    title: 'Experiencia',
    desc: 'Tenemos la experiencia de haber trabajado con casi todas las industrias y sectores.',
    color: '#80b67d', // Verde
    colorAlpha: 'rgba(128, 182, 125, 0.1)',
    Icon: Briefcase,
  },
  {
    title: 'Infraestructura',
    desc: 'Contamos con toda la infraestructura para poder apoyarte en tu proyecto, sin importar el tamaño.',
    color: '#d4af37', // Dorado / Amarillo Premium
    colorAlpha: 'rgba(212, 175, 55, 0.1)',
    Icon: Building2,
  },
];

export default function OurEdge() {
  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-normal tracking-wide text-white font-aston"
          >
            Lo que nos hace los mejores
          </h2>
        </div>

        {/* Grid de Tarjetas (Responsive: 1 col en mobile, 2 en tablet, 4 en desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {edgeData.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={index}
                className="bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800/60 rounded-2xl p-8 flex flex-col items-start justify-between min-h-[400px] transition-all duration-300 hover:border-gray-700/80 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] group will-change-transform"
              >
                <div className="w-full">
                  {/* Contenedor del Icono con su color nativo y fondo atenuado */}
                  <div
                    className="p-3 rounded-xl inline-flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: item.colorAlpha,
                      color: item.color,
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Título del Atributo */}
                  <h3 
                    className="text-xl font-bold text-white mb-4 tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Detalle decorativo inferior (Línea sutil síncrona con el color de la tarjeta) */}
                <div 
                  className="w-8 h-[2px] mt-6 rounded-full opacity-40 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer Subtext & Merca2.0 Badging */}
        <div className="text-center space-y-6 pt-4">
          <p 
            className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Formamos parte del ranking de mejores agencias de Investigación de mercados en <span className="text-white font-semibold">TODO MÉXICO</span>.
          </p>
          
          {/* Contenedor del Logo Merca2.0 simulado de forma minimalista premium */}
          
          <div className="flex justify-center pt-2">
            <img 
              src={merca20Logo} 
              alt="Ranking Merca 2.0 México" 
              className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}