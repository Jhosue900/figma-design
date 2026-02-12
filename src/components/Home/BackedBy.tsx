import interceramic from '../../images/Logo Interceramic.png';
import driscolls from '../../images/Logo Driscolls.png';
import KIA from '../../images/Logo KIA.jpg'
import kenworth from '../../images/Logo Kenworth.svg'
// Nota: Importa los demás logos siguiendo el mismo patrón cuando los tengas en la carpeta

function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', src: interceramic, alt: 'Interceramic Logo' },
    { name: 'MINISTERIAL', isText: true, className: 'text-xl font-light' },
    { name: "Driscoll's", src: driscolls, alt: "Driscoll's Logo" },
    
    { name: 'SWISSJUST', isText: true, className: 'text-xl font-light' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo'},
    { name: 'kenworth', src: kenworth, alt: 'kenworth Logo'},

  ];

  return (
    <section className="relative w-full pt-12 pb-20 overflow-hidden bg-transparent">
      
      {/* --- ECLIPSES LATERALES --- */}
      <div 
        className="absolute pointer-events-none z-10"
        style={{
          width: '378px', height: '429px', top: '50%', left: '-255px',
          transform: 'translateY(-50%) rotate(90deg)',
          background: '#000000', filter: 'blur(134px)', opacity: 1
        }}
      />
      
      <div 
        className="absolute pointer-events-none z-10"
        style={{
          width: '284px', height: '321px', top: '50%', right: '-140px', 
          transform: 'translateY(-50%) rotate(90deg)',
          background: '#000000', filter: 'blur(134px)', opacity: 1
        }}
      />

      {/* --- CONTENIDO --- */}
      <div className="relative w-full max-w-[1519px] mx-auto px-8 z-20">
        
        <p className="font-montserrat font-light text-[36px] leading-[28px] tracking-[-0.02em] text-white/80 text-center mb-12">
          Backed by
        </p>

        {/* Frame de Logos */}
        <div className="flex items-center justify-center gap-[48px] h-[80px] opacity-80">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              {brand.isText ? (
                <span className={`${brand.className} text-white whitespace-nowrap`}>
                  {brand.name}
                </span>
              ) : (
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  /* grayscale convierte a B/N, brightness ajusta si el logo es oscuro */
                  className="h-full max-h-[60px] w-auto object-contain "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BackedBy;