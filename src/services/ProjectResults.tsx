import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { TrendingUp, Search } from 'lucide-react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Array de datos completo (SEO Friendly)
const PROJECTS = [
  {
    id: 1,
    name: "Senties",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_Senties.png",
    traffic: "+50,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.3)"
  },
  {
    id: 2,
    name: "Fortuna Cerveza Artesanal",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_Fortuna.png",
    traffic: "+38,000",
    accounts: "+180%",
    conversations: "+200%",
    interactions: "+220%",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.3)"
  },
  {
    id: 3,
    name: "CAB",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_cab.png",
    traffic: "+45,000",
    accounts: "+120%",
    conversations: "+205%",
    interactions: "+110%",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 4,
    name: "K MAYORK",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_-k.png",
    traffic: "+180,000",
    accounts: "+350%",
    conversations: "+270%",
    interactions: "+400%",
    color: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.3)"
  },
  {
    id: 5,
    name: "Sistemi-k",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_sistemik.png",
    traffic: "+62,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.3)"
  },
  {
    id: 6,
    name: "Alteso Energy",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_alteso.png",
    traffic: "+70,000",
    accounts: "+380%",
    conversations: "+320%",
    interactions: "+740%",
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.3)"
  },
  {
    id: 7,
    name: "Deyun",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_dayun.png",
    traffic: "+38,000",
    accounts: "+240%",
    conversations: "+100%",
    interactions: "+220%",
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 8,
    name: "Vagual Real Estate",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_vagual.png",
    traffic: "+62,000",
    accounts: "+315%",
    conversations: "+300%",
    interactions: "+360%",
    color: "#6366f1",
    glow: "rgba(99, 102, 241, 0.3)"
  }
];

// Sub-componente para las cajitas de estadísticas
const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex-1 min-w-[130px] transition-colors group-hover:border-white/20">
    <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mb-2 group-hover:text-zinc-300">{label}</p>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-light tracking-tight text-white">{value}</span>
      <TrendingUp className="w-5 h-5 text-green-400" />
    </div>
  </div>
);

function ProjectResults() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-14 sm:py-20 relative overflow-hidden">
      
      {/* Orbes Decorativos (Blobs) */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '-5s' }} />

      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-aston text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          Casos de Éxito
        </h2>
        <p className="font-montserrat font-light text-zinc-300 text-base md:text-xl">
          Nuestra tarjeta de presentación, es el resultado de nuestros clientes
        </p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="projects-swiper !pb-16 pt-[1.6rem]"
      >
        {PROJECTS.map((project) => (
          <SwiperSlide key={project.id} className="max-w-[850px] w-[90%] opacity-30 transition-opacity duration-500 [&.swiper-slide-active]:opacity-100">

            <div 
              className="glass-card group relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 flex flex-col md:row transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07]"
              style={{ 
                //@ts-ignore
                '--brand-color': project.color,
                '--brand-glow': project.glow,
                // Esta línea es la que hace la magia del brillo exterior:
                boxShadow: `0 0 0px transparent`,
              }}
              // Usamos onMouseEnter/Leave para manejar el brillo dinámicamente si Tailwind se resiste
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${project.glow}`;
                e.currentTarget.style.borderColor = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0px transparent`;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >

              {/* Brillo dinámico en hover */}
              <div 
                className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: project.color }}
              />
              
              <div className="flex flex-col md:flex-row w-full z-10">
                {/* Info Principal */}
                <div className="w-full md:w-3/5 md:pr-8 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
                  <div className="mb-6 h-16 md:h-20 flex items-center justify-start">
                    <img src={project.logo} alt={project.name} className="h-full object-contain max-w-[220px]" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-zinc-400">Tráfico</p>
                    <div className="flex flex-col items-start">
                      <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none transition-transform group-hover:scale-105 origin-left" style={{ color: project.color }}>
                        {project.traffic}
                      </h3>
                      <p className="text-lg font-bold tracking-[0.2em] uppercase mt-1 text-white">Usuarios</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <StatBox label="Cuentas Alcanzadas" value={project.accounts} />
                    <StatBox label="Conversaciones" value={project.conversations} />
                  </div>
                </div>

                {/* Info Secundaria */}
                <div className="w-full md:w-2/5 md:pl-8 pt-6 md:pt-0 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center items-center text-center pb-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-zinc-400 group-hover:text-white transition-colors">Interacciones</p>
                    <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl transition-transform group-hover:scale-110">
                      {project.interactions}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 flex-1">
                      <span className="text-white/60 text-[10px] font-bold">http://www.</span>
                      <div className="ml-auto bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                        <Search className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <img src="https://pngimg.com/d/meta_PNG7.png" alt="Meta" className="h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectResults;