function ProjectResults() {
  const cards = [
    { gradient: 'from-orange-900/40 to-gray-900', border: 'border-orange-800/30' },
    { gradient: 'from-orange-900/40 to-gray-900', border: 'border-orange-800/30' },
    { gradient: 'from-red-900/40 to-gray-900', border: 'border-red-800/30' },
    { gradient: 'from-blue-900/40 to-gray-900', border: 'border-blue-800/30' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center mb-3">
        Tarjetos de datos y resultados del proyecto de marketing
      </h2>
      <p className="text-center text-gray-400 text-sm mb-12 max-w-2xl mx-auto">
        Estas tarjetas brinda una vista clara y organizada de nuestros resultados clave y datos del proyecto, lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.gradient} p-6 rounded-xl border ${card.border} h-40`}
          ></div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-xl p-8 mt-6 flex items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">+180,000</h3>
          <p className="text-gray-400 text-sm">USUARIOS</p>
        </div>
        <div className="w-32 h-32 bg-gray-700 rounded-lg"></div>
        <div className="flex-1 text-right">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">INTERACCIONES</p>
          <p className="text-xl font-bold">+400%</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectResults;