// Importa tus imágenes aquí cuando las tengas, ej:
// import img1 from '../images/resultado1.png';

function ProjectResults() {
  const cards = [
    { gradient: 'from-orange-900/40 to-gray-900', border: 'border-orange-800/30' },
    { gradient: 'from-orange-900/40 to-gray-900', border: 'border-orange-800/30' },
    { gradient: 'from-red-900/40 to-gray-900', border: 'border-red-800/30' },
    { gradient: 'from-blue-900/40 to-gray-900', border: 'border-blue-800/30' }
  ];

  // Datos de las 6 imágenes basados en tu Figma
  const stackedImages = [
    { width: 451, height: 286, top: 103, left: 0, z: 10, shadow: false },     // Izquierda (más pequeña)
    { width: 533, height: 383, top: 33, left: 105, z: 20, shadow: true },     // 2da
    { width: 610, height: 410, top: 20, left: 220, z: 30, shadow: true },     // 3ra (proporcional)
    { width: 690, height: 440, top: 10, left: 340, z: 40, shadow: true },     // 4ta (proporcional)
    { width: 770, height: 480, top: 5, left: 460, z: 50, shadow: true },      // 5ta (proporcional)
    { width: 835, height: 510, top: 0, left: 506, z: 60, shadow: true },      // Derecha (más grande)
  ];

  return (
    <section className="w-full max-w-[1341px] mx-auto px-8 py-20 bg-transparent flex flex-col items-center">
      
      {/* --- TEXTOS --- */}
      <h2 
        className="font-aston text-white text-center mb-6 antialiased"
        style={{ fontSize: '70px', fontWeight: 400, lineHeight: '110%' }}
      >
        Tarjetas de datos y resultados del proyecto de marketing
      </h2>

      <p 
        className="font-montserrat font-light text-white text-center mb-4 antialiased max-w-[1208px]"
        style={{ fontSize: '36px', lineHeight: '140%', letterSpacing: '-0.02em' }}
      >
        Estas tarjetas brindan una vista clara y organizada de nuestros resultados clave y datos del proyecto, lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
      </p>
      

      {/* --- SECCIÓN DE IMÁGENES APILADAS (STACKED GROUP) --- */}
      <div 
        className="relative mt-20 mb-32"
        style={{ width: '1341px', height: '573px' }} // Layout del Group en Figma
      >
        {stackedImages.map((img, i) => (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden bg-gray-800 border border-white/10"
            style={{
              width: `${img.width}px`,
              height: `${img.height}px`,
              top: `${img.top}px`,
              left: `${img.left}px`,
              zIndex: img.z,
              boxShadow: img.shadow ? '-33px 0px 92px 0px #000000' : 'none',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Reemplazar con <img src={...} /> cuando tengas los assets */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/20 font-bold text-xl">
              Mesa de trabajo {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* --- TARJETA INFERIOR (USUARIOS) --- */}
      <div className="w-full max-w-[1208px] bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-[24px] p-8 flex items-center gap-8">
        <div className="flex-1">
          <h3 className="text-[40px] font-bold mb-2 text-white">+180,000</h3>
          <p className="text-gray-400 text-lg uppercase tracking-widest font-montserrat">USUARIOS</p>
        </div>
        <div className="w-32 h-32 bg-gray-700/50 rounded-lg backdrop-blur-md" />
        <div className="flex-1 text-right">
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-2 font-montserrat">INTERACCIONES</p>
          <p className="text-[40px] font-bold text-white">+400%</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectResults;