import { useNavigate } from 'react-router-dom';

const STEPS = [
  { id: 1, title: 'Diagnóstico', desc: 'Identificamos tus objetivos', color: '#c5362e' },
  { id: 2, title: 'Propuesta de Trabajo', desc: 'Definimos las herramientas necesarias', color: '#599ddf' },
  { id: 3, title: 'Ejecución', desc: 'Desarrollamos la estrategia y lanzamos', color: '#80b67d' },
  { id: 4, title: 'Optimización', desc: 'Medimos resultados y escalamos', color: '#e6af41' },
];

export default function WePromMethodology() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 px-4 sm:px-8 font-montserrat">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-aston text-4xl md:text-5xl lg:text-6xl text-white text-center mb-16 leading-tight">
          Proyectos a la medida<br />de tus objetivos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors duration-300"
            >
              <span
                className="text-5xl font-black opacity-10 leading-none select-none"
                style={{ color: step.color }}
              >
                {String(step.id).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-aston text-xl text-white mb-1">{step.title}</h3>
                <p className="text-sm text-zinc-400 font-light leading-snug">{step.desc}</p>
              </div>
              <div className="h-0.5 w-10 rounded-full mt-auto" style={{ backgroundColor: step.color }} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/contact')}
            className="group relative px-10 py-4 font-montserrat font-semibold text-sm tracking-[0.2em] uppercase rounded-full border border-white/15 text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/40"
          >
            <span className="relative z-10">Iniciar Proceso</span>
          </button>
        </div>

      </div>
    </section>
  );
}
