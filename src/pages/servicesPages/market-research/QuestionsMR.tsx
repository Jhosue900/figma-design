import { motion } from 'framer-motion';

const questions = [
  {
    text: '¿Puede mi proyecto de negocio ser exitoso?',
    bold: '',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80', // Tokyo street
  },
  {
    text: '¿Qué hacen mis competidores para',
    bold: 'ganar clientes?',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80', // Tokyo night
  },
  {
    text: '¿Hacia dónde debería',
    bold: 'expandir mi negocio?',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&q=80', // City aerial
  },
  {
    text: '¿Qué puedo hacer para',
    bold: 'incrementar mis ventas?',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80', // City crosswalk
  },
  {
    text: 'Qué características deben tener mis productos o servicios?',
    bold: 'Tienes que atraer más clientes?',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80', // Red tones city
  },
  {
    text: 'Qué puedo hacer para mejorar o ?',
    bold: 'aumentar mis ventas?',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80', // City buildings
  },
  {
    text: '¿Cuál es el alcance real de ventas de mi negocio?',
    bold: 'productos o servicios?',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80', // City street
  },
];

export default function ElPoderDeLaInformacion() {
  return (
    <section className="w-full py-16 sm:py-24 bg-transparent font-montserrat text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl mb-3">
            El Poder de la Información
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            A través de la Investigación de Mercados podrás responder estas preguntas:
          </p>
        </motion.div>

        {/* Question strips */}
        <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden cursor-default"
              style={{ height: '90px' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ height: 110 }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${q.image})` }}
              />

              {/* Dark overlay — lighter on hover */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-500" />

              {/* Separator line */}
              {index !== 0 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
              )}

              {/* Text */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-snug">
                  {q.text}
                </p>
                {q.bold && (
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg mt-0.5">
                    {q.bold}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}