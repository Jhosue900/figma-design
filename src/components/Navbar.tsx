import LogoWeProm from '../images/LOGOLISOBLANCO.png';

function Navbar() {
  return (
    <div className="relative px-8 py-6 overflow-visible">
      <div className="relative max-w-6xl mx-auto">
        {/* Luz blanca INTENSA - usando box-shadow en lugar de blur */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] -z-10 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>
        
        {/* Navbar */}
        <nav className="relative flex items-center justify-between px-10 py-4 backdrop-blur-sm border border-gray-700/40 rounded-2xl shadow-2xl z-10 bg-gradient-to-b from-black/30 to-black/50">
          <div className="flex items-center gap-3">
            <img
              src={LogoWeProm}
              alt="WeProm Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-gray-300 hover:text-white transition text-sm font-medium">
              Inicio
            </a>
            <a href="#nosotros" className="text-gray-300 hover:text-white transition text-sm font-medium">
              Nosotros
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-white transition text-sm font-medium">
              Servicios
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white transition text-sm font-medium">
              Blog
            </a>
          </div>

          <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-100 transition shadow-md">
            Contáctanos
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;