import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
export type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  author?: string;
  readTime?: string;
  content?: BlogContent;
};

export type BlogContent = {
  introduction: string;
  tableOfContents: string[];
  sections: ContentSection[];
  conclusion: string;
};

export type ContentSection = {
  heading: string;
  body: string;
  subsections?: { heading: string; body: string }[];
};

// ─── Shared posts data ────────────────────────────────────────────────────────
export const POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Exploring the Future of DeFi: Beyond Traditional Finance',
    date: 'January 30, 2025',
    category: 'DeFi',
    image: 'linear-gradient(135deg,#1a0533 0%,#6b21a8 50%,#db2777 100%)',
    author: 'Sofia Chen',
    readTime: '8 min read',
    content: {
      introduction: 'As the DeFi landscape grows, we are increasingly seeing seamless multi-chain integration. Developers, businesses, and users are leading a push to drive their decentralized applications across multiple blockchain ecosystems. This shift towards a multi-chain future is redefining how Web3 projects are built, organized, and scaled.',
      tableOfContents: ['Introduction', 'Key Benefits of DeFi', 'Interoperability', 'Scalability', 'Cost Efficiency', "How It's Shaping Web3 Development", 'Looking Ahead', 'Conclusion'],
      sections: [
        {
          heading: 'Key Benefits of DeFi',
          body: 'DeFi offers a wide range of advantages over traditional finance, enabling permissionless access and programmable money flows.',
          subsections: [
            { heading: '1. Interoperability', body: 'Industry-compatible systems allow DeFi nodes to communicate and share data across different networks, enhancing functionality and reach.' },
            { heading: '2. Scalability', body: 'By distributing workloads across various networks, projects can reduce congestion and improve transaction speeds, allowing for healthier ecosystems and user experience.' },
            { heading: '3. Cost Efficiency', body: 'Multi-chain setups enable developers to choose networks with better transaction fees, splitting costs and optimizing gas for users and protocols alike.' },
          ],
        },
        { heading: "How It's Shaping Web3 Development", body: 'With multi-chain integration, developers no longer need to limit their dApps to a single ecosystem. The Web3 space is home to innovation, allowing projects to tap into various blockchain communities, attract a wider user base, and increase redundancy on any single network.' },
        { heading: 'Looking Ahead', body: 'The future of DeFi is undeniably multi-chain. As tools to coordinate leverage and trading costs become available, they generate a strong backing for successful projects. Platforms enabling coordinated multi-chain support will be at the front of this revolution.' },
      ],
      conclusion: "Multi-chain integration isn't a trend — it's the future of decentralized technology. By embracing this path, developers and businesses can build more resilient, scalable, and user-friendly products.",
    },
  },
  {
    id: 2,
    title: 'The Rise of DAOs: A New Model for Collaboration',
    date: 'January 28, 2025',
    category: 'DAOs',
    image: 'linear-gradient(135deg,#0f172a 0%,#312e81 50%,#7c3aed 100%)',
    author: 'Marco Reyes',
    readTime: '6 min read',
    content: {
      introduction: 'Decentralized Autonomous Organizations (DAOs) represent a paradigm shift in how people coordinate, collaborate, and make collective decisions without the need for centralized leadership.',
      tableOfContents: ['Introduction', 'What Are DAOs?', 'Governance Models', 'Challenges', 'Future Outlook', 'Conclusion'],
      sections: [
        { heading: 'What Are DAOs?', body: 'DAOs are organizations encoded as transparent, rules-based smart contracts. Members hold governance tokens that give them voting power over protocol decisions, treasury allocation, and product direction.' },
        {
          heading: 'Governance Models',
          body: 'From simple token voting to quadratic mechanisms, DAOs are experimenting with increasingly sophisticated governance models to balance efficiency with decentralization.',
          subsections: [
            { heading: 'Token-weighted voting', body: 'The most common model, where each token equals one vote. Simple but susceptible to plutocracy.' },
            { heading: 'Quadratic voting', body: 'Limits the influence of large token holders by making each additional vote progressively more expensive.' },
          ],
        },
        { heading: 'Challenges', body: 'Despite their promise, DAOs face significant hurdles including voter apathy, governance attacks, legal uncertainty, and the difficulty of coordinating large groups of anonymous participants.' },
      ],
      conclusion: 'DAOs are still early-stage experiments, but they represent an exciting blueprint for future organizational structures that are more transparent, inclusive, and censorship-resistant.',
    },
  },
  {
    id: 3,
    title: 'The Role of Smart Contracts in Web3 Innovation',
    date: 'January 25, 2025',
    category: 'Smart Contracts',
    image: 'linear-gradient(135deg,#0c1a2e 0%,#1e3a5f 50%,#2563eb 100%)',
    author: 'Aisha Okonkwo',
    readTime: '7 min read',
    content: {
      introduction: 'Smart contracts are the backbone of the Web3 ecosystem, enabling trustless, automated execution of agreements without the need for intermediaries.',
      tableOfContents: ['Introduction', 'How Smart Contracts Work', 'Use Cases', 'Security Considerations', 'The Road Ahead', 'Conclusion'],
      sections: [
        { heading: 'How Smart Contracts Work', body: 'Written in languages like Solidity or Rust, smart contracts are programs that live on a blockchain. They execute deterministically when predefined conditions are met, making them transparent and tamper-proof.' },
        {
          heading: 'Use Cases',
          body: 'From DeFi protocols and NFT marketplaces to supply chain tracking and insurance, smart contracts are enabling entirely new categories of products and services.',
          subsections: [
            { heading: 'DeFi', body: 'Automated market makers, lending protocols, and yield aggregators all rely on smart contracts to operate without human intervention.' },
            { heading: 'NFTs', body: 'Ownership, royalties, and provenance of digital assets are enforced automatically through contract logic.' },
          ],
        },
        { heading: 'Security Considerations', body: 'Bugs in smart contract code can be catastrophic and irreversible. Rigorous auditing, formal verification, and bug bounty programs are essential practices for any production deployment.' },
      ],
      conclusion: 'Smart contracts have unlocked a new design space for building trustless systems. As tooling and best practices mature, they will become an even more fundamental component of the global digital infrastructure.',
    },
  },
  {
    id: 4,
    title: 'Building Scalable dApps: What You Need to Know',
    date: 'January 22, 2025',
    category: 'dApps',
    image: 'linear-gradient(135deg,#1a0a2e 0%,#7e22ce 40%,#db2777 80%,#f97316 100%)',
    author: 'Jordan Park',
    readTime: '9 min read',
    content: {
      introduction: 'Building decentralized applications that can handle real-world usage requires careful attention to architecture, performance, and user experience.',
      tableOfContents: ['Introduction', 'Architecture Patterns', 'Scalability Strategies', 'Frontend Considerations', 'Testing & Deployment', 'Conclusion'],
      sections: [
        { heading: 'Architecture Patterns', body: 'Successful dApps typically separate on-chain logic (handled by smart contracts) from off-chain data storage and computation, using systems like IPFS, The Graph, or centralized backends where necessary.' },
        { heading: 'Scalability Strategies', body: "Layer 2 solutions like Optimism, Arbitrum, and zkSync dramatically reduce transaction costs and increase throughput while maintaining Ethereum's security guarantees." },
        { heading: 'Frontend Considerations', body: 'A smooth wallet connection flow, clear transaction feedback, and graceful error handling are the difference between a dApp users love and one they abandon.' },
      ],
      conclusion: "Building scalable dApps is a multi-faceted challenge, but with the right tools and architecture decisions, it's entirely achievable. The ecosystem is maturing rapidly, making it an exciting time to build.",
    },
  },
  {
    id: 5,
    title: 'Why User Experience is Key to Web3 Mass Adoption',
    date: 'January 20, 2025',
    category: 'UX',
    image: 'linear-gradient(135deg,#2d1b69 0%,#c026d3 60%,#f0abfc 100%)',
    author: 'Lena Fischer',
    readTime: '5 min read',
    content: {
      introduction: "Web3's greatest barrier to mainstream adoption isn't technology — it's usability. Until interacting with decentralized applications feels as natural as using any other app, adoption will remain niche.",
      tableOfContents: ['Introduction', 'Current UX Challenges', 'Wallet Onboarding', 'Abstracting Complexity', 'Design Principles', 'Conclusion'],
      sections: [
        { heading: 'Current UX Challenges', body: 'Seed phrases, gas fees, transaction confirmations, and network switching create enormous friction for new users who expect the simplicity of Web2 applications.' },
        { heading: 'Wallet Onboarding', body: 'Account abstraction and social login solutions are making it possible to onboard users without requiring them to understand private keys or seed phrases from day one.' },
        { heading: 'Abstracting Complexity', body: 'The best Web3 UX hides complexity without sacrificing user sovereignty. Gas sponsorship, batched transactions, and intelligent defaults can make the experience seamless.' },
      ],
      conclusion: 'The projects that crack Web3 UX will win the next wave of users. Design thinking and empathy for non-technical users must become first-class concerns in every Web3 team.',
    },
  },
  {
    id: 6,
    title: 'Enhancing Security in Web3: Best Practices for Developers',
    date: 'January 15, 2025',
    category: 'Security',
    image: 'linear-gradient(135deg,#042f2e 0%,#0d9488 50%,#67e8f9 100%)',
    author: 'Dev Patel',
    readTime: '10 min read',
    content: {
      introduction: 'Security in Web3 is non-negotiable. Billions of dollars have been lost to exploits, and the immutable nature of blockchain means mistakes can be permanent.',
      tableOfContents: ['Introduction', 'Common Vulnerabilities', 'Audit Best Practices', 'On-chain Monitoring', 'Incident Response', 'Conclusion'],
      sections: [
        { heading: 'Common Vulnerabilities', body: 'Reentrancy attacks, integer overflow, access control issues, and oracle manipulation are among the most common vectors exploited in smart contract hacks.' },
        { heading: 'Audit Best Practices', body: 'Engage multiple reputable auditors, run automated tools like Slither and MythX, and maintain comprehensive test suites. Audits are a process, not a one-time event.' },
        { heading: 'On-chain Monitoring', body: 'Real-time monitoring with tools like Forta or OpenZeppelin Defender can detect anomalous activity and trigger automated responses before damage escalates.' },
      ],
      conclusion: 'Security is a mindset, not a checklist. Building secure Web3 applications requires constant vigilance, community collaboration, and a commitment to transparency.',
    },
  },
  {
    id: 7,
    title: 'Decentralization vs. Centralization: Striking the Right Balance',
    date: 'January 12, 2025',
    category: 'Web3',
    image: 'linear-gradient(135deg,#1e1b4b 0%,#4f46e5 50%,#818cf8 100%)',
    author: 'Mia Thornton',
    readTime: '6 min read',
    content: {
      introduction: "The decentralization spectrum is nuanced. Very few applications are truly fully decentralized, and that's okay — the goal is finding the right balance for each use case.",
      tableOfContents: ['Introduction', 'The Spectrum', 'When Centralization Helps', 'Progressive Decentralization', 'Tradeoffs', 'Conclusion'],
      sections: [
        { heading: 'The Spectrum', body: 'Decentralization exists on a spectrum across multiple dimensions: consensus, data storage, governance, and front-end hosting. A project can be decentralized in some dimensions and centralized in others.' },
        { heading: 'When Centralization Helps', body: "Speed, cost, and user experience often improve with some centralization. The key is understanding which components benefit from decentralization and which don't." },
        { heading: 'Progressive Decentralization', body: 'Many successful projects start centralized to move fast and iterate, then progressively hand control to the community as the protocol matures.' },
      ],
      conclusion: 'The binary framing of "decentralized vs. centralized" is counterproductive. Thoughtful, context-specific decisions about where to decentralize will build more resilient and useful systems.',
    },
  },
  {
    id: 8,
    title: 'Top 5 Tools Every Web3 Developer Should Use in 2025',
    date: 'January 10, 2025',
    category: 'Tools',
    image: 'linear-gradient(135deg,#2d0036 0%,#9333ea 40%,#f472b6 80%,#fbbf24 100%)',
    author: 'Carlos Vega',
    readTime: '7 min read',
    content: {
      introduction: 'The Web3 developer toolchain has matured dramatically. Here are the essential tools that will make you more productive, help you ship safer code, and improve your development experience in 2025.',
      tableOfContents: ['Introduction', 'Foundry', 'The Graph', 'Wagmi', 'Hardhat', 'OpenZeppelin', 'Conclusion'],
      sections: [
        { heading: 'Foundry', body: 'The gold standard for Solidity testing and deployment. Its fast compilation, fuzzing capabilities, and Forge scripting make it the go-to toolkit for serious smart contract developers.' },
        { heading: 'The Graph', body: 'Indexing and querying blockchain data is painful without The Graph. Its subgraph protocol makes it easy to expose GraphQL APIs over any on-chain data.' },
        { heading: 'Wagmi', body: 'React hooks for Ethereum that handle wallet connection, contract reads/writes, and real-time updates with a clean, composable API.' },
        { heading: 'Hardhat', body: 'Still a powerhouse for its plugin ecosystem, local node simulation, and console.log debugging in Solidity.' },
        { heading: 'OpenZeppelin', body: 'Battle-tested contract libraries that provide secure, audited implementations of ERC standards, access control, and security primitives.' },
      ],
      conclusion: 'Mastering these tools will significantly accelerate your development workflow and help you build more robust Web3 applications.',
    },
  },
  {
    id: 9,
    title: 'How Multi-Chain Integration is Shaping the Future of Web3',
    date: 'January 5, 2025',
    category: 'Multi-Chain',
    image: 'linear-gradient(135deg,#0f172a 0%,#1e40af 40%,#06b6d4 100%)',
    author: 'Sofia Chen',
    readTime: '8 min read',
    content: {
      introduction: 'As the Web3 landscape grows, we are increasingly seeing seamless multi-chain integration. Developers, businesses, and users are leading a push to drive their decentralized applications across multiple blockchain ecosystems. This shift towards a multi-chain future is redefining how Web3 projects are built, organized, and scaled.',
      tableOfContents: ['Introduction', 'Key Benefits of Multi-Chain Integration', 'Interoperability', 'Scalability', 'Cost Efficiency', "How It's Shaping Web3 Development", 'Looking Ahead', 'Conclusion'],
      sections: [
        {
          heading: 'Key Benefits of Multi-Chain Integration',
          body: 'Multi-chain architecture provides a framework for the next generation of blockchain applications.',
          subsections: [
            { heading: '1. Interoperability', body: 'Industry-compatible systems allow blockchain nodes to communicate and share data across different networks, enhancing functionality and reach.' },
            { heading: '2. Scalability', body: 'By distributing workloads across various networks, projects can reduce congestion and improve transaction speeds, allowing for a healthier ecosystem and user experience.' },
            { heading: '3. Cost Efficiency', body: 'Multi-chain setups enable developers to choose networks with better transaction fees, splitting costs and optimizing gas for users alike.' },
          ],
        },
        { heading: "How It's Shaping Web3 Development", body: "With multi-chain integration, developers no longer need to limit their dApps to a single ecosystem. The Web3 space is home to innovation, allowing projects to tap into various blockchain communities, attract a wider user base, and increase resiliency on any single network." },
        { heading: 'Looking Ahead', body: 'The future of Web3 is undeniably multi-chain. As tools to coordinate leverage and trading costs become available, they generate a strong backing for successful projects. Platforms enabling coordinated multi-chain support will be at the front of this revolution.' },
      ],
      conclusion: "Multi-chain integration isn't a trend — it's the future of decentralized technology. By embracing this path, developers and businesses can build more resilient, scalable, and user-friendly products.",
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FULL_GRADIENT = 'linear-gradient(90deg, #DA3731, #1096D6, #F7B033)';

function getRelatedPosts(currentId: number, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.id !== currentId).slice(0, count);
}

// ─── Social icons ─────────────────────────────────────────────────────────────
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ items }: { items: string[] }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="font-montserrat font-bold text-white text-[13px] uppercase tracking-widest mb-4">
        Table of Contents
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={`#section-${i}`}
              className="font-montserrat text-[12px] text-white/50 hover:text-white/90 transition-colors block leading-relaxed"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Related card ─────────────────────────────────────────────────────────────
function RelatedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/20 transition-all"
    >
      <div className="relative w-full aspect-[4/3]" style={{ background: post.image }}>
        <span
          className="absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-montserrat font-semibold text-white text-[13px] leading-snug line-clamp-2 group-hover:text-white/80 transition-colors">
          {post.title}
        </h3>
        <p className="font-montserrat text-white/35 text-[11px]">{post.date}</p>
      </div>
    </motion.article>
  );
}

// ─── BlogPostPage — default export ───────────────────────────────────────────
export default function BlogPostPage({
  post,
  onBack,
  onNavigate,
}: {
  post: BlogPost;
  onBack: () => void;
  onNavigate: (p: BlogPost) => void;
}) {
  const related = getRelatedPosts(post.id);
  const content = post.content!;

  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-black min-h-screen py-12 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={onBack}
          className="font-montserrat text-[12px] text-white/40 hover:text-white/80 transition-colors mb-8 flex items-center gap-2"
        >
          ← Back to Blog
        </motion.button>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-4"
        >
          <span
            className="font-montserrat text-[11px] font-semibold uppercase tracking-widest text-white px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {post.category} & Tools
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-montserrat font-bold text-white text-center text-[28px] sm:text-[36px] lg:text-[42px] leading-tight tracking-tight mb-5 max-w-3xl mx-auto"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-montserrat font-bold flex-shrink-0"
            style={{ background: FULL_GRADIENT }}
          >
            {post.author?.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="font-montserrat text-white/50 text-[12px]">{post.author}</span>
          <span className="text-white/20 text-[12px]">·</span>
          <span className="font-montserrat text-white/50 text-[12px]">{post.date}</span>
          <span className="text-white/20 text-[12px]">·</span>
          <span className="font-montserrat text-white/50 text-[12px]">{post.readTime}</span>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full aspect-[16/7] rounded-3xl overflow-hidden mb-12"
          style={{ background: post.image }}
        >
          <div
            className="w-full h-full opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Article body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex-1 min-w-0"
          >
            <h2 className="font-montserrat font-bold text-white text-[16px] mb-4">Introduction</h2>
            <p className="font-montserrat text-white/60 text-[14px] leading-relaxed mb-10">
              {content.introduction}
            </p>

            {content.sections.map((section, si) => (
              <div key={si} id={`section-${si + 1}`} className="mb-10">
                <h2 className="font-montserrat font-bold text-white text-[16px] mb-4">{section.heading}</h2>
                <p className="font-montserrat text-white/60 text-[14px] leading-relaxed mb-5">{section.body}</p>
                {section.subsections?.map((sub, ssi) => (
                  <div key={ssi} className="mb-4 pl-5 border-l border-white/10">
                    <h3 className="font-montserrat font-semibold text-white/80 text-[13px] mb-1.5">{sub.heading}</h3>
                    <p className="font-montserrat text-white/50 text-[13px] leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            ))}

            <div id={`section-${content.sections.length + 1}`} className="mb-10">
              <h2 className="font-montserrat font-bold text-white text-[16px] mb-4">Conclusion</h2>
              <p className="font-montserrat text-white/60 text-[14px] leading-relaxed">{content.conclusion}</p>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <span className="font-montserrat text-white/40 text-[12px]">Share this blog</span>
              {[XIcon, FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-[220px] flex-shrink-0"
          >
            <TableOfContents items={content.tableOfContents} />
          </motion.aside>
        </div>

        {/* Read More */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-montserrat font-bold text-white text-[20px]">Read More</h2>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onBack}
              className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              See All
            </motion.button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((rp) => (
              <RelatedCard
                key={rp.id}
                post={rp}
                onClick={() => {
                  onNavigate(rp);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}