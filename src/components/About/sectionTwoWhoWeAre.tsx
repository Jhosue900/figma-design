import expertosImg from '../../images/About/BLUESQUARE.png'
import especialistasImg from '../../images/About/REDSQUARE.png'
import analistasImg from '../../images/About/YELLOWSQUARE.png'

function SectionTwo() {
  return (
    <section className="w-full bg-black py-16 sm:py-24">

      {/* TÍTULO Y SUBTÍTULO */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center mb-12 sm:mb-16">
        <h1 className="font-aston text-[44px] sm:text-[68px] lg:text-[80px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6">
          ¿Quiénes somos?
        </h1>
        <p className="font-montserrat text-white/80 text-[16px] sm:text-[20px] leading-relaxed max-w-2xl mx-auto">
          Somos WeProm, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
        </p>
      </div>

      {/* GRID 3x2 */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">

        {/* FILA 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

          {/* Cuadro texto — Los Expertos */}
          <div className="bg-[#000000] border border-white/100 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[240px]">
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3">
              Los Expertos
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Somos Expertos en Estrategias de Marketing, Promoción e Imagen Pública y de Marca. Cualquier tipo de Empresa o Grupo
            </p>
          </div>

          {/* Cuadro imagen — centro */}
          <div className="rounded-2xl overflow-hidden min-h-[240px]">
            <img
              src={expertosImg}
              alt="Expertos"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuadro texto — Los Especialistas */}
          <div className="bg-[#000000] border border-white/100 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[240px]">
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3">
              Los Especialistas
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Creamos y Generamos grandes ideas para Promover Marcas, Empresas y Personas
            </p>
          </div>

        </div>

        {/* FILA 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Cuadro imagen — izquierda */}
          <div className="rounded-2xl overflow-hidden min-h-[240px]">
            <img
              src={analistasImg}
              alt="Analistas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuadro texto — Los Analistas */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[240px]">
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3">
              Los Analistas
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Somos gente joven, entusiasta y dinámica, trabajando de la mano con la experiencia de especialistas
            </p>
          </div>

          {/* Cuadro imagen — derecha */}
          <div className="rounded-2xl overflow-hidden min-h-[240px]">
            <img
              src={especialistasImg}
              alt="Especialistas"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
}

export default SectionTwo;