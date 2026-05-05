import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

export default function ExperienciaMR() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    {/* Background — pure CSS, zero performance cost */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: `
                                radial-gradient(ellipse at 15% 50%, rgba(218, 55, 49, 0.18) 0%, transparent 55%),
                                radial-gradient(ellipse at 85% 20%, rgba(247, 176, 51, 0.14) 0%, transparent 50%),
                                radial-gradient(ellipse at 60% 90%, rgba(16, 150, 214, 0.12) 0%, transparent 50%),
                                linear-gradient(135deg, #0f0f10 0%, #161618 50%, #0f0f10 100%)
                            `,
                        }}
                    />

                    {/* Subtle noise grain overlay for depth */}
                    <div
                        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                            backgroundSize: '128px 128px',
                        }}
                    />

                    {/* Thin accent border */}
                    <div
                        className="absolute inset-0 z-0 rounded-3xl pointer-events-none"
                        style={{
                            border: '1px solid rgba(247, 176, 51, 0.08)',
                        }}
                    />

                    {/* Content grid */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-8 sm:p-12 lg:p-14">

                        {/* Left column */}
                        <div className="flex flex-col justify-center">
                            <motion.h2
                                variants={fadeUp}
                                className="font-aston text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6"
                            >
                                Agencia de Investigación de Mercados con Experiencia Global:
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-white/60 text-sm sm:text-base leading-relaxed"
                            >
                                En WeProm contamos con más de 35 años de experiencia
                                realizando proyectos de investigación de mercados para
                                diferentes industrias y sectores, descubriendo y analizando
                                oportunidades de negocio en México, Estados Unidos,
                                Centroamérica y Europa.
                            </motion.p>
                        </div>

                        {/* Right column */}
                        <div className="flex flex-col justify-center gap-6">
                            <motion.div variants={fadeUp}>
                                <button className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                    Habla con uno de nuestros expertos
                                </button>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="text-white/60 text-sm sm:text-base leading-relaxed"
                            >
                                Desde la validación de una idea de negocio, la
                                identificación de la ubicación ideal para su expansión,
                                hasta el análisis del comportamiento del consumidor en
                                otros países, nos encargamos del proyecto de principio a
                                fin, apoyándolo durante todo el proceso.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}