import NetworkImage  from '../../images/NetworkDiagram.png'
import iconHero from '../../images/icon-hero.png'

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-[9rem] pb-16 sm:pb-20 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center">
      <div>

        

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