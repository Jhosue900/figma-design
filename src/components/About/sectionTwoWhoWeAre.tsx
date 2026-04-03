import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const sentence = "¿Quiénes somos?";
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Tarjeta con ícono SVG interactivo
function IconCard({ color, icon }: { color: string; icon: React.ReactNode }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden min-h-[280px] flex items-center justify-center border border-white/10"
      style={{ background: `radial-gradient(ellipse at center, ${color}22 0%, #0a0a0a 70%)` }}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{ color }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

function SectionTwo() {
  return (
    <section className="w-full bg-black py-4 sm:py-8 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center mb-12 sm:mb-16">
        <motion.h1 
          className="font-aston text-[44px] sm:text-[68px] lg:text-[80px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {sentence.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-4">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-montserrat text-white/80 text-[16px] sm:text-[20px] leading-relaxed max-w-2xl mx-auto"
        >
          Somos WeProm, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8"
      >
        {/* FILA 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          
          {/* Tarjeta Expertos */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.5)" }}
            className="bg-black border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[280px] transition-colors duration-500 hover:bg-[#0a0a0a] group"
          >
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3 group-hover:text-blue-400 transition-colors">
              Los Expertos
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Somos Expertos en Estrategias de Marketing, Promoción e Imagen Pública y de Marca. Cualquier tipo de Empresa o Grupo
            </p>
          </motion.div>

          {/* Ícono Expertos — cerebro/estrategia */}
          <IconCard color="#60a5fa" icon={
            <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H7a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9.5C7.8 8.8 7 7.5 7 6a4 4 0 0 1 4-4z"/>
              <line x1="9" y1="14" x2="9" y2="14.01"/>
              <line x1="15" y1="14" x2="15" y2="14.01"/>
              <path d="M9 17.5c1 .8 2.5.8 3 0"/>
            </svg>
          }/>

          {/* Tarjeta Especialistas */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.5)" }}
            className="bg-black border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[280px] transition-colors duration-500 hover:bg-[#0a0a0a] group"
          >
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3 group-hover:text-red-400 transition-colors">
              Los Especialistas
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Creamos y Generamos grandes ideas para Promover Marcas, Empresas y Personas.
            </p>
          </motion.div>
        </div>

        {/* FILA 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Ícono Analistas — gráfica/datos */}
          <IconCard color="#facc15" icon={
            <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
              <line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          }/>

          {/* Tarjeta Analistas */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.5)" }}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[280px] transition-all group"
          >
            <h3 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] mb-3 group-hover:text-yellow-400 transition-colors">
              Los Analistas
            </h3>
            <p className="font-montserrat text-white/70 text-[14px] sm:text-[15px] leading-relaxed">
              Somos gente joven, entusiasta y dinámica, trabajando de la mano con la experiencia.
            </p>
          </motion.div>

          {/* Ícono Especialistas — megáfono/promoción */}
          <IconCard color="#f87171" icon={
            <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l19-9-9 19-2-8-8-2z"/>
            </svg>
          }/>

        </div>
      </motion.div>
    </section>
  );
}

export default SectionTwo;