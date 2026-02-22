import borderFrame1 from '../../images/1.png';
import borderFrame2 from '../../images/2.png';
import borderFrame3 from '../../images/3.png';

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  category?: string;
  glowColor?: 'blue' | 'green' | 'purple' | 'none';
}

function BlogCard({ image, title, date, category, glowColor = 'none' }: BlogCardProps) {
  const getBorderFrame = () => {
    switch(glowColor) {
      case 'blue':   return borderFrame1;
      case 'green':  return borderFrame2;
      case 'purple': return borderFrame3;
      default:       return null;
    }
  };

  const borderFrame = getBorderFrame();

  return (
    <div 
      className="relative flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02] group cursor-pointer w-full max-w-[340px] mx-auto"
      style={{ aspectRatio: '340 / 460' }}
    >
      {/* Imagen del artículo */}
      <div className="absolute top-[8.7%] left-[2.4%] right-[2.4%] h-[47.8%] overflow-hidden rounded-t-[8%] z-0">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Marco con borde */}
      {borderFrame && (
        <img 
          src={borderFrame} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        />
      )}

      {/* Fondo glassmorphic cuando no hay marco */}
      {!borderFrame && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: '#FFFFFF26',
            borderRadius: '36px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        />
      )}

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[36px]" />
      </div>

      {/* Spacer para empujar el texto hacia abajo */}
      <div className="relative w-full h-[52%] z-30">
        {category && (
          <div className="absolute top-4 left-4 px-3 py-1.5" />
        )}
      </div>

      {/* Texto */}
      <div className="relative z-30 flex flex-col justify-between flex-1 p-6 sm:p-8 lg:p-10">
        <div className="flex-1">
          <h3 
            className="font-montserrat font-semibold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-white/90 text-[18px] sm:text-[20px] lg:text-[22px]"
            style={{ lineHeight: '1.35', letterSpacing: '-0.02em' }}
          >
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span 
            className="font-montserrat font-normal text-soft-gray transition-colors duration-300 group-hover:text-white/80 text-[12px] sm:text-[14px] mb-4"
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;