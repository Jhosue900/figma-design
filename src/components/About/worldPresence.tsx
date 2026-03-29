import { motion } from 'framer-motion';

const WorldPresence = () => {
  return (
    <section className="w-full bg-black py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="font-aston text-[40px] sm:text-[60px] text-white leading-none mb-6">Presencia <br/><span className="text-white/40">Sin Fronteras</span></h2>
          <p className="font-montserrat text-white/60 text-lg max-w-md">
            Desde nuestras sedes en América hasta nuestras operaciones en Europa, conectamos mercados y culturas para escalar tu negocio al siguiente nivel.
          </p>
          <div className="mt-8 flex gap-10 text-white/80 font-montserrat text-sm tracking-widest uppercase">
            <div><span className="block text-2xl font-bold text-white">12+</span> Países</div>
            <div><span className="block text-2xl font-bold text-white">2</span> Continentes</div>
            <div><span className="block text-2xl font-bold text-white">24/7</span> Cobertura</div>
          </div>
        </motion.div>
        
        {/* Aquí puedes poner un mapa estilizado o una imagen abstracta del mundo */}
        <div className="relative h-[400px] bg-[#0a0a0a] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden group shadow-2xl">
            {/* Imagen de Mapa de Puntos (Dot Map) */}
            <div 
                className="absolute inset-0 opacity-30 grayscale group-hover:scale-110 transition-transform duration-[3s] ease-out bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png'), radial-gradient(circle at center, #222 0%, transparent 70%)` }}
            ></div>
            
            {/* Pulsos de ubicación (Dots animados) */}
            <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse" />
            <div className="absolute top-[45%] left-[70%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse" />
            
            <div className="relative z-10 text-center">
                <span className="font-aston text-white/10 text-7xl sm:text-9xl tracking-tighter">COBERTURA</span>
                <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-montserrat text-[10px] tracking-[0.5em] text-white/80 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">AMÉRICA • EUROPA</span>
                </div>
            </div>
        </div>


      </div>
    </section>
  );
};

export default WorldPresence;