import { useNavigate } from 'react-router-dom';

const STEPS = [
  {
    title: 'Conceptualización',
    desc: 'Análisis de marca y objetivos, traduciéndolo en una idea creativa clara.',
    color: '#c5362e',
  },
  {
    title: 'Planeación',
    desc: 'Desarrollo de guión, herramientas y logística integral.',
    color: '#599ddf',
  },
  {
    title: 'Producción',
    desc: 'Grabación y dirección creativa-técnica en locación.',
    color: '#80b67d',
  },
  {
    title: 'Postproducción y Entrega',
    desc: 'Edición, diseño sonoro e integración gráfica para generar impacto real.',
    color: '#e6af41',
  },
];

const NuestroProceso = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-8 font-montserrat text-white">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col gap-0 mb-14">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-8 py-10 border-b border-white/5 group"
            >
              {/* Number */}
              <span
                className="text-6xl font-black opacity-10 leading-none flex-shrink-0 w-16 text-right select-none group-hover:opacity-20 transition-opacity duration-300"
                style={{ color: step.color }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3
                  className="font-aston text-2xl md:text-3xl text-white mb-2 group-hover:opacity-90 transition-colors duration-300"
                >
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-base font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Color bar */}
              <div
                className="w-1 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                style={{ backgroundColor: step.color }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-4 font-montserrat font-semibold text-sm tracking-[0.2em] uppercase rounded-full border border-white/15 text-white hover:border-white/40 hover:scale-105 transition-all duration-300"
          >
            Cotizar Producción
          </button>
        </div>

      </div>
    </section>
  );
};

export default NuestroProceso;
