import { motion } from 'framer-motion';
import { useState } from 'react';
import image from '../../images/mapImage.jpg'

import RocketIconNewProjects from '../../images/Contact/RocketIcon.jpg';
import PersonIconClients from '../../images/Contact/PersonIcon.jpg';
import MessageIconGeneral from '../../images/Contact/MessageIcon.jpg';
import { Phone } from 'lucide-react';

type ContactOption = {
  title: string;
  description: string;
  link: string;
};

type OfficeCard = {
  label: string;
  value: string;
};

const FULL_GRADIENT = 'linear-gradient(90deg, #973a32, #558aac, #72987f, #d39b44)';

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={className}
    style={{
      background: FULL_GRADIENT,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'inline',
    }}
  >
    {children}
  </span>
);

const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const contactOptions: ContactOption[] = [
  {
    title: 'Nuevos Proyectos',
    description: '¿Buscas escalar tus resultados?',
    link: 'ventas@weprom.mx',
  },
  {
    title: 'Clientes',
    description: 'Seguimiento de tus estrategias actuales.',
    link: 'proyectos@weprom.mx',
  },
  {
    title: 'General',
    description: 'Alianzas, dudas generales, otros.',
    link: 'hola@weprom.mx',
  },
];

const officeCards: OfficeCard[] = [
  { label: 'Dirección', value: 'C. Corrientes 3071, Colomos Providencia, Gdl, Jalisco, Mex.' },
  { label: 'Horario de oficina', value: '9:00 PM - 3:00 PM' },
  { label: 'Días de atencion', value: 'Lunes a Viernes' },
];

const officeIcons = [IconPin, IconClock, IconCalendar];

// Rocket icon para "Nuevos Proyectos" — trazo multicolor con gradiente rojo→azul→amarillo
const RocketIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C12 2 6 6 6 13l3 1 1 3c3.5 1 7-2 7-7 0-4-5-8-5-8z"
      stroke="url(#g-rocket)"
    />
    <path d="M9 14s-3 1-4 4c3-1 4-4 4-4z" stroke="url(#g-rocket)" />
    <circle cx="13" cy="10" r="1.2" stroke="url(#g-rocket)" />
    <path d="M6 13l-2 4 4-2" stroke="url(#g-rocket)" />
  </svg>
);

// Person icon para "Clientes"
const PersonIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-person" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="7" r="4" stroke="url(#g-person)" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="url(#g-person)" />
  </svg>
);

// Chat bubble icon para "General"
const ChatIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-chat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="url(#g-chat)"
    />
  </svg>
);

// Flecha diagonal pequeña con gradiente
const GradientArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-arr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path d="M7 17L17 7M7 7h10v10" stroke="url(#g-arr)" />
  </svg>
);

const contactIcons = [RocketIconNewProjects, PersonIconClients, MessageIconGeneral];

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-black py-60 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start pt-2"
          >
            {/* Título principal — blanco, sin gradiente */}
            <h1 className="font-aston text-[42px] sm:text-[56px] lg:text-[64px] text-white leading-[1.05] tracking-tight mb-4">
              Estamos para ti
            </h1>
            <p className="font-montserrat text-white/50 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-sm">
              ¿Tienes un reto en mente, buscas una estrategia integral o quieres colaborar? Escríbenos y tracemos el plan.
            </p>

            <p className="font-montserrat font-semibold text-white text-[13px] mb-8">
              ¿Prefieres escribirnos directamente?
            </p>

            <div className="flex flex-col gap-7">
              {contactOptions.map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex items-start gap-5"
                  >
                    {/* Ícono como imagen importada, sin fondo */}
                    <img
                      src={contactIcons[i]}
                      alt={item.title}
                      className="mt-0.5 flex-shrink-0 w-15 h-15 object-contain"
                    />

                    <div>
                      {/* Título en BLANCO, sin gradiente — igual a la imagen */}
                      <p className="font-montserrat font-bold text-white text-[15px] mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-montserrat text-white/50 text-[13px] leading-relaxed mb-1">
                        {item.description}
                      </p>
                      {/* Email con gradiente + flecha */}
                      <a
                        href={`mailto:${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-montserrat font-semibold text-[13px] hover:opacity-80 transition-opacity inline-flex items-center gap-1.5 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `mailto:${item.link}`;
                        }}
                      >
                        <GradientText>{item.link}</GradientText>
                        <GradientArrow />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Nombre</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Escribe tu nombre completo"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu correo electrónico"
                type="email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Teléfono</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+## ### ### ####"
                type="tel"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Asunto</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="" disabled className="bg-black">¿En qué podemos ayudarte?</option>
                <option value="marketResearch" className="bg-black">Investigacion de mercados</option>
                <option value="digitalMarketing" className="bg-black">Marketing digital</option>
                <option value="audiovisualProduction" className="bg-black">Produccion audiovisual</option>
                <option value="consulting" className="bg-black">Consultoría</option>
                <option value="other" className="bg-black">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Platiquemos como podemos ayudarte"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl font-montserrat font-semibold text-white text-[14px] tracking-wide transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>

        {/* OFFICE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-montserrat text-white/50 text-[11px] uppercase tracking-widest">Our Office</span>
          </div>

          <h2 className="font-aston text-[32px] sm:text-[48px] lg:text-[56px] text-white leading-tight tracking-tight mb-4">
            Drop by and Say Hello!
          </h2>
          <p className="font-montserrat text-white/50 text-[15px] leading-relaxed max-w-lg mb-12">
            Whether you need to discuss partnerships, learn more about our platform, or just say hi, you're always welcome at our office.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
            {officeCards.map((item, i) => {
              const Icon = officeIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3"
                >
                  <div className="text-white/40"><Icon /></div>
                  <p className="font-montserrat text-white/40 text-[11px] uppercase tracking-widest">{item.label}</p>
                  <p className="font-montserrat text-white text-[14px] text-center leading-snug">{item.value}</p>
                </motion.div>
              );
            })}
          </div>

          <img src={image} alt="Office Location Map" className="w-full max-w-4xl rounded-2xl mb-12 object-cover" />

          <motion.a
            href="https://maps.app.goo.gl/vhyJfQ9n5bd518nJ8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-montserrat font-semibold text-[13px] text-white px-8 py-3 rounded-full tracking-wide"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Get Directions
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;