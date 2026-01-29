import { Search, Megaphone, Fingerprint, BarChart3, Target, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded"></div>
          <span className="text-lg font-bold">weprom</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#inicio" className="text-gray-400 hover:text-white transition text-sm">Inicio</a>
          <a href="#nosotros" className="text-gray-400 hover:text-white transition text-sm">Nosotros</a>
          <a href="#servicios" className="text-gray-400 hover:text-white transition text-sm">Servicios</a>
          <a href="#blog" className="text-gray-400 hover:text-white transition text-sm">Blog</a>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition">
          Contactanos
        </button>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border border-black"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border border-black"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border border-black"></div>
                <div className="w-6 h-6 bg-gray-700 rounded-full border border-black flex items-center justify-center text-xs">+</div>
              </div>
              <span className="text-xs text-gray-400 ml-2">User review based on <span className="font-medium text-white">Google</span></span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Unleashing the Power of top Brands
          </h1>

          <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-md">
            We develop online and offline marketing strategies to elevate your brand, product, or service, helping you outshine the competition.
          </p>

          <div className="flex gap-4">
            <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-600 transition text-sm">
              Get Started
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-full font-medium border border-gray-600 hover:border-gray-400 transition text-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="15%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
              </radialGradient>
            </defs>

            <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

            <line x1="200" y1="20" x2="200" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="200" y1="340" x2="200" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="20" y1="200" x2="60" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="340" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

            <line x1="78" y1="78" x2="110" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="322" y1="322" x2="290" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="322" y1="78" x2="290" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="78" y1="322" x2="110" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

            <circle cx="200" cy="50" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="200" cy="50" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Img</text>

            <circle cx="350" cy="200" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="350" cy="200" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="350" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cm</text>

            <circle cx="200" cy="350" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="200" cy="350" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="200" y="355" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">+</text>

            <circle cx="50" cy="200" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="50" cy="200" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="50" y="205" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">G</text>

            <circle cx="285" cy="115" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="285" cy="115" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="285" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">S</text>

            <circle cx="315" cy="315" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="315" cy="315" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="315" y="320" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">M</text>

            <circle cx="115" cy="285" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="115" cy="285" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="115" y="290" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A</text>

            <circle cx="115" cy="115" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            <circle cx="115" cy="115" r="12" fill="rgba(100,100,100,0.5)"/>
            <text x="115" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">V</text>

            <circle cx="200" cy="200" r="24" fill="url(#centerGlow)" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="2"/>
            <circle cx="200" cy="200" r="16" fill="rgba(249, 115, 22, 0.8)"/>
            <text x="200" y="208" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Wp</text>
          </svg>
        </div>
      </section>

      <section className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Backed by</p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-60">
            <div className="text-sm font-light tracking-widest">INTERCERAMIC</div>
            <div className="text-sm font-light">MINISTERIAL</div>
            <div className="text-sm italic font-light">Driscoll's</div>
            <div className="text-sm font-light">SWISSJUST</div>
            <div className="text-sm font-bold">KIA</div>
            <div className="text-sm font-bold">IKENU</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-3">
          Digital Marketing Agency Guadalajara
        </h2>
        <p className="text-center text-gray-400 mb-16 text-sm">
          Somos WeProm, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-pink-900/30 to-gray-900/30 p-6 rounded-xl border border-gray-800/50 backdrop-blur">
            <Search className="w-8 h-8 mb-4 text-pink-400" />
            <h3 className="text-lg font-bold mb-2">Investigación de Mercados</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Tomamos decisiones con base en datos, consumidores, competencia y el entorno para identificar oportunidades y ventajas competitivas.
            </p>
          </div>

          <div className="bg-gradient-to-b from-cyan-900/30 to-gray-900/30 p-6 rounded-xl border border-gray-800/50 backdrop-blur">
            <Megaphone className="w-8 h-8 mb-4 text-cyan-400" />
            <h3 className="text-lg font-bold mb-2">Marketing digital</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Desarrollamos estrategias digitales enfocadas en resultados. Analizamos KPI's y analítica para maximizar la inversión.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-700/30 to-gray-900/30 p-6 rounded-xl border border-gray-800/50 backdrop-blur">
            <Fingerprint className="w-8 h-8 mb-4 text-gray-400" />
            <h3 className="text-lg font-bold mb-2">Professional Branding</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Construimos marcas profesionales, coherentes, memorable, definiendo posicionamiento, nivel y presencia en el mercado.
            </p>
          </div>

          <div className="bg-gradient-to-b from-amber-900/30 to-gray-900/30 p-6 rounded-xl border border-gray-800/50 backdrop-blur">
            <BarChart3 className="w-8 h-8 mb-4 text-amber-400" />
            <h3 className="text-lg font-bold mb-2">Consultoría en Marketing</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Acompañamos y asesoramos tu visión estratégica integral, diagnosticamos, optimizamos, atribuimos a tus objetivos comerciales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900/50 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">NOSOTROS SOMOS</p>
              <h2 className="text-7xl font-bold mb-6">WeProm</h2>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <Target className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-2">Empresas Desarrollo</p>
                  <p className="text-2xl font-bold text-orange-400">+500</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <TrendingUp className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-2">Crecimiento promedio nuestros clientes</p>
                  <p className="text-2xl font-bold text-orange-400">+300%</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                      <Search className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-2">Proyectos Realizados</p>
                  <p className="text-2xl font-bold text-orange-400">+1,000</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                Tus próximos aliados para posicionar tu empresa, marca o producto. Nos enfocamos en desarrollar estrategias objetivas, creativas e innovadoras para ayudar a nuestros clientes a seguir creciendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-3">
          Tarjetos de datos y resultados del proyecto de marketing
        </h2>
        <p className="text-center text-gray-400 text-sm mb-12 max-w-2xl mx-auto">
          Estas tarjetas brinda una vista clara y organizada de nuestros resultados clave y datos del proyecto, lo que ayuda a realizar un seguimiento del rendimiento y resaltar información de marketing de un vistazo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-orange-900/40 to-gray-900 p-6 rounded-xl border border-orange-800/30 h-40"></div>
          <div className="bg-gradient-to-br from-orange-900/40 to-gray-900 p-6 rounded-xl border border-orange-800/30 h-40"></div>
          <div className="bg-gradient-to-br from-red-900/40 to-gray-900 p-6 rounded-xl border border-red-800/30 h-40"></div>
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 p-6 rounded-xl border border-blue-800/30 h-40"></div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 rounded-xl p-8 mt-6 flex items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">+180,000</h3>
            <p className="text-gray-400 text-sm">USUARIOS</p>
          </div>
          <div className="w-32 h-32 bg-gray-700 rounded-lg"></div>
          <div className="flex-1 text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">INTERACCIONES</p>
            <p className="text-xl font-bold">+400%</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
