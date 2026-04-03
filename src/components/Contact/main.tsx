import { motion } from 'framer-motion';
import { useState } from 'react';
import image from '../../images/mapImage.jpg'

type ContactOption = {
  title: string;
  description: string;
  link: string;
};

type OfficeCard = {
  label: string;
  value: string;
};

// Gradiente completo: rojo → azul → amarillo
const FULL_GRADIENT = 'linear-gradient(90deg, #ef4444, #3b82f6, #facc15)';

// Componente para texto con gradiente completo
const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={className}
    style={{
      background: FULL_GRADIENT,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
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
    title: 'Support',
    description: 'For technical issues or help with your account.',
    link: 'support@weprom.com',
  },
  {
    title: 'Sales Inquiries',
    description: 'Interested in our enterprise solutions or custom integrations?',
    link: 'sales@weprom.com',
  },
  {
    title: 'General Inquiries',
    description: 'For partnerships, press, or general questions.',
    link: 'hello@weprom.com',
  },
];

const officeCards: OfficeCard[] = [
  { label: 'Address', value: '123 N Your Street, Suite 1000 01285' },
  { label: 'Office Hours', value: '9:00 - 18:00 PM (UTC)' },
  { label: 'Operation Days', value: 'Monday - Friday' },
];

const officeIcons = [IconPin, IconClock, IconCalendar];

// SVG con ícono y gradiente completo rojo→azul→verde→amarillo
const GradientSupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="gs" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#gs)" />
    <path d="M12 16v-4M12 8h.01" stroke="url(#gs)" />
  </svg>
);

const GradientSalesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="gsa" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="url(#gsa)" />
    <path d="M2 17l10 5 10-5"            stroke="url(#gsa)" />
    <path d="M2 12l10 5 10-5"            stroke="url(#gsa)" />
  </svg>
);

const GradientGeneralIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="gg" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#gg)" />
    <circle cx="9" cy="7" r="4"                           stroke="url(#gg)" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"                  stroke="url(#gg)" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75"                   stroke="url(#gg)" />
  </svg>
);

// Flecha con gradiente
const GradientArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="garr" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%"   stopColor="#ef4444" />
        <stop offset="33%"  stopColor="#3b82f6" />
        <stop offset="66%"  stopColor="#22c55e" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path d="M7 17L17 7M7 7h10v10" stroke="url(#garr)" />
  </svg>
);

const gradientIcons = [GradientSupportIcon, GradientSalesIcon, GradientGeneralIcon];

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start pt-2"
          >
            <h1 className="font-aston text-[42px] sm:text-[56px] lg:text-[64px] text-white leading-[1.05] tracking-tight mb-4">
              We're Here to Help
            </h1>
            <p className="font-montserrat text-white/50 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-sm">
              Have a question, need support, or want to partner with us? We'd love to hear from you.
            </p>

            <p className="font-montserrat font-semibold text-white text-[13px] mb-8">
              Prefer to send us a message directly?
            </p>

            <div className="flex flex-col gap-6">
              {contactOptions.map((item, i) => {
                const GradIcon = gradientIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    {/* Ícono con fondo sutil y gradiente completo en el trazo */}
                    <div
                      className="mt-1 p-2 rounded-lg flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <GradIcon />
                    </div>

                    <div>
                      {/* Título con gradiente completo */}
                      <p className="font-montserrat font-semibold text-[15px] mb-1">
                        <GradientText>{item.title}</GradientText>
                      </p>
                      <p className="font-montserrat text-white/50 text-[13px] leading-relaxed mb-1">
                        {item.description}
                      </p>
                      {/* Link con gradiente completo */}
                      <a
                        href={`mailto:${item.link}`}
                        className="font-montserrat text-[13px] hover:opacity-80 transition-opacity inline-flex items-center gap-1"
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                type="email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Subject</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="" disabled className="bg-black">Select a message class...</option>
                <option value="support" className="bg-black">Support</option>
                <option value="sales" className="bg-black">Sales Inquiries</option>
                <option value="general" className="bg-black">General Inquiries</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-white/60 text-[12px] uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
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
          <img src={image} alt="Office Location Map" className="w-full max-w-4xl rounded-2xl  mb-12 object-cover" />

          <motion.a
            href="https://maps.google.com"
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