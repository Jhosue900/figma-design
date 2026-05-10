import React from 'react';
import { motion } from 'framer-motion';

import trendingBg from '../../../images/HeroMRImage.png';

export default function HeroMR() {
    return (
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden font-montserrat">

            {/* Estilos responsivos para el fondo */}
            <style>{`
                .hero-bg {
                    background-size: 220%;          /* mobile: zoom in para que el track llene pantalla */
                    background-position: center;
                }
                @media (min-width: 640px) {
                    .hero-bg {
                        background-size: contain;   /* desktop: se ve todo el track */
                    }
                }
            `}</style>

            {/* Background track image */}
            <div
                className="hero-bg absolute inset-0"
                style={{
                    backgroundImage: `url(${trendingBg})`,
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)',
                }}
            />

            {/* Central content */}
            <div className="relative z-20 text-center text-white px-6 max-w-xl mx-auto flex flex-col items-center gap-5">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-aston text-2xl sm:text-xl md:text-4xl leading-tight tracking-tight"
                >
                    La Mejor Agencia de<br />Investigación de Mercados
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md"
                >
                    Como su agencia de investigación de mercados, en WeProm planificamos y ejecutamos proyectos de investigación que logran objetivos y proporcionan información de valor.
                </motion.p>
            </div>
        </section>
    );
}