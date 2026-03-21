import React, { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Orbe Rojo - Arriba Izquierda */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-agency-red/20 rounded-full blur-[120px] animate-blob"
      />
      
      {/* Orbe Azul - Derecha Centro */}
      <div 
        className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-agency-blue/15 rounded-full blur-[130px] animate-blob animation-delay-2000"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Orbe Verde - Abajo Izquierda */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] bg-agency-green/15 rounded-full blur-[120px] animate-blob animation-delay-4000"
        style={{ animationDelay: '4s' }}
      />

      {/* Orbe Amarillo - Interactivo con Mouse */}
      <div 
        className="absolute w-[400px] h-[400px] bg-agency-yellow/10 rounded-full blur-[100px] pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      />

    </div>
  );
};

export default InteractiveBackground;