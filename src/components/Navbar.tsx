import LogoWeProm from '../images/LOGOLISOBLANCO.png';

function Navbar() {
  return (
    <header className="relative w-full flex justify-center pt-8 overflow-visible z-50">
      {/* --- GRUPO DE EFECTO LUZ (Polígonos del Figma) --- */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none overflow-hidden h-[600px] -z-10">
        {/* Polygon 70 (Base ancha) */}
        <div 
          className="absolute opacity-100 mix-blend-plus-lighter"
          style={{
            width: '935px', height: '795px', top: '-572px', left: '253px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(124px)'
          }}
        />
        {/* Polygon 69 */}
        <div 
          className="absolute opacity-100 mix-blend-plus-lighter"
          style={{
            width: '625px', height: '795px', top: '-572px', left: '408px',
            background: 'linear-gradient(180.76deg, #FFFFFF 0.66%, rgba(255, 255, 255, 0) 79.63%)',
            filter: 'blur(124px)'
          }}
        />
        {/* Polygon 68 (Luz central intensa) */}
        <div 
          className="absolute opacity-100 mix-blend-plus-lighter"
          style={{
            width: '393px', height: '795px', top: '-572px', left: '524px',
            background: 'linear-gradient(180deg, #FFFFFF -4.46%, rgba(255, 255, 255, 0.45) 32.54%, rgba(108, 82, 255, 0) 99.95%)',
            filter: 'blur(88px)'
          }}
        />
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav 
        className="flex items-center justify-between bg-[#FFFFFF1A] border border-[#99A0AE1A] backdrop-blur-[56px] rounded-[16px] px-8"
        style={{ width: '962px', height: '56px' }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoWeProm} alt="WeProm Logo" className="h-10 w-auto" />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-[40px]">
          {['Inicio', 'Nosotros', 'Servicios', 'Blog'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="font-montserrat text-[14px] font-medium leading-[24px] tracking-[-0.02em] text-[#CACFD8] hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Call to Action (Ajustado a estética del Figma) */}
        <button className="bg-white text-black px-5 py-1.5 rounded-lg font-montserrat font-semibold text-[13px] hover:bg-gray-200 transition-all">
          Contáctanos
        </button>
      </nav>
    </header>
  );
}

export default Navbar;