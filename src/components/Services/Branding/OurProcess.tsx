import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Clock, Search, Lightbulb, MousePointer2, ClipboardCheck, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'DIAGNÓSTICO',
    subtitle: 'Antes de crear, hay que entender.',
    desc: 'Conocemos y analizamos tu negocio y objetivos para establecer una base sólida.',
    icon: Clock,
    accent: '#c5362e',
  },
  {
    number: '02',
    title: 'INVESTIGACIÓN',
    subtitle: 'Una marca sin datos es una apuesta.',
    desc: 'Profundizamos en tu industria, audiencia y competencia para minimizar riesgos.',
    icon: Search,
    accent: '#599ddf',
  },
  {
    number: '03',
    title: 'BRAINSTORMING',
    subtitle: 'Las mejores ideas no se fuerzan, se exploran.',
    desc: 'Abrimos todas las posibilidades creativas sin filtros iniciales.',
    icon: Lightbulb,
    accent: '#e6af41',
  },
  {
    number: '04',
    title: 'CONCEPTO CREATIVO',
    subtitle: 'Aterrizando el impacto.',
    desc: 'Con todo lo explorado, desarrollamos las rutas con mayor potencial de conexión.',
    icon: MousePointer2,
    accent: '#80b67d',
  },
  {
    number: '05',
    title: 'DISEÑO Y DESARROLLO',
    subtitle: 'El concepto se vuelve visual.',
    desc: 'Logotipo, sistema gráfico y aplicaciones ejecutadas con máxima precisión técnica.',
    icon: ClipboardCheck,
    accent: '#c5362e',
  },
  {
    number: '06',
    title: 'ENTREGA',
    subtitle: 'Listo para el mercado.',
    desc: 'Te proporcionamos todos los materiales para que tu marca destaque desde el primer día.',
    icon: Rocket,
    accent: '#599ddf',
  },
];

