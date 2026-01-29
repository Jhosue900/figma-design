function BackedBy() {
  const brands = [
    { name: 'INTERCERAMIC', className: 'text-sm font-light tracking-widest' },
    { name: 'MINISTERIAL', className: 'text-sm font-light' },
    { name: "Driscoll's", className: 'text-sm italic font-light' },
    { name: 'SWISSJUST', className: 'text-sm font-light' },
    { name: 'KIA', className: 'text-sm font-bold' },
    { name: 'IKENU', className: 'text-sm font-bold' }
  ];

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-gray-500 text-sm mb-8">Backed by</p>
        <div className="flex flex-wrap items-center justify-center gap-16 opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className={brand.className}>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BackedBy;