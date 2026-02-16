import logoImage from '../../images/LOGOLISOBLANCO.png';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Grid sutil de fondo */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo principal */}
        <div className="relative">
          <div className="w-64 h-64 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="weprom marketing" 
              className="w-full h-full object-contain opacity-0 animate-fade-in-logo"
            />
          </div>

          {/* Líneas decorativas a los lados */}
          <div className="absolute top-1/2 -left-32 w-24 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>
          <div className="absolute top-1/2 -right-32 w-24 h-[1px] bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Contenedor de texto y barra */}
        <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-in-text">
          {/* Texto corporativo */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-aston text-white text-3xl font-normal tracking-tight">
              weprom
            </h2>
            <p className="font-montserrat text-white/60 text-sm font-light tracking-[0.3em] uppercase">
              Marketing
            </p>
          </div>

          {/* Barra de carga profesional */}
          <div className="flex flex-col items-center gap-3 w-80">
             <div className="w-full h-[4px] bg-white/10 rounded-full overflow-hidden">
              <div className="h-full animate-loading-bar rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #EF4444 0%, #3B82F6 33%, #10B981 66%, #F59E0B 100%)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 20px rgba(16, 185, 129, 0.3)'
                }}
              ></div>
            </div>
            
            {/* Texto de estado */}
            <p className="font-montserrat text-white/40 text-xs font-light tracking-wider uppercase">
              Preparando experiencia
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-logo {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-text {
          0%, 40% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-fade-in-logo {
          animation: fade-in-logo 1s ease-out forwards;
        }

        .animate-fade-in-text {
          animation: fade-in-text 1.5s ease-out forwards;
        }

        .animate-loading-bar {
          animation: loading-bar 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}