/* ── Single Step Card (sticky scroll panel) ── */
const StepPanel = ({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
  progress: number; // 0-1 how far this panel has been scrolled through
}) => {
  const Icon = step.icon;

  // Derive visibility: panel appears when its "slot" is active
  const visible = progress > 0 && progress <= 1;

  return (
    <motion.div
      className="w-full h-full flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── LEFT HALF: Giant number ── */}
      <div
        className="w-[40%] flex items-center justify-center relative overflow-hidden flex-shrink-0"
        style={{ background: `${step.accent}18` }}
      >
        {/* Subtle radial glow behind number */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${step.accent}30 0%, transparent 70%)`,
          }}
        />
        <motion.span
          key={step.number}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85, y: visible ? 0 : 40 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="font-montserrat font-black leading-none select-none relative z-10"
          style={{
            fontSize: 'clamp(120px, 18vw, 220px)',
            color: step.accent,
            opacity: 0.85,
            letterSpacing: '-0.04em',
          }}
        >
          {step.number}
        </motion.span>

        {/* Vertical divider line */}
        <div
          className="absolute right-0 top-[10%] h-[80%] w-px"
          style={{ background: `${step.accent}30` }}
        />
      </div>

      {/* ── RIGHT HALF: Content ── */}
      <div className="flex-1 flex flex-col items-start justify-center px-10 sm:px-14 lg:px-20 gap-5">
        {/* Icon + step indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${step.accent}20`, border: `1px solid ${step.accent}50` }}
          >
            <Icon size={18} style={{ color: step.accent }} strokeWidth={1.8} />
          </div>
          <span
            className="font-montserrat text-xs tracking-[0.25em] uppercase font-semibold"
            style={{ color: step.accent }}
          >
            Paso {index + 1} de {total}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="font-montserrat font-black text-white leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          {step.title}
        </motion.h3>

        {/* Subtitle in accent color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="font-montserrat font-semibold uppercase tracking-widest text-sm"
          style={{ color: step.accent }}
        >
          {step.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-montserrat text-white/65 text-base sm:text-lg leading-relaxed max-w-md"
        >
          {step.desc}
        </motion.p>

        {/* Progress bar for this step */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2"
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: step.accent }}
            animate={{ width: visible ? '100%' : '0%' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ── Mobile fallback: simple vertical list ── */
const MobileProcess = () => (
  <div className="flex flex-col gap-12 py-16 px-6">
    {steps.map((step, i) => {
      const Icon = step.icon;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
          className="flex gap-6 items-start"
        >
          {/* Number */}
          <span
            className="font-montserrat font-black leading-none flex-shrink-0 mt-1"
            style={{ fontSize: 56, color: step.accent, opacity: 0.9 }}
          >
            {step.number}
          </span>

          <div className="flex flex-col gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
              style={{ background: `${step.accent}20`, border: `1px solid ${step.accent}50` }}
            >
              <Icon size={16} style={{ color: step.accent }} strokeWidth={1.8} />
            </div>
            <h3 className="font-montserrat font-black text-white text-2xl tracking-tight leading-tight">
              {step.title}
            </h3>
            <p className="font-montserrat font-semibold text-xs uppercase tracking-widest" style={{ color: step.accent }}>
              {step.subtitle}
            </p>
            <p className="font-montserrat text-white/60 text-sm leading-relaxed">{step.desc}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

/* ── Main Component ── */
const OurProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState<number[]>(steps.map(() => 0));

  // Total scroll height = viewport height × number of steps (each step gets 1 full vh of scroll)
  const STEP_SCROLL_HEIGHT = 1; // in vh units per step

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerScrolled = -rect.top; // px scrolled into container
      const totalScrollable = container.offsetHeight - window.innerHeight;
      const totalProgress = Math.max(0, Math.min(1, containerScrolled / totalScrollable));

      // Map total progress to individual step progress
      const newProgresses = steps.map((_, i) => {
        const start = i / steps.length;
        const end = (i + 1) / steps.length;
        const p = (totalProgress - start) / (end - start);
        return Math.max(0, Math.min(1, p));
      });

      setStepProgress(newProgresses);

      // Active step = which slot we're in
      const rawActive = Math.floor(totalProgress * steps.length);
      setActiveStep(Math.min(rawActive, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-transparent">

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat text-white text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
            >
              Nuestro Proceso
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-aston text-white text-5xl sm:text-7xl lg:text-8xl font-normal tracking-wide mt-1"
            >
              Creativo
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[35rem] font-montserrat text-white/65 text-lg leading-relaxed pt-2 lg:pt-6"
          >
            Cada proyecto sigue una metodología probada. Aplicamos el{' '}
            <span className="font-bold text-white">WeProm Branding System®</span>{' '}
            para garantizar coherencia y resultados medibles desde el primer día.
          </motion.p>
        </div>
      </div>

      {/* ── Desktop: Sticky scroll ── */}
      <div className="hidden lg:block" ref={containerRef} style={{ height: `${steps.length * 100}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Global progress bar (top) */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-30">
            <motion.div
              className="h-full"
              style={{
                backgroundColor: steps[activeStep]?.accent ?? '#c5362e',
                width: `${((activeStep) / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step indicator pills */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === activeStep ? 28 : 8,
                  height: 8,
                  backgroundColor:
                    i <= activeStep ? s.accent : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>

          {/* Steps stacked, only active is visible */}
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepPanel
                  step={steps[activeStep]}
                  index={activeStep}
                  total={steps.length}
                  progress={stepProgress[activeStep]}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden z-30">
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: steps[activeStep]?.accent ?? '#c5362e',
                width: `${((activeStep + (stepProgress[activeStep] ?? 0)) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Step counter */}
          <div className="absolute bottom-8 right-16 z-30">
            <span className="font-montserrat text-white/25 text-sm tracking-widest">
              {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* ── Mobile: simple vertical list ── */}
      <div className="lg:hidden">
        <MobileProcess />
      </div>

    </section>
  );
};

export default OurProcess;