import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import grupoLogo from '../../images/About/LOGOGWP.png';

// --- Sub-componente para la Card Interactiva ---
function InteractiveCard({ card, index }: { card: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Valores para el efecto de inclinación (Tilt)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Calcular posición para el Tilt
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
        x.set(relativeX);
        y.set(relativeY);

        // Calcular posición para el Spotlight (Glow)
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", background: card.gradient }}
            className={`group relative overflow-hidden rounded-3xl p-8 flex flex-col gap-6 min-h-[360px] bg-gradient-to-br ${card.gradient} border border-white/10 cursor-default`}
        >
            {/* Spotlight Glow Effect: Sigue al mouse */}
            <motion.div 
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(255,255,255,0.1), transparent 40%)`
                    )
                }}
            />

            <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-6 h-full">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">{card.tag}</span>
                
                <h3 className={`font-montserrat font-bold text-white leading-snug ${card.titleSize} ${card.titleStyle === 'italic' ? 'italic font-medium' : ''}`}>
                    {card.title}
                </h3>

                <p className="font-montserrat text-white/70 text-[14px] leading-relaxed mt-auto border-t border-white/10 pt-6">
                    {card.description}
                </p>
            </div>
        </motion.div>
    );
}

function GroupSection() {
    const cards = [
        {
            id: 1,
            title: '"Lograr que la gente conserve sus empleos y logre sus sueños"',
            description: 'Esto significa ayudar a los empresarios a consolidar y crecer sus negocios. ¡Y realmente nos encanta trabajar con personas que comparten esta misma filosofía!',
            gradient: 'linear-gradient(90deg, #531715 0%, #312731 35%, #202f42 70%, #12364c 100%)',
            titleSize: 'text-[17px] sm:text-[19px]',
            titleStyle: 'italic',
        },
        {
            id: 2,
            title: 'Nuestra Visión',
            description: 'Convertirnos en la agencia de marketing más confiable y rentable, donde cada empresa, grande o pequeña, tenga las herramientas para prosperar al nivel que lo desee.',
            gradient: 'linear-gradient(90deg, #12364c 0%, #104247 35%, #1c463c 70%, #264732 100%)',
            titleSize: 'text-[20px] sm:text-[22px]',
            titleStyle: 'normal',
        },
        {
            id: 3,
            title: 'Nuestra Misión',
            description: 'Crear estrategias que conecten negocio y propósito, ayudando a las empresas a crecer de forma consciente, generando estabilidad y oportunidades para que más personas puedan construir el futuro que desean.',
            gradient: 'linear-gradient(90deg, #264732 0%, #2e482d 35%, #3e4826 70%, #4b481f 100%)',
            titleSize: 'text-[20px] sm:text-[22px]',
            titleStyle: 'normal',
        },
    ];

    return (
        <section className="w-full bg-black py-18 sm:py-20 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                
                {/* Header (se mantiene tu estructura pero con entrada más suave) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-8 text-center"
                >
                    <h2 className="font-aston text-[30px] sm:text-[38px] lg:text-[50px] text-white leading-[1.05] tracking-tight mb-8 max-w-[90%]">
                        WeProm Marketing es la unidad especializada en Marketing Estratégico en <span className="text-white border-b border-white/30">Grupo WeProm</span>.
                    </h2>
                    <img src={grupoLogo} alt="Grupo WeProm" className="h-24 sm:h-32 lg:h-40 w-auto mb-6 object-contain" />
                    <p className="font-montserrat text-white/60 tracking-[0.2em] uppercase text-xs sm:text-sm">Unidad Especializada</p>
                </motion.div>

                {/* Carrusel (Sin cambios en lógica, solo visualmente integrado) */}
                <div className="relative w-full overflow-hidden mb-24 py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-black after:to-transparent">
                    <motion.div 
                        className="flex w-[200%] items-center gap-16 sm:gap-32 whitespace-nowrap"
                    >
                        {[1, 2].map((loop) => (
                            <div key={loop} className="flex items-center gap-16 sm:gap-32">
                                <span className="font-montserrat text-white text-[24px] sm:text-[32px] font-light tracking-wide opacity-40 hover:opacity-100 transition-opacity cursor-default">+keting <small className="text-[10px] block opacity-50 uppercase tracking-widest">for business</small></span>
                                <span className="font-montserrat text-white text-[24px] sm:text-[32px] font-light italic opacity-40 hover:opacity-100 transition-opacity cursor-default">Cypron <small className="text-[10px] block not-italic opacity-50 uppercase tracking-widest">Production & Media</small></span>
                                <span className="font-montserrat text-white text-[24px] sm:text-[32px] font-light tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default">XER<span className="inline-block w-4 h-4 rounded-full border border-white mx-1" />Y <small className="text-[10px] block opacity-50 uppercase tracking-widest">Investigación</small></span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-aston text-[24px] sm:text-[48px] lg:text-[70px] text-white leading-[1.0] tracking-tight mb-16 text-center max-w-full"
                >
                    Nuestro Principal Objetivo
                </motion.h2>

                {/* Cards con el componente interactivo */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <InteractiveCard key={card.id} card={card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GroupSection;