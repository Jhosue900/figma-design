import { motion } from 'framer-motion';
import expertosImg from '../../images/About/BLUESQUARE.png'
import especialistasImg from '../../images/About/REDSQUARE.png'
import analistasImg from '../../images/About/YELLOWSQUARE.png'

// Variantes para las animaciones de entrada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
};

const sentence = "¿Quiénes somos?";
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function SectionTwo() {
  return (
    <section className="w-full bg-black py-4 sm:py-8 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center mb-12 sm:mb-16">
        {/* TÍTULO CON REVELADO POR PALABRA */}
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

      {/* GRID 3x2 CON MOTION */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-8"
      >
        {/* FILA 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          
          {/* Tarjeta de Texto: Expertos */}
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

          {/* Imagen Central: Zoom sutil al hover */}
          <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden min-h-[280px] relative group">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={expertosImg}
              alt="Expertos"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Tarjeta de Texto: Especialistas */}
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
          
          {/* Imagen Analistas */}
          <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden min-h-[280px] group">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={analistasImg}
              alt="Analistas"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Tarjeta de Texto: Analistas */}
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

          {/* Imagen Especialistas */}
          <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden min-h-[280px] group">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={especialistasImg}
              alt="Especialistas"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionTwo;