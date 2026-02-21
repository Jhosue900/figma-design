import { useState, FormEvent } from 'react';
import logoImage from '../../images/ISOTIPE.png';

function CallToAction() {
  const [email, setEmail] = useState('');
  const [isOn, setIsOn] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className={`w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px] transition-colors duration-700 ${isOn ? 'bg-black' : 'bg-[#050505]'}`}>
      
      {/* Lámpara interactiva */}
      <div 
        className="relative mb-8 sm:mb-10 cursor-pointer group"
        onClick={() => setIsOn(!isOn)}
        title={isOn ? "Apagar luz" : "Encender luz"}
      >
        <div className={`absolute -top-20 left-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-white/20 -translate-x-1/2 transition-opacity duration-500 ${isOn ? 'opacity-100' : 'opacity-20'}`} />

        {isOn && (
          <div className="absolute -top-10 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-white/20 rounded-full blur-[80px] animate-light-pulse pointer-events-none" />
        )}
      
        <img 
          src={logoImage} 
          alt="Logo" 
          className={`w-32 sm:w-44 h-auto object-contain relative z-10 transition-all duration-500 animate-lamp-swing origin-top rounded-full
            ${isOn 
              ? 'brightness-125 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]' 
              : 'brightness-[0.2] grayscale'
            }
            group-hover:scale-105
          `}
        />

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap">
          Click para {isOn ? 'Apagar' : 'Encender'}
        </div>
      </div>

      {/* Texto */}
      <h2 
        className={`font-aston text-center mb-3 sm:mb-4 antialiased max-w-[800px] transition-all duration-500 ${isOn ? 'text-white' : 'text-white/20'} text-[32px] sm:text-[40px] lg:text-[48px]`}
        style={{ fontWeight: 400, lineHeight: '120%' }}
      >
        Construyamos algo increíble hoy
      </h2>

      <p 
        className={`font-montserrat text-center mb-6 sm:mb-8 antialiased max-w-[600px] transition-all duration-500 ${isOn ? 'text-white/80' : 'text-white/10'} text-[14px] sm:text-[16px]`}
        style={{ lineHeight: '150%', letterSpacing: '0.01em' }}
      >
        ¿Quieres aprender más sobre los temas más relevantes en Marketing y Publicidad?
      </p>

      {/* Formulario — vertical en móvil, horizontal en desktop */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center relative z-20 w-full max-w-[500px] sm:max-w-none sm:w-auto px-2 sm:px-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce correo electrónico"
          className="btn-gradient-border text-white rounded-full font-montserrat bg-transparent border border-white/30 placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition-all duration-300 w-full sm:w-[320px] px-6 py-3"
          required
        />
        <button
          type="submit"
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-montserrat text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Suscribirme
        </button>
      </form>

    </section>
  );
}

export default CallToAction;