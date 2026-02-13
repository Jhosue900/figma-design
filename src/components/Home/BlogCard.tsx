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
  // Seleccionar el marco/borde según el color
  const getBorderFrame = () => {
    switch(glowColor) {
      case 'blue':
        return borderFrame1;
      case 'green':
        return borderFrame2;
      case 'purple':
        return borderFrame3;
      default:
        return null;
    }
  };

  const borderFrame = getBorderFrame();

  return (
    <div 
      className="relative flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
      style={{
        width: '340px',
        height: '460px',
      }}
    >
      {/* Contenedor de la imagen del artículo - DEBAJO del marco */}
      <div className="absolute top-[40px] left-[8px] right-[8px] h-[220px] overflow-hidden rounded-t-[28px] z-0">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Marco/Borde de fondo (la imagen completa con el borde) - ENCIMA de la imagen */}
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

      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[36px]" />
      </div>

      {/* Badge de categoría y texto - ENCIMA de todo */}
      <div className="relative w-full h-[240px] z-30">
        {/* Badge de categoría (opcional) */}
        {category && (
          <div className="absolute top-4 left-4 px-3 py-1.5 ">
            
          </div>
        )}
      </div>

      {/* Contenido de texto */}
      <div className="relative z-30 flex flex-col justify-between flex-1 p-10">
        <div className="flex-1">
          <h3 
            className="font-montserrat font-semibold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-white/90"
            style={{
              fontSize: '22px',
              lineHeight: '30px',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Footer con fecha */}
        <div className="flex items-center justify-between ">
          <span 
            className="font-montserrat font-normal text-soft-gray transition-colors duration-300 group-hover:text-white/80"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.01em',
            }}
          >
            {date}
          </span>

      
        </div>
      </div>
    </div>
  );
}

export default BlogCard;