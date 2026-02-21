import { useState, useEffect, useRef } from 'react';
import LogoWeProm from '../../images/LOGOLISOBLANCO.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Servicios", path: "/servicios" },
    { label: "Blog", path: "/blog" },
  ];

  // Cerrar al click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className="relative w-full flex justify-center pt-6 sm:pt-8 z-50 px-4">
        {/* Efecto de luz */}
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none overflow-hidden h-[600px] -z-10">
          <div className="absolute opacity-100 mix-blend-plus-lighter" style={{ width: 'min(935px, 90vw)', height: '795px', top: '-572px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)', filter: 'blur(124px)' }} />
          <div className="absolute opacity-100 mix-blend-plus-lighter" style={{ width: 'min(625px, 70vw)', height: '795px', top: '-572px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(180.76deg, #FFFFFF 0.66%, rgba(255,255,255,0) 79.63%)', filter: 'blur(124px)' }} />
          <div className="absolute opacity-100 mix-blend-plus-lighter" style={{ width: 'min(393px, 50vw)', height: '795px', top: '-572px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(180deg, #FFFFFF -4.46%, rgba(255,255,255,0.45) 32.54%, rgba(108,82,255,0) 99.95%)', filter: 'blur(88px)' }} />
        </div>

        <div ref={menuRef} className="w-full max-w-[962px]">
          {/* Barra principal */}
          <nav className="flex items-center justify-between bg-[#FFFFFF1A] border border-[#99A0AE1A] backdrop-blur-[56px] rounded-[16px] px-5 sm:px-8 h-14">
            
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={LogoWeProm} alt="WeProm Logo" className="h-8 sm:h-10 w-auto" />
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map(({ label, path }) => (
                <Link key={label} to={path} className="font-montserrat text-[14px] font-medium leading-[24px] tracking-[-0.02em] text-[#CACFD8] hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA desktop */}
            <button className="hidden md:block bg-white text-black px-5 py-1.5 rounded-lg font-montserrat font-semibold text-[13px] hover:bg-gray-200 transition-all flex-shrink-0">
              Contáctanos
            </button>

            {/* Botón hamburguesa — mobile */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen
                ? <X size={22} strokeWidth={2} />
                : <Menu size={22} strokeWidth={2} />
              }
            </button>
          </nav>

          {/* Menú desplegable móvil con transición suave */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="bg-[#0d0d0d]/95 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-2 flex flex-col">
              {navLinks.map(({ label, path }, i) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`font-montserrat text-[15px] font-medium text-[#CACFD8] hover:text-white transition-colors py-4 ${
                    i < navLinks.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="my-4 bg-white text-black px-5 py-2.5 rounded-xl font-montserrat font-semibold text-[14px] hover:bg-gray-200 transition-all w-full"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay oscuro al abrir el menú */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;