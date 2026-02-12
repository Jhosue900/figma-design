function NetworkDiagram() {
  return (
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
  );
}

export default NetworkDiagram;