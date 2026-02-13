import BlogCard from './BlogCard';

// Datos de ejemplo para las cards
const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Technology',
    glowColor: 'blue' as const,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Marketing',
    glowColor: 'green' as const,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Business',
    glowColor: 'purple' as const,
  },
];

function BlogSection() {
  return (
    <section className="w-full py-20 px-8 bg-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 flex items-center justify-between gap-8">
          {/* Texto a la izquierda */}
          <div className="text-left flex-1">
            <h2 
              className="font-aston text-white mb-4 leading-tight"
              style={{
                fontSize: '56px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Lo último en el mundo del Marketing.
            </h2>
            
            <p 
              className="font-montserrat text-soft-gray max-w-2xl"
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0.01em',
              }}
            >
              Escribimos para los amantes de la creatividad, la publicidad y los negocios.
            </p>
          </div>

          {/* Botón a la derecha */}
          <div className="flex-shrink-0">
            <button className="group relative px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap">
              <span>Ver Blog</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              category={post.category}
              glowColor={post.glowColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;