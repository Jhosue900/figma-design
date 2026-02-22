import bgImage from '../../images/About/LOGOSECCION2.png'

function SectionOne() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat mb-20"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        height: '90vh'
      }}
    >
      <div className="absolute top-[70%] left-0 right-0 px-4 sm:px-8 text-center">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="font-aston text-[44px] sm:text-[68px] lg:text-[95px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6">
            Construyendo el futuro de la innovación digital, juntos.
          </h1>
          <p className="font-montserrat text-white/80 text-[16px] sm:text-[23px] lg:text-[25px] leading-relaxed max-w-3xl mx-auto">
            Tenemos la misión de hacer que el desarrollo de marketing sea más profesional, escalable y accesible para todos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;