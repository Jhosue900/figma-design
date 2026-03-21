import { useState, useEffect, useRef } from 'react';


interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  icon?: 'twitter' | 'linkedin' | 'other';
}

function TestimonialsSection() {

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Efecto para rotar videos automáticamente cada 5 segundos si no hay modal abierto
  useEffect(() => {
    if (activeVideo) return;
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeVideo]);

  
  // Función para convertir links de Drive en links de reproducción directa (Preview)
  const getDriveEmbedUrl = (url: string) => {
    const videoId = url.split('/d/')[1]?.split('/')[0];
    return `https://drive.google.com/file/d/${videoId}/preview`;
  };

  // Función para obtener la miniatura real del video desde Google Drive
  const getDriveThumbnail = (url: string) => {
    const videoId = url.split('/d/')[1]?.split('/')[0];
    // Usamos el endpoint de thumbnail oficial de Drive que es más estable
    return `https://lh3.googleusercontent.com/u/0/d/${videoId}=w800-h1200-iv1`;
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Brown',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'twitter'
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'linkedin'
    },
    {
      id: 3,
      name: 'Jhon Brown',
      role: 'Founder & CMO',
      company: 'Roqus',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'other'
    },
    {
      id: 4,
      name: 'Daywan Jhonson',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'linkedin'
    },
    {
      id: 5,
      name: 'Daywan Jhonson',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'linkedin'
    },
    {
      id: 6,
      name: 'Michael Brown',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.',
      icon: 'other'
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const firstRowDuplicated = [...firstRow, ...firstRow, ...firstRow];
  const secondRowDuplicated = [...secondRow, ...secondRow, ...secondRow];


  const VIDEO_TESTIMONIALS = [
    { id: 1, url: 'https://drive.google.com/file/d/1eZe0NET8yxWl4b-qtl0hUH7mlyhG1iro/view?usp=drive_link' },
    { id: 2, url: 'https://drive.google.com/file/d/1DIJXTbIX-0mQrrBICLJQraSGwTT3Tcnj/view?usp=drive_link' },
    { id: 3, url: 'https://drive.google.com/file/d/1SJNIgz7q8Rhy2VOKiplRDWNPNYnagvKH/view?usp=drive_link' },
    { id: 4, url: 'https://drive.google.com/file/d/1x-bNR6eu6sDxsM9UsoLzvluVB9HGuRKv/view?usp=drive_link' },
    { id: 5, url: 'https://drive.google.com/file/d/103ExR6CxY7557pcmmA_87fQ_SQEZkjnE/view?usp=drive_link' },
  ];

  const getIconComponent = (icon?: string) => {
    switch (icon) {
      case 'twitter':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        );
      case 'linkedin':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
    }
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] mx-2 sm:mx-3 group">
      <div
        className="relative h-full rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          {getIconComponent(testimonial.icon)}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10 flex-shrink-0"
          />
          <div>
            <h3 className="font-montserrat font-semibold text-white text-[15px] sm:text-[18px] leading-tight">
              {testimonial.name}
            </h3>
            <p className="font-montserrat text-soft-gray text-[12px] sm:text-[14px]">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="font-montserrat text-white/80 text-[13px] sm:text-[15px] leading-relaxed">
          {testimonial.text}
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px] sm:rounded-[28px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[20px] sm:rounded-[28px]" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-14 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* Header - Texto que ya tenías */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-aston text-white leading-tight mb-4 text-[32px] sm:text-[44px] lg:text-[64px]">
            No sólo lo decimos nosotros...
          </h2>
          <p className="font-montserrat text-soft-gray text-[14px] sm:text-[18px] max-w-3xl mx-auto">
            Somos una empresa atenta y profesional, y nuestros clientes comparten 
            esa opinión. ¡Descubre lo que dicen de nosotros!
          </p>
        </div>

        {/* Contenedor Principal Split (Video | Reviews) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LADO IZQUIERDO: Video Reel Dinámico con Miniaturas Reales */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-24 z-30 group/reel">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[9/16] max-h-[700px] mx-auto lg:mx-0 shadow-2xl transition-all duration-700">
              
              {/* Capa de video con transición de opacidad */}
              {VIDEO_TESTIMONIALS.map((video, index) => (

                <div
                  key={video.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentVideoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  <img 
                    src={getDriveThumbnail(video.url)} 
                    className="w-full h-full object-cover opacity-80"
                    alt={`Testimonial ${index}`}
                    onError={(e) => {
                      // Fallback por si Drive bloquea la imagen temporalmente
                      e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80";
                    }}
                  />
                </div>

              ))}

              {/* Overlay de Vidrio Esmerilado en la base para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

              {/* Indicadores de progreso (Reset dinámico con KEY) */}
              <div className="absolute top-6 left-6 right-6 z-20 flex gap-2">
                {VIDEO_TESTIMONIALS.map((_, index) => (
                  <div key={`track-${index}`} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-md">
                    <div 
                      key={`progress-${index}-${index === currentVideoIndex}`} // Key dinámica para forzar re-render de la animación
                      className={`h-full bg-gradient-to-r from-blue-500 to-white ${
                        index === currentVideoIndex ? 'animate-progress-fill' : index < currentVideoIndex ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Botón Central Play */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button 
                  onClick={() => setActiveVideo(VIDEO_TESTIMONIALS[currentVideoIndex].url)}
                  className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-white group"
                >
                  <svg className="w-10 h-10 text-white group-hover:text-black transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Texto Informativo */}
              <div className="absolute bottom-10 left-8 right-8 z-20 transform transition-all duration-500 group-hover/reel:-translate-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white/70 text-xs uppercase tracking-[0.2em]">En Directo: Testimonios</span>
                </div>
                <h3 className="text-white font-montserrat font-bold text-3xl leading-tight drop-shadow-lg">
                  Nuestros clientes <br/> <span className="text-soft-gray font-light">hablan por nosotros.</span>
                </h3>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Carousel de Reseñas */}
          <div className="w-full lg:w-[58%] flex flex-col gap-8 relative">
             {/* Sombras laterales de desvanecimiento (Desktop & Mobile) */}
             <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
             <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

             {/* Fila 1 */}
             <div className="relative overflow-hidden group/row py-2">
                <div className="flex animate-scroll-right group-hover/row:pause">
                  {firstRowDuplicated.map((testimonial, index) => (
                    <TestimonialCard key={`first-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
             </div>

             {/* Fila 2 */}
             <div className="relative overflow-hidden group/row py-2">
                <div className="flex animate-scroll-left group-hover/row:pause">
                  {secondRowDuplicated.map((testimonial, index) => (
                    <TestimonialCard key={`second-${testimonial.id}-${index}`} testimonial={testimonial} />
                  ))}
                </div>
             </div>

             {/* Badge Google mejorado */}
             <div className="mx-4 mt-4 p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                <div className="flex items-center gap-5">
                   <div className="p-4 bg-white rounded-2xl shadow-xl">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-8 h-8" alt="Google" />
                   </div>
                   <div>
                      <p className="text-white font-bold text-xl tracking-tight">Puntuación de 4.9 estrellas</p>
                      <p className="text-white/40 text-sm">Opiniones reales verificadas en Google Business</p>
                   </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-white/20 text-[10px] uppercase tracking-widest">Trust verified</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        
        /* Animación fluida para la barra de progreso del video */
        .animate-progress-fill {
          animation: fill 5s linear forwards;
        }

        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(calc(-33.333%)); }
          100% { transform: translateX(0); }
        }

        .hover\:pause:hover { animation-play-state: paused; }
      `}</style>


      {/* MODAL DE VIDEO DINÁMICO */}
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity"
              onClick={() => setActiveVideo(null)}
            />
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={getDriveEmbedUrl(activeVideo)}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        )}


    </section>
  );
}

export default TestimonialsSection;