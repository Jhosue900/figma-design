import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search, BarChart3, Target, Users, ClipboardList,
    PieChart, TrendingUp, Globe, FileText, Lightbulb,
    Megaphone, Eye
} from 'lucide-react';
import LogoIcon from '../../../images/ISOTIPODEGRADADO.png';

/* ─── Orbital icon config ─────────────────────────────────────── */

const ORBIT_ICONS = [
    { Icon: Search,        color: '#DA3731', bg: '#DA373118' },
    { Icon: BarChart3,     color: '#1096D6', bg: '#1096D618' },
    { Icon: Target,        color: '#F7B033', bg: '#F7B03318' },
    { Icon: Users,         color: '#9EB35D', bg: '#9EB35D18' },
    { Icon: ClipboardList, color: '#A84E59', bg: '#A84E5918' },
    { Icon: PieChart,      color: '#56759C', bg: '#56759C18' },
    { Icon: TrendingUp,    color: '#3883B5', bg: '#3883B518' },
    { Icon: Globe,         color: '#069BDE', bg: '#069BDE18' },
    { Icon: FileText,      color: '#E9B039', bg: '#E9B03918' },
    { Icon: Lightbulb,     color: '#80b67d', bg: '#80b67d18' },
    { Icon: Megaphone,     color: '#c5362e', bg: '#c5362e18' },
    { Icon: Eye,           color: '#599ddf', bg: '#599ddf18' },
];

/* ─── Orbital ring definitions ────────────────────────────────── */

const RINGS = [
    { radius: 130, count: 4, speed: 18, offset: 0 },
    { radius: 210, count: 8, speed: -28, offset: 15 },
];

/* ─── Component ───────────────────────────────────────────────── */

export default function HeroMR() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(480);

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                setSize(Math.min(w, 520));
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const scale = size / 480;
    let iconIndex = 0;

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-24">
            
            {/* Radial glow background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(16,150,214,0.08) 0%, rgba(218,55,49,0.04) 40%, transparent 70%)',
                }}
            />

            {/* Orbital system */}
            <div
                ref={containerRef}
                className="relative flex items-center justify-center mb-12 sm:mb-16"
                style={{ width: size, height: size }}
            >
                {/* Orbit rings (visual) */}
                {RINGS.map((ring, ri) => (
                    <div
                        key={`ring-${ri}`}
                        className="absolute rounded-full border"
                        style={{
                            width: ring.radius * 2 * scale,
                            height: ring.radius * 2 * scale,
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            borderColor: 'rgba(255,255,255,0.06)',
                        }}
                    />
                ))}

                {/* Orbiting icons */}
                {RINGS.map((ring, ri) => {
                    const icons = [];
                    for (let ni = 0; ni < ring.count; ni++) {
                        const idx = iconIndex % ORBIT_ICONS.length;
                        iconIndex++;
                        const { Icon, color, bg } = ORBIT_ICONS[idx];
                        const startAngle = (360 / ring.count) * ni + ring.offset;
                        const chipSize = ri === 0 ? 48 * scale : 44 * scale;

                        icons.push(
                            <div
                                key={`icon-${ri}-${ni}`}
                                className="absolute"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    width: 0,
                                    height: 0,
                                    animation: `orbit-spin-${ri} ${Math.abs(ring.speed)}s linear infinite ${ring.speed < 0 ? 'reverse' : 'normal'}`,
                                    transformOrigin: '0 0',
                                }}
                            >
                                <div
                                    className="flex items-center justify-center rounded-full border shadow-lg transition-transform duration-300 hover:scale-125"
                                    style={{
                                        width: chipSize,
                                        height: chipSize,
                                        borderColor: `${color}40`,
                                        backgroundColor: bg,
                                        boxShadow: `0 0 20px ${color}15`,
                                        position: 'absolute',
                                        left: Math.cos((startAngle * Math.PI) / 180) * ring.radius * scale - chipSize / 2,
                                        top: Math.sin((startAngle * Math.PI) / 180) * ring.radius * scale - chipSize / 2,
                                        animation: `counter-spin-${ri} ${Math.abs(ring.speed)}s linear infinite ${ring.speed < 0 ? 'reverse' : 'normal'}`,
                                    }}
                                >
                                    <Icon size={chipSize * 0.45} color={color} strokeWidth={1.8} />
                                </div>
                            </div>
                        );
                    }
                    return icons;
                })}

                {/* Central logo */}
                <div
                    className="absolute rounded-full flex items-center justify-center z-10"
                    style={{
                        width: 100 * scale,
                        height: 100 * scale,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, #1a1a1a 55%, #000)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 0 50px rgba(255,255,255,0.08), 0 0 100px rgba(16,150,214,0.06)',
                    }}
                >
                    <img src={LogoIcon} alt="Weprom" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                </div>
            </div>

            {/* Title & Subtitle */}
            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h1 className="font-aston text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight mb-6">
                    La Mejor Agencia de Investigación de Mercados
                </h1>
                <p className="font-montserrat text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Somos la agencia de investigación de mercados en México más eficiente y ejecutamos objetivos de investigación profesionales, como encuestas y análisis de datos.
                </p>
            </motion.div>

            {/* CSS keyframes for orbit animations */}
            <style>{`
                @keyframes orbit-spin-0 {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes orbit-spin-1 {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes counter-spin-0 {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }
                @keyframes counter-spin-1 {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }
            `}</style>
        </section>
    );
}
