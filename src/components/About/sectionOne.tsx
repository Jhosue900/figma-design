import bgImage from '../../images/About/LOGOSECCION2.png'

function SectionOne() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        height: '100vh'
      }}
    >
      <div 
        className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 text-center"
        style={{ transform: 'translateY(0%)' }}
      >
        <h1 className="font-aston text-[44px] sm:text-[68px] lg:text-[95px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6">
          Construyendo el futuro de la innovación digital, juntos.
        </h1>
        <p className="font-montserrat text-white/80 text-[16px] sm:text-[23px] lg:text-[25px] leading-relaxed max-w-3xl mx-auto pb-8">
          Tenemos la misión de hacer que el desarrollo de marketing sea más profesional, escalable y accesible para todos.
        </p>
      </div>
    </section>
  );
}

export default SectionOne;
