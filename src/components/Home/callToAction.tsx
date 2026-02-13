import { useState, FormEvent } from 'react';
import logoImage from '../../images/ISOTIPE.png';

function CallToAction() {
  const [email, setEmail] = useState('');
  const [isOn, setIsOn] = useState(true); // Estado de la lámpara

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className={`w-full py-20 px-8 flex flex-col items-center justify-center min-h-[400px] transition-colors duration-700 ${isOn ? 'bg-black' : 'bg-[#050505]'}`}>
      
      {/* --- CONTENEDOR LÁMPARA INTERACTIVA --- */}
      <div 
        className="relative mb-10 cursor-pointer group"
        onClick={() => setIsOn(!isOn)}
        title={isOn ? "Apagar luz" : "Encender luz"}
      >
        {/* Cable de la lámpara (opcional, le da realismo) */}
        <div className={`absolute -top-20 left-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-white/20 -translate-x-1/2 transition-opacity duration-500 ${isOn ? 'opacity-100' : 'opacity-20'}`} />

        {/* Efecto de luz (Spotlight) */}
        {isOn && (
          <div className="absolute -top-10 left-1/2 w-64 h-64 bg-white/20 rounded-full blur-[80px] animate-light-pulse pointer-events-none" />
        )}
      
        {/* El Logo con animación de balanceo y brillo */}
        <img 
          src={logoImage} 
          alt="Logo" 
          className={`w-[11rem] h-56 object-contain relative z-10 transition-all duration-500 animate-lamp-swing origin-top rounded-full
            ${isOn 
              ? 'brightness-125 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]' 
              : 'brightness-[0.2] grayscale'
            }
            group-hover:scale-105
          `}
        />

        {/* Pequeño interruptor visual o texto de ayuda */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap">
          Click para {isOn ? 'Apagar' : 'Encender'}
        </div>
      </div>

      {/* --- TEXTO CON TRANSICIÓN --- */}
      <h2 
        className={`font-aston text-center mb-4 antialiased max-w-[800px] transition-all duration-500 ${isOn ? 'text-white' : 'text-white/20'}`}
        style={{ fontSize: '48px', fontWeight: 400, lineHeight: '120%' }}
      >
        Construyamos algo increíble hoy
      </h2>

      <p 
        className={`font-montserrat text-center mb-8 antialiased max-w-[600px] transition-all duration-500 ${isOn ? 'text-white/80' : 'text-white/10'}`}
        style={{ fontSize: '16px', lineHeight: '150%', letterSpacing: '0.01em' }}
      >
        ¿Quieres aprender más sobre los temas más relevantes en Marketing y Publicidad?
      </p>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="flex gap-4 items-center relative z-20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce correo electrónico"
          className="bg-transparent border border-white/30 text-white placeholder-white/50 font-montserrat text-sm focus:outline-none focus:border-white/60 transition-all duration-300 w-[320px] px-6 py-3 rounded-full"
          required
        />
        <button
          type="submit"
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-montserrat text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Suscribirme
        </button>
      </form>

    </section>
  );
}

export default CallToAction;