import React, { useRef, useState } from 'react';

// 👇 Cambia estas rutas por tus videos reales


const video1 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655985/Inst_1_yf6aip.mp4'
const video2 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776657701/Inst_2_pjtdfe.mp4'
const video3 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655980/Inst_3_xcp3so.mp4'
const video4 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655946/Inst_4_qemsok.mp4'

const videos = [
    { src: video1, large: true },
    { src: video2, large: true },
    { src: video3, large: false },
    { src: video4, large: false },
];

const VideoCard = ({ src, large }: { src: string; large: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <div
            className={`relative overflow-hidden rounded-2xl cursor-pointer group bg-black ${large ? 'col-span-1' : 'col-span-1'
                }`}
            style={{ aspectRatio: '16/9' }}
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loop
                playsInline
            />

            {/* Overlay oscuro al hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Botón play */}
            <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                    }`}
            >
                <div className="w-14 h-14 rounded-full bg-black/50 border border-white/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {playing ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <rect x="5" y="3" width="4" height="18" rx="1" />
                            <rect x="15" y="3" width="4" height="18" rx="1" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

const VideosInstitucionales = () => {
    return (
        <section className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">

            {/* Encabezado */}
            <div className="text-center mb-10 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-aston mb-4">
                    Videos{' '}
                    <span
                        style={{
                            background: '#007AFF',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Institucionales
                    </span>
                </h2>
                <p className="text-white font-aston font-normal text-base md:text-lg leading-relaxed">
                    Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo.
                </p>
            </div>

            <div className="w-full max-w-6xl flex flex-col gap-4">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <VideoCard src={videos[0].src} large={true} />
                    <VideoCard src={videos[1].src} large={true} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="hidden sm:block" />
                    <VideoCard src={videos[2].src} large={false} />
                    <VideoCard src={videos[3].src} large={false} />
                </div>

            </div>

            {/* Botón CTA */}
            <div className="mt-12">
                <button
                    className="px-8 py-4 font-montserrat font-bold text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box',
                        border: '4px solid transparent',
                    }}
                >
                    Cotizar Proyecto
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>

        </section>
    );
};

export default VideosInstitucionales;