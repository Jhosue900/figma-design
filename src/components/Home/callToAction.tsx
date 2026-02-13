import { useState, FormEvent } from 'react';
import logoImage from '../../images/ISOTIPE.png';

function CallToAction() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Aquí puedes agregar la lógica para enviar el email
  };

  return (
    <section className="w-full bg-black py-20 px-8 flex flex-col items-center justify-center min-h-[400px]">
      
      {/* --- LOGO CON LÁMPARA --- */}
      <div className=" relative">
        {/* Efecto de luz/spotlight */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40  rounded-full blur-3xl" />
      
        <img 
          src={logoImage} 
          alt="Logo" 
          className="w-56 h-56 object-contain relative z-10"
        />
      </div>

      {/* --- TÍTULO --- */}
      <h2 
        className="font-aston text-white text-center mb-4 antialiased max-w-[800px]"
        style={{ fontSize: '48px', fontWeight: 400, lineHeight: '120%' }}
      >
        Construyamos algo increíble hoy
      </h2>

      {/* --- SUBTÍTULO --- */}
      <p 
        className="font-montserrat text-white/80 text-center mb-8 antialiased max-w-[600px]"
        style={{ fontSize: '16px', lineHeight: '150%', letterSpacing: '0.01em' }}
      >
        ¿Quieres aprender más sobre los temas más relevantes en Marketing y Publicidad?
      </p>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="flex gap-4 items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce correo electrónico"
          className=" btn-gradient-border text-white px-8 py-3 rounded-full font-montserrat font-medium text-[16px] leading-[28px] hover:opacity-80 transition-opacity px-6 py-3 rounded-full bg-transparent border border-white/30 text-white placeholder-white/50 font-montserrat text-sm focus:outline-none focus:border-white/60 transition-all duration-300 w-[320px]"
          required
        />
        <button
          type="submit"
          className=" bg-gray-700 text-white px-8 py-3 rounded-full font-montserrat font-medium text-[16px] leading-[28px] hover:bg-gray-600 transition-colors px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-montserrat text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          Suscríbirme
        </button>
      </form>

    </section>
  );
}

export default CallToAction;