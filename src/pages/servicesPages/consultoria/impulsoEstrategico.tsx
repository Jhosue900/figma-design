import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IconStore = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1-5h16l1 5"/>
    <path d="M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2"/>
    <path d="M5 11v9h14v-9"/><rect x="9" y="14" width="6" height="6" rx="1"/>
  </svg>
);

const IconCursor = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l6.5 17 3-7 7-3z"/>
    <path d="M13.5 13.5L19 19"/>
  </svg>
);

const IconMessage = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconTrending = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const IconBulb = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6"/>
    <path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
  </svg>
);

interface Service {
  name: string;
  color: string;
  icon: React.ReactElement;
  title: string;
  desc: string;
  items: string[];
}

const services: Service[] = [
  {
    name: 'Consultoría Comercial',
    color: '#ba3f35',
    icon: <IconStore color="#ba3f35" />,
    title: 'Consultoría Comercial',
    desc: 'Evaluamos tu estrategia comercial actual e identificamos dónde hay mayor potencial de crecimiento y rentabilidad.',
    items: ['Estrategia de penetración y conquista de mercados estratégicos.', 'Rediseño de la mezcla comercial por canal y segmento.', 'Optimización de canales de comercialización.'],
  },
  {
    name: 'Consultoría en Marketing Digital',
    color: '#5fa1cf',
    icon: <IconCursor color="#5fa1cf" />,
    title: 'Consultoría de Estrategia Digital',
    desc: 'Auditamos tu ecosistema digital y optimizamos cada punto para mejorar la calidad y volumen de adquisición de clientes.',
    items: ['Estructura del embudo de ventas desde atracción hasta conversión.', 'Estrategia de paid media orientada a resultados.', 'Definición, medición y escalamiento de KPIs'],
  },
  {
    name: 'Consultoría en Comunicación Estratégica',
    color: '#e5ad43',
    icon: <IconMessage color="#e5ad43" />,
    title: 'Consultoría en Comunicación Estratégica',
    desc: 'Revisamos cómo está comunicando tu marca y afinamos los medios, mensajes y alianzas para un mayor impacto.',
    items: ['Creación de estrategia de marca.', 'Estrategia de Relaciones Públicas y medios de alto impacto.', 'Alianzas estratégicas para aumentar alcance y valor.'],
  },
  {
    name: 'Capacitación a Equipos de Ventas',
    color: '#7eb387',
    icon: <IconTrending color="#7eb387" />,
    title: 'Capacitación a Equipos de Ventas',
    desc: 'Elevamos el desempeño de tu equipo comercial con procesos, discursos y métricas que mejoran la tasa de cierre.',
    items: ['Estructuración del proceso comercial y experiencia del cliente.', 'Construcción de discursos de valor y negociación estratégica.', 'Indicadores de desempeño y motivacion comercial.'],
  },
  {
    name: 'Workshops Estratégicos',
    color: '#d4d4d4',
    icon: <IconBulb color="#d4d4d4" />,
    title: 'Workshops Estratégicos',
    desc: 'Sesiones ejecutivas para recalibrar dirección, resolver cuellos de botella y tomar decisiones con mayor claridad.',
    items: ['Talleres de creatividad.', 'Actividades de Teambuilding.', 'Sesiones de ideación estratégica.', 'Dinámicas de innovación.'],
  },
];

const ServiciosSection = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="w-full py-20 px-6 sm:px-12 md:px-20 bg-black">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="font-aston text-white text-4xl sm:text-5xl leading-tight">
          El impulso estratégico<br />
          que tu{' '}
          <span style={{ color: '#e5ad43' }}>talento interno</span> necesita.
        </h2>
        <p className="mt-4 text-white/60 font-montserrat font-semibold text-sm tracking-widest uppercase">
          Servicios que ofrecemos
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Botones */}
        <div className="flex flex-col gap-3 md:w-5/12">
          {services.map((srv, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-300 font-montserrat text-sm"
              style={{
                background: active === i ? `${srv.color}20` : 'rgba(255,255,255,0.04)',
                border: active === i ? `1.5px solid ${srv.color}` : '0.5px solid rgba(255,255,255,0.1)',
                color: active === i ? '#fff' : 'rgba(255,255,255,0.5)',
                fontWeight: active === i ? 600 : 400,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${srv.color}22`, color: srv.color }}
              >
                {srv.icon}
              </div>
              {srv.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="flex-1 rounded-2xl p-7 flex flex-col gap-5"
          style={{ background: `${s.color}40`, border: '0.5px solid rgba(255,255,255,0.08)' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-aston text-white text-2xl sm:text-3xl font-bold">
                {s.title}
              </h3>
              <p className="font-montserrat text-white/60 text-sm leading-relaxed">
                {s.desc}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {s.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-2 rounded-xl p-3 text-xs font-montserrat"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '0.5px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: s.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;