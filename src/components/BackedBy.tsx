function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', className: 'text-xl font-light tracking-widest' },
    { name: 'MINISTERIAL', className: 'text-xl font-light' },
    { name: "Driscoll's", className: 'text-xl italic font-light' },
    { name: 'SWISSJUST', className: 'text-xl font-light' },
    { name: 'KIA', className: 'text-xl font-bold' },
    { name: 'IKENU', className: 'text-xl font-bold' },
    { name: 'BRAND 7', className: 'text-xl font-medium' } // Agregué el 7mo según Figma
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-transparent">
      
      {/* --- ECLIPSES LATERALES (Sombreado/Blur) --- */}
      {/* Eclipse 37 (Izquierda) */}
      <div 
        className="absolute pointer-events-none z-10"
        style={{
          width: '378px', height: '429px', top: '50%', left: '-255px',
          transform: 'translateY(-50%) rotate(90deg)',
          background: '#000000',
          filter: 'blur(134px)',
          opacity: 1
        }}
      />
      
      {/* Eclipse 38 (Derecha) */}
      <div 
        className="absolute pointer-events-none z-10"
        style={{
          width: '284px', height: '321px', top: '50%', right: '-140px', 
          transform: 'translateY(-50%) rotate(90deg)',
          background: '#000000',
          filter: 'blur(134px)',
          opacity: 1
        }}
      />

      {/* --- CONTENIDO --- */}
      <div className="relative w-full max-w-[1519px] mx-auto px-8 z-20">
        
        {/* Texto Backed By */}
        <p className="font-montserrat font-light text-[36px] leading-[28px] tracking-[-0.02em] text-white/80 text-center mb-12">
          Backed by
        </p>

        {/* Frame de Logos */}
        <div className="flex items-center justify-center gap-[48px] h-[80px] opacity-80">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className={`${brand.className} text-white whitespace-nowrap`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BackedBy;