import { motion } from 'framer-motion';
import lightbulbImg from '../../../images/servicesImages/lightbulb_brain.png';

/* ─── Animation variants ──────────────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

/* ─── Component ───────────────────────────────────────────────── */

export default function ExperienciaMR() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">

                    {/* Left column — Title & description */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-aston text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6"
                        >
                            Agencia de Investigación de Mercados con Experiencia Global:
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg"
                        >
                            En Weprom contamos con más de 10 años de experiencia en
                            investigación de mercados, trabajando con marcas de todos los
                            tamaños, en un sinfín de giros de industria, presentes en más
                            de 5 países en toda América: México, Estados Unidos, América
                            Central, Centroamérica y Sudamérica.
                        </motion.p>
                    </motion.div>

                    {/* Center — Lightbulb image */}
                    <motion.div
                        className="w-full lg:w-auto flex justify-center lg:flex-shrink-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div
                                className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle, rgba(247,176,51,0.4) 0%, rgba(218,55,49,0.15) 50%, transparent 70%)',
                                    transform: 'scale(1.3)',
                                }}
                            />
                            <img
                                src={lightbulbImg}
                                alt="Investigación de Mercados — Ideas brillantes"
                                className="relative z-10 w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 0 40px rgba(247,176,51,0.2))',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right column — Supporting text */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
                        }}
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-white/60 text-sm sm:text-base leading-relaxed"
                        >
                            Detrás de la construcción de un éxito de negocios, es
                            importante hallar el valor de las personas, los pensamientos,
                            actitudes y emociones de los consumidores, con el objetivo de
                            analizar y evaluar el comportamiento del consumidor para
                            encontrar las mejores prácticas que se adecúen a tu estrategia
                            de negocio.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-6 h-px w-16 bg-gradient-to-r from-[#F7B033] to-transparent"
                        />

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-white/40 text-xs sm:text-sm leading-relaxed italic"
                        >
                            "El dato sin contexto es solo un número. El contexto sin acción es solo conocimiento. La acción basada en datos… es transformación."
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
