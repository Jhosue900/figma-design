// Importa tus imágenes aquí:
// import juan from '../../images/About/juan.jpg'
// import jose from '../../images/About/jose.jpg'
// etc...

const team = [
  {
    id: 1,
    name: 'Juan Carlos Ventura Michel',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', // reemplaza con tu import
    glowColor: 'rgba(180, 30, 20, 0.6)',
  },
  {
    id: 2,
    name: 'Jose Miguel Ventura Michel',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    glowColor: 'rgba(180, 30, 20, 0.5)',
  },
  {
    id: 3,
    name: 'Karen Ventura Michel',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    glowColor: 'rgba(20, 100, 180, 0.5)',
  },
  {
    id: 4,
    name: 'Jesus Almanza',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    glowColor: 'rgba(180, 100, 10, 0.5)',
  },
  {
    id: 5,
    name: 'Axel Umg',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    glowColor: 'rgba(150, 80, 10, 0.5)',
  },
  {
    id: 6,
    name: 'Mariana Martínez',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    glowColor: 'rgba(120, 60, 10, 0.5)',
  },
  {
    id: 7,
    name: 'Alejandra Ortiz',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    glowColor: 'rgba(180, 30, 20, 0.5)',
  },
];

function TeamCard({ name, role, image, glowColor }: {
  name: string;
  role: string;
  image: string;
  glowColor: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3">

      {/* Nombre y rol arriba */}
      <div>
        <p className="font-montserrat font-semibold text-white text-[13px] sm:text-[15px] leading-tight">
          {name}
        </p>
        <p className="font-montserrat text-white/50 text-[12px] sm:text-[13px] mt-0.5">
          {role}
        </p>
      </div>

      {/* Imagen con forma redondeada y glow */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: '120px 120px 100px 100px', // forma ovalada tipo huevo
          aspectRatio: '3/4',
        }}
      >
        {/* Glow de color en la parte inferior */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center bottom, ${glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Imagen */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top grayscale"
        />
      </div>

    </div>
  );
}

function TeamSection() {
  const firstRow = team.slice(0, 4);
  const secondRow = team.slice(4, 8);

  return (
    <section className="w-full bg-black py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header — dos columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 sm:mb-16 items-start">
          <h2 className="font-aston text-[36px] sm:text-[52px] lg:text-[62px] text-white leading-tight">
            Las Personas detrás de WeProm
          </h2>
          <p className="font-montserrat text-white/60 text-[15px] sm:text-[17px] leading-relaxed self-center text-right">
            Nuestro equipo de expertos está unido por una misma misión: Lograr que todos nuestros clientes logren sus objetivos comerciales y de posicionamiento de marca.
          </p>
        </div>

        {/* Fila 1 — 4 personas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {firstRow.map((person) => (
            <TeamCard
              key={person.id}
              name={person.name}
              role={person.role}
              image={person.image}
              glowColor={person.glowColor}
            />
          ))}
        </div>

        {/* Fila 2 — 4 personas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {secondRow.map((person) => (
            <TeamCard
              key={person.id}
              name={person.name}
              role={person.role}
              image={person.image}
              glowColor={person.glowColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;