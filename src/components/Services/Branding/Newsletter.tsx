import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    // Aquí iría tu lógica de conexión con Mailchimp o backend
  };

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto Izquierdo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-white leading-tight">
            ¡Eso no <br />
            <span className="font-light italic text-white/90">es Todo!</span>
          </h2>
          <p className="max-w-md text-white text-3xl font-montserrat leading-snug font-light">
            ¿Quieres conocer más sobre los temas más relevantes de Marketing y Publicidad?
          </p>
        </motion.div>

        {/* Tarjeta de Suscripción (Derecha) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="relative p-10 md:p-14 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden group">
            
            {/* Efecto de luz ambiental en la esquina */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700" />
            
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-10 text-center md:text-left">
              Suscríbete a <br /> nuestro news letter
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white font-montserrat outline-none focus:border-white transition-colors peer"
                />
                {/* Línea de acento animada al enfocar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 peer-focus:w-full" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-4 self-center md:self-end px-12 py-3 rounded-full border border-white/20 bg-white/5 text-white font-montserrat text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3 group/btn"
              >
                Subscribe
                <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;