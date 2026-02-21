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
    <section className="w-full py-14 sm:py-20 bg-black overflow-hidden">
      <div className="max-w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2
            className="font-aston text-white leading-tight mb-3 sm:mb-4 text-[32px] sm:text-[44px] lg:text-[56px]"
            style={{ fontWeight: 400, letterSpacing: '-0.02em' }}
          >
            No sólo lo decimos nosotros...
          </h2>
          <p
            className="font-montserrat text-soft-gray text-[14px] sm:text-[16px] lg:text-[18px]"
            style={{ lineHeight: '28px', letterSpacing: '0.01em' }}
          >
            Somos una empresa atenta y profesional, y nuestros clientes comparten{' '}
            <span className="hidden sm:inline"><br /></span>
            esa opinión. ¡Descubre lo que dicen de nosotros!
          </p>
        </div>

        {/* Navigation Hand Icon */}
        <div className="flex justify-end mb-6 sm:mb-8 pr-4 sm:pr-12 max-w-[1400px] mx-auto">
          <div className="text-white/60 animate-float">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 10.5v8c0 2.485-2.015 4.5-4.5 4.5h-8c-2.206 0-4-1.794-4-4v-5.5c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.103.897 2 2 2h8c1.378 0 2.5-1.122 2.5-2.5v-8c0-.828-.672-1.5-1.5-1.5h-2.5c-.552 0-1-.448-1-1s.448-1 1-1h2.5c1.933 0 3.5 1.567 3.5 3.5zm-6.5-5c0-.552-.448-1-1-1s-1 .448-1 1v6c0 .552.448 1 1 1s1-.448 1-1v-6zm-4 0c0-.552-.448-1-1-1s-1 .448-1 1v6c0 .552.448 1 1 1s1-.448 1-1v-6zm-4 0c0-.552-.448-1-1-1s-1 .448-1 1v6c0 .552.448 1 1 1s1-.448 1-1v-6zm-4 2c0-.552-.448-1-1-1s-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1v-4z" />
            </svg>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative space-y-4 sm:space-y-6">
          {/* Sombras laterales */}
          <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
          <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

          {/* Primera fila → derecha */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right" style={{ width: 'fit-content' }}>
              {firstRowDuplicated.map((testimonial, index) => (
                <TestimonialCard key={`first-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Segunda fila → izquierda */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left" style={{ width: 'fit-content' }}>
              {secondRowDuplicated.map((testimonial, index) => (
                <TestimonialCard key={`second-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        @keyframes scroll-left {
          0%   { transform: translateX(calc(-33.333%)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        /* En móvil, velocidad un poco más lenta para que se lea bien */
        @media (max-width: 640px) {
          .animate-scroll-right { animation-duration: 20s; }
          .animate-scroll-left  { animation-duration: 20s; }
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;