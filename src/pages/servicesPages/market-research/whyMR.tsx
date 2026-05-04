import { motion } from 'framer-motion';
import { Compass, Puzzle, ShieldCheck } from 'lucide-react';

/* ─── Feature cards data ──────────────────────────────────────── */

const features = [
    {
        icon: Compass,
        title: 'Decisiones',
        description:
            'Proporcionamos datos confiables para que puedas tomar decisiones estratégicas basadas en información real, no en suposiciones.',
        color: '#1096D6',
        gradient: 'from-[#1096D6]/10 to-transparent',
    },
    {
        icon: Puzzle,
        title: 'Compatibilidad',
        description:
            'Evaluamos si tu producto o servicio es compatible con las necesidades reales de tu mercado objetivo.',
        color: '#9EB35D',
        gradient: 'from-[#9EB35D]/10 to-transparent',
    },
    {
        icon: ShieldCheck,
        title: 'Validación de proyectos',
        description:
            'Validamos tu idea de negocio o nuevo lanzamiento con datos de mercado antes de invertir recursos significativos.',
        color: '#F7B033',
        gradient: 'from-[#F7B033]/10 to-transparent',
    },
];

/* ─── Animation variants ──────────────────────────────────────── */

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ─── Component ───────────────────────────────────────────────── */

export default function WhyMR() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

                    {/* Left column — Title & description */}
                    <motion.div
                        className="w-full lg:w-[45%] lg:sticky lg:top-32"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-aston text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6"
                        >
                            ¿Por qué hacer Investigación de Mercados?
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md"
                        >
                            Invertir en investigación de mercado es la forma más inteligente y precisa de tomar decisiones. Si estás planeando un nuevo proyecto o está considerando un cambio o propuesta de mejora, la investigación de mercados brinda la confianza y la información necesaria para implementar las estrategias adecuadas y alcanzar tus objetivos.
                        </motion.p>
                    </motion.div>

                    {/* Right column — Feature cards */}
                    <motion.div
                        className="w-full lg:w-[55%] flex flex-col gap-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => {
                            const IconComp = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-sm p-6 sm:p-7 transition-all duration-500 hover:border-neutral-700 hover:bg-neutral-900/40"
                                    style={{
                                        boxShadow: `0 0 0 0 ${feature.color}00`,
                                    }}
                                    whileHover={{
                                        boxShadow: `0 0 30px -10px ${feature.color}30`,
                                    }}
                                >
                                    {/* Subtle gradient accent */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                                    />

                                    <div className="relative flex items-start gap-5">
                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                borderColor: `${feature.color}30`,
                                                backgroundColor: `${feature.color}10`,
                                            }}
                                        >
                                            <IconComp size={22} color={feature.color} strokeWidth={1.8} />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-lg sm:text-xl mb-2 text-white transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-white/50 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
