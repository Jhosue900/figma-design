import NetworkImage  from '../../images/NetworkDiagram.png'
import iconHero from '../images/icon-hero.png'

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid md:grid-cols-2 gap-4 items-center">
      <div>

        <div className="inline-flex items-center w-fit bg-[#99A0AE1A] backdrop-blur-sm rounded-lg pt-2 pr-4 pb-2 pl-2 gap-4 mb-8 border border-white/5">
          <div className="flex items-center gap-3">
            {/* Contenedor del Icono ajustado */}

              {/* Contenedor con ancho fijo para que el icon-hero no se estire */}
              <div className="flex items-center h-[24px] w-[102px]"> 
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
        
          {/* Link Button (Google) */}
          <button className="flex items-center gap-1 text-white hover:opacity-80 transition-opacity">
            <span className="font-inter text-[14px] font-medium">Google</span>
            {/* Icono Chevron Right */}
            <svg 
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

        <h1 className="font-aston text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white">
          El Poder de las Grandes Marcas
        </h1>

        <p className="font-montserrat text-soft-gray text-[25px] font-medium mb-8 leading-[1.4] max-w-xl">
          Desarrollamos estrategias de marketing online y offline para elevar tu marca, producto o servicio, ayudándote a destacar por encima de la competencia.
        </p>

        <div className="flex gap-4">
          <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-montserrat font-medium text-[16px] leading-[28px] hover:bg-gray-600 transition-colors">
            Get Started
          </button>
          <button className="btn-gradient-border text-white px-8 py-3 rounded-full font-montserrat font-medium text-[16px] leading-[28px] hover:opacity-80 transition-opacity">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <img 
          src={NetworkImage}
          alt="Network of top brands" 
          className="w-full h-auto max-w-md animate-spin-slow"
        />
      </div>
    </section>
  );
}

export default Hero;