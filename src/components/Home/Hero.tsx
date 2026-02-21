import NetworkImage  from '../../images/NetworkDiagram.png'
import iconHero from '../../images/icon-hero.png'

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">
      <div>

        {/* Badge Interactivo */}
        <div className="group relative inline-flex items-center w-fit bg-[#99A0AE1A] backdrop-blur-sm rounded-lg pt-2 pr-4 pb-2 pl-2 gap-4 mb-4 sm:mb-6 border border-white/5 cursor-default transition-all duration-300 hover:bg-[#99A0AE2A] hover:border-white/20 hover:scale-105 animate-float overflow-hidden">
          
          {/* Capa de Brillo (Shine Effect) */}
          <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="flex items-center h-[24px] w-[102px] transition-transform duration-300 group-hover:scale-110"> 
              <img 
                src={iconHero} 
                alt="User Review Icon" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <span className="font-inter text-[14px] leading-[24px] tracking-[-0.02em] text-[#CACFD8]">
              User review based on
            </span>
          </div>
        
          <button className="relative z-10 flex items-center gap-1 text-white hover:text-blue-400 transition-colors group/btn">
            <span className="font-inter text-[14px] font-medium">Google</span>
            <svg 
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <h1 className="font-aston text-[42px] sm:text-[56px] lg:text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white">
          El Poder de las Grandes Marcas
        </h1>

        <p className="font-montserrat text-soft-gray text-[16px] sm:text-[20px] lg:text-[25px] font-medium mb-6 sm:mb-8 leading-[1.4] max-w-xl">
          Desarrollamos estrategias de marketing online y offline para elevar tu marca, producto o servicio, ayudándote a destacar por encima de la competencia.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] leading-[28px] hover:bg-gray-600 transition-colors">
            Get Started
          </button>
          <button className="btn-gradient-border text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-medium text-[14px] sm:text-[16px] leading-[28px] hover:opacity-80 transition-opacity">
            Learn More
          </button>
        </div>
      </div>

      {/* Imagen — se muestra abajo en móvil, a la derecha en desktop */}
      <div className="relative flex items-center justify-center order-first md:order-last">
        <img 
          src={NetworkImage}
          alt="Network of top brands" 
          className="w-full h-auto max-w-[280px] sm:max-w-[360px] md:max-w-md animate-spin-slow"
        />
      </div>
    </section>
  );
}

export default Hero;