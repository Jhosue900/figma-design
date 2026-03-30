import { useState } from 'react'; // 1. IMPORTANTE: Añade el import de useState
import { motion } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import SectionOne from '../components/About/sectionOne';
import SectionTwo from '../components/About/sectionTwoWhoWeAre';
import CallToAction from '../components/Home/callToAction';
import AboutBackedBy from '../components/About/aboutBackedBy';
import TeamSection from '../components/About/team';
import GroupSection from '../components/About/groupSection';
import WorldPresence from '../components/About/worldPresence';

// Los componentes auxiliares se quedan fuera de la función principal
const PressLogos = () => (
  <div className="w-full bg-black py-10 border-y border-white/5">
    <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      <span className="font-montserrat text-xs tracking-[0.3em] uppercase w-full text-center mb-4 block">Apariciones en prensa y medios</span>
      <span className="text-xl font-bold">REVISTA BUSINESS</span>
      <span className="text-xl font-serif italic">The Daily Press</span>
      <span className="text-xl font-sans font-black tracking-tighter">MARKETING TODAY</span>
      <span className="text-xl font-mono">Global News</span>
    </div>
  </div>
);

function About() {
  // 2. EL ESTADO DEBE IR AQUÍ (Dentro de la función)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionOne />
        <PressLogos />
        <SectionTwo />
        <WorldPresence />
        <GroupSection />
        <TeamSection />
        <AboutBackedBy />

        {/* 3. OPCIONAL: Puedes quitar CallToAction si la nueva sección de sedes ya cumple esa función, o dejarlos ambos */}
        <CallToAction />

        {/* SECCIÓN DE SEDES + BOTÓN MODAL */}
        <section className="w-full bg-black py-14 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            
        
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-12 py-5 bg-black text-white font-montserrat font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 border border-white/10 shadow-2xl"
            >
              {/* Gradiente animado de fondo (Rojo, Azul, Verde, Amarillo con tonos premium) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(45deg,#ff4d4d,#4d79ff,#4dff88,#fffa4d)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite]" />
              
              {/* Overlay oscuro para mantener la legibilidad y el toque elegante */}
              <div className="absolute inset-[2px] bg-white rounded-full z-0 group-hover:bg-black/80 transition-colors duration-500" />
            
              <span className="relative z-10 tracking-[0.2em] text-black group-hover:text-white transition-colors duration-500">
                CONTÁCTANOS AHORA
              </span>
            </button>


          </div>
        </section>
        
      </motion.main>

      {/* 4. MODAL FUERA DE <main> para evitar problemas de posicionamiento (Z-INDEX) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-lg relative"
          >

            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 text-white/40 hover:text-white text-2xl"
            >
              &times;
            </button>

            <h2 className="font-aston text-3xl text-white mb-2">Hablemos</h2>
            <p className="font-montserrat text-white/50 text-sm mb-6">Cuéntanos sobre tu proyecto internacional.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nombre" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all font-montserrat text-sm text-white" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all font-montserrat text-sm text-white" />
              <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 transition-all font-montserrat text-sm text-white"></textarea>
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl font-montserrat text-sm hover:bg-gray-200 transition-colors">ENVIAR MENSAJE</button>
            </form>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default About;