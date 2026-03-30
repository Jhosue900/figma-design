import { motion } from 'framer-motion';

const WorldPresence = () => {
  return (
    <section className="w-full bg-black py-24 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-aston text-[45px] sm:text-[70px] text-white leading-none mb-6"
          >
            Alcance <span className="text-white/30 italic">Global</span><br/>
            Estrategia <span className="text-white/30">Local</span>
          </motion.h2>
          <p className="font-montserrat text-white/50 text-sm sm:text-base tracking-[0.2em] uppercase">
            Conectando Europa y América Latina con visión multicultural.
          </p>
        </div>

        {/* Grid de Contenido (Bento Grid Style) */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
          {/* Bloque 1: El Mapa (Entrada desde la izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 relative h-[450px] bg-[#080808] rounded-[40px] border border-white/10 overflow-hidden group shadow-2xl"
          >
            <div 
              className="absolute inset-0 opacity-20 grayscale group-hover:scale-105 transition-transform duration-[5s] ease-out bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}
            />

            
            {/* Dots de Ubicación Estratégicos con Anillos de Pulso */}
            {/* CDMX */}
            <div className="absolute top-[52%] left-[22%]">

              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-full w-full bg-blue-500 blur-[6px]"></span>
                <span className="relative inline-flex rounded-full h-3 w-5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              </span>
              <span className="absolute top-4 left-0 font-montserrat text-[15px] text-white/40 tracking-widest uppercase">México</span>

            </div>

            {/* Madrid/Francia */}
            <div className="absolute top-[35%] left-[48%]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-full w-full bg-red-500 blur-[6px]"></span>
                <span className="relative inline-flex rounded-full h-3 w-5 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></span>
              </span>
              <span className="absolute top-4 left-0 font-montserrat text-[15px] text-white/40 tracking-widest uppercase">Europe Ops</span>
            </div>

            {/* Elemento Visual Central */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="font-aston text-white/[0.03] text-[120px] sm:text-[180px] select-none tracking-tighter">WEPROM</h3>
            </div>

          </motion.div>




          {/* Bloque 2: ADN Multi-Generacional/Cultural */}
          <div className="flex flex-col gap-6 h-full">
            {/* Bloque 2: ADN */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 bg-gradient-to-b from-[#111] to-black p-8 rounded-[40px] border border-white/5 flex flex-col justify-center"
            >
              <h4 className="font-montserrat text-white text-xs tracking-[0.3em] uppercase mb-4 opacity-50">ADN WeProm</h4>
              <p className="font-montserrat text-white/80 text-lg leading-relaxed italic">
                "Somos un equipo <span className="text-blue-400 font-medium">multi-generacional</span> y disciplinario que entiende el mercado de ambos lados del Atlántico."
              </p>
            </motion.div>

            {/* Bloque 3: Stats Rápidas */}

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-[40px] flex flex-col justify-between group hover:bg-blue-600 transition-all duration-700 cursor-pointer"
            >

              <div className="flex justify-between items-start mb-6">
                 <div className="bg-black/5 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <span className="font-montserrat font-bold text-black group-hover:text-white text-2xl">2026</span>
              </div>
              <div>
                <span className="block font-aston text-black group-hover:text-white text-4xl leading-none">Cobertura Total</span>
                <p className="mt-2 font-montserrat text-black/90 group-hover:text-white/100 text-xs uppercase tracking-widest">América & Europa</p>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WorldPresence;