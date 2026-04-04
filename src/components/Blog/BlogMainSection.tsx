import { motion } from 'framer-motion';
import { useState } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string; // gradient placeholder color
};

// ─── Gradient helpers (matches project palette) ──────────────────────────────
const FULL_GRADIENT = 'linear-gradient(90deg, #DA3731, #1096D6, #F7B033)';

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

// Thin gradient divider line (same technique used across project)
const GradientLine = () => (
  <div
    className="w-16 h-[2px] mb-6"
    style={{ background: FULL_GRADIENT }}
  />
);

// ─── Fake blog posts ──────────────────────────────────────────────────────────
const POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Exploring the Future of DeFi: Beyond Traditional Finance',
    date: 'January 30, 2025',
    category: 'DeFi',
    image: 'linear-gradient(135deg,#1a0533 0%,#6b21a8 50%,#db2777 100%)',
  },
  {
    id: 2,
    title: 'The Rise of DAOs: A New Model for Collaboration',
    date: 'January 28, 2025',
    category: 'DAOs',
    image: 'linear-gradient(135deg,#0f172a 0%,#312e81 50%,#7c3aed 100%)',
  },
  {
    id: 3,
    title: 'The Role of Smart Contracts in Web3 Innovation',
    date: 'January 25, 2025',
    category: 'Smart Contracts',
    image: 'linear-gradient(135deg,#0c1a2e 0%,#1e3a5f 50%,#2563eb 100%)',
  },
  {
    id: 4,
    title: 'Building Scalable dApps: What You Need to Know',
    date: 'January 22, 2025',
    category: 'dApps',
    image: 'linear-gradient(135deg,#1a0a2e 0%,#7e22ce 40%,#db2777 80%,#f97316 100%)',
  },
  {
    id: 5,
    title: 'Why User Experience is Key to Web3 Mass Adoption',
    date: 'January 20, 2025',
    category: 'UX',
    image: 'linear-gradient(135deg,#2d1b69 0%,#c026d3 60%,#f0abfc 100%)',
  },
  {
    id: 6,
    title: 'Enhancing Security in Web3: Best Practices for Developers',
    date: 'January 15, 2025',
    category: 'Security',
    image: 'linear-gradient(135deg,#042f2e 0%,#0d9488 50%,#67e8f9 100%)',
  },
  {
    id: 7,
    title: 'Decentralization vs. Centralization: Striking the Right Balance',
    date: 'January 12, 2025',
    category: 'Web3',
    image: 'linear-gradient(135deg,#1e1b4b 0%,#4f46e5 50%,#818cf8 100%)',
  },
  {
    id: 8,
    title: 'Top 5 Tools Every Web3 Developer Should Use in 2025',
    date: 'January 10, 2025',
    category: 'Tools',
    image: 'linear-gradient(135deg,#2d0036 0%,#9333ea 40%,#f472b6 80%,#fbbf24 100%)',
  },
  {
    id: 9,
    title: 'How Multi-Chain Integration is Shaping the Future of Web3',
    date: 'January 5, 2025',
    category: 'Multi-Chain',
    image: 'linear-gradient(135deg,#0f172a 0%,#1e40af 40%,#06b6d4 100%)',
  },
];

const POSTS_PER_PAGE = 9;

// ─── Newsletter strip ─────────────────────────────────────────────────────────
function NewsletterStrip() {
  const [email, setEmail] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-white/10 pt-16 mt-20 flex flex-col sm:flex-row items-center justify-between gap-8"
    >
      {/* Left: CTA copy */}
      <div className="max-w-xs">
        <h3 className="font-aston text-[36px] sm:text-[44px] text-white leading-tight tracking-tight mb-3">
          ¡Eso no<br />es Todo!
        </h3>
        <p className="font-montserrat text-white/40 text-[13px] leading-relaxed">
          ¿Quieres conocer más sobre los temas más relevantes de Marketing y Publicidad?
        </p>
      </div>

      {/* Right: dark card */}
      <div
        className="flex flex-col gap-4 w-full sm:w-auto sm:min-w-[320px] p-6 rounded-[24px]"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      >
        {/* Title centered */}
        <p className="font-montserrat font-bold text-white text-[18px] sm:text-[20px] text-center leading-snug">
          Suscríbete a<br />nuestro news letter
        </p>

        {/* Email input */}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 font-montserrat text-white text-[13px] text-right placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
        />

        {/* Subscribe button — outline with brand gradient border */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-full py-2.5 rounded-full font-montserrat font-semibold text-white text-[13px] tracking-wide transition-all overflow-hidden"
          style={{
            background: 'transparent',
            // gradient border trick via box-shadow / pseudo approach with inline padding
            border: '1.5px solid transparent',
            backgroundImage: 'linear-gradient(#111, #111), linear-gradient(90deg, #DA3731, #1096D6, #F7B033)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          subscribe
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function Pagination({
  current,
  total,
  onPrev,
  onNext,
  onPage,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={onPrev}
        disabled={current === 1}
        className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30"
      >
        Previous
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onPage(n)}
          className={`w-8 h-8 rounded-full font-montserrat text-[12px] border transition ${
            n === current
              ? 'border-white/30 text-white bg-white/10'
              : 'border-white/10 text-white/40 bg-white/[0.03] hover:bg-white/[0.07]'
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={onNext}
        disabled={current === total}
        className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}

// ─── Single Blog Card ─────────────────────────────────────────────────────────
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden"
        style={{ background: post.image }}
      >
        {/* Subtle noise grain overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-montserrat font-semibold text-white text-[13px] leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="font-montserrat text-white/35 text-[11px] mt-auto pt-2">{post.date}</p>
      </div>
    </motion.article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const visiblePosts = POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handlePage = (n: number) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-black py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <GradientLine />
          <h1 className="font-aston text-[36px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight mb-3">
            Stay Ahead in Web3
          </h1>
          <p className="font-montserrat text-white/40 text-[13px] sm:text-[14px] max-w-md leading-relaxed">
            Explore expert insights, industry trends, and best practices for building in the decentralized future.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* ── Pagination ── */}
        <Pagination
          current={page}
          total={totalPages}
          onPrev={() => handlePage(Math.max(1, page - 1))}
          onNext={() => handlePage(Math.min(totalPages, page + 1))}
          onPage={handlePage}
        />

        {/* ── Newsletter ── */}
        <NewsletterStrip />

      </div>
    </section>
  );
}

export default BlogSection;