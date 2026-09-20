// Web Applications Showcase Data for Ayoola Adebisi (Ayoola1o)
const portfolioProjects = [
  {
    id: "aimarkettracker",
    title: "AI Market Tracker",
    tagline: "Real-Time Financial Markets Trend Prediction & Intelligence Platform",
    category: "ai",
    categoryName: "AI & FinTech",
    status: "Production Live",
    statusColor: "emerald",
    image: "assets/images/project-saas.jpg",
    featured: true,
    year: "2025",
    summary: "Real-time predictive market analytics tool tracking uptrends and downtrends with high-probability forecast modeling and interactive charting.",
    description: "AI Market Tracker was built to deliver institutional-grade market trend prediction to modern traders. It analyzes high-frequency asset movements, calculates predictive momentum indicators, and streams live buy/sell signal alerts.",
    highlights: [
      "Real-time predictive trend detection algorithms analyzing price action and market momentum",
      "Sub-second live market charts with automated support and resistance detection",
      "Deployed to Vercel edge runtime with optimal responsiveness across mobile and desktop",
      "High-throughput WebSocket data ingestion for continuous market streaming"
    ],
    techStack: ["TypeScript", "Next.js", "React", "Vercel", "WebSockets", "Tailwind CSS"],
    metrics: [
      { label: "Deployment", value: "Vercel Live" },
      { label: "Feed Latency", value: "<120ms" },
      { label: "Prediction Model", value: "Real-Time" },
      { label: "Status", value: "Online" }
    ],
    liveUrl: "https://aimarkettracker.vercel.app",
    githubUrl: "https://github.com/Ayoola1o/Aimarkettracker",
    architecture: "Next.js & TypeScript front-end deployed on Vercel edge infrastructure, streaming market signals via secure WebSockets with reactive client-side state caching."
  },
  {
    id: "aiquant",
    title: "AI Quant Engine",
    tagline: "High-Performance Quantitative Finance & Algorithmic Strategy System",
    category: "ai",
    categoryName: "AI & FinTech",
    status: "Active System",
    statusColor: "violet",
    image: "assets/images/project-ai.jpg",
    featured: true,
    year: "2026",
    summary: "Comprehensive quantitative finance framework executing automated statistical arbitrage, portfolio risk modeling, and backtesting pipelines.",
    description: "Built for systematic algorithmic trading and asset management. AI Quant runs high-dimensional mathematical simulations, multi-asset portfolio optimization, and Sharpe ratio maximization across historical tick datasets.",
    highlights: [
      "Vectorized strategy backtesting engine processing multi-gigabyte financial datasets",
      "Monte Carlo risk simulations, Value at Risk (VaR), and maximum drawdown mitigation",
      "Modular alpha model architecture for algorithmic signal extraction and ranking",
      "Automated position sizing and risk-budget allocation algorithms"
    ],
    techStack: ["Python", "FastAPI", "NumPy", "Pandas", "Scikit-Learn", "Docker", "Git"],
    metrics: [
      { label: "Language", value: "Python" },
      { label: "Repository Size", value: "20MB+" },
      { label: "Backtest Speed", value: "10x Vector" },
      { label: "Risk Models", value: "Multi-Asset" }
    ],
    liveUrl: "https://github.com/Ayoola1o/Aiquant",
    githubUrl: "https://github.com/Ayoola1o/Aiquant",
    architecture: "Event-driven asynchronous Python runtime with vectorized calculations in NumPy/Pandas, decoupled strategy execution modules, and containerized Docker environments."
  },
  {
    id: "aitrader",
    title: "AI Trader System",
    tagline: "Autonomous Algorithmic Trading Execution Engine & Signal Pipeline",
    category: "saas",
    categoryName: "SaaS & Systems",
    status: "Production Ready",
    statusColor: "emerald",
    image: "assets/images/project-devflow.jpg",
    featured: true,
    year: "2026",
    summary: "Automated trading execution pipeline connecting algorithmic prediction signals directly to market order books with sub-second precision.",
    description: "AI Trader bridges strategy modeling and live market order routing. It handles position management, stop-loss / take-profit automation, API gateway authentication, and webhook event processing with strict risk guardrails.",
    highlights: [
      "Automated order placement, limit laddering, and dynamic trailing stop execution",
      "Integrated exchange API connectors with failover redundancy and rate-limit buffering",
      "Real-time logging, P&L reporting, and instant webhook alert dispatch",
      "Built-in circuit breakers to protect capital against sudden volatility spikes"
    ],
    techStack: ["Python", "REST APIs", "WebSockets", "TimescaleDB", "Docker", "Linux"],
    metrics: [
      { label: "Execution Latency", value: "<50ms" },
      { label: "Codebase", value: "44k+ Lines" },
      { label: "Risk Circuit", value: "Active" },
      { label: "Automation", value: "24/7" }
    ],
    liveUrl: "https://github.com/Ayoola1o/Aitrader",
    githubUrl: "https://github.com/Ayoola1o/Aitrader",
    architecture: "Asynchronous worker queue monitoring live market streams, executing order management logic through exchange gateways with persistent audit logging in PostgreSQL."
  },
  {
    id: "marketai",
    title: "MarketAI / 9jaFlavor",
    tagline: "Full-Fledged Modern Web Application & Digital Commerce Portal",
    category: "ecommerce",
    categoryName: "E-Commerce & Web",
    status: "Production Live",
    statusColor: "cyan",
    image: "assets/images/project-ecommerce.jpg",
    featured: true,
    year: "2025",
    summary: "Comprehensive digital marketplace web platform featuring catalog discovery, real-time cart state, and responsive checkout experiences.",
    description: "A full-scale commercial web application offering fast product browsing, secure session persistence, fluid mobile-first layouts, and integrated payment gateway flows.",
    highlights: [
      "100% responsive fluid interface optimized for mobile shopping and fast checkout",
      "Interactive cart drawer and dynamic order calculation with live tax and shipping",
      "Production deployment on Vercel edge network with continuous deployment",
      "Structured product schema for high SEO discoverability"
    ],
    techStack: ["React", "JavaScript", "Vercel", "REST APIs", "Modern CSS3"],
    metrics: [
      { label: "Deployment", value: "Vercel Live" },
      { label: "Performance", value: "98/100" },
      { label: "Platform", value: "Web App" },
      { label: "Uptime", value: "99.9%" }
    ],
    liveUrl: "https://marketai-smoky.vercel.app",
    githubUrl: "https://github.com/Ayoola1o/9jaflavor",
    architecture: "Single Page Application (SPA) architecture deployed on Vercel with modern reactive client state management and modular REST endpoints."
  }
];

// Technical Capabilities Matrix
const technicalSkills = [
  {
    category: "Full-Stack Web Engineering",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    description: "Building responsive, accessible, high-framerate web applications and interactive UIs.",
    skills: ["TypeScript / JavaScript", "React / Next.js", "Modern HTML5 & CSS3", "Responsive Architecture", "State Management", "WebSockets / Realtime", "Performance Tuning"]
  },
  {
    category: "Backend & Systems Architecture",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    description: "Designing scalable APIs, low-latency data pipelines, and quantitative trading systems.",
    skills: ["Python (FastAPI, Flask)", "Node.js", "C / Low-Level Programming", "PostgreSQL / TimescaleDB", "RESTful & WebSocket APIs", "Distributed Queues", "Auth & RBAC"]
  },
  {
    category: "AI, FinTech & DevOps",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
    description: "Predictive machine learning models, quantitative finance, cloud deployment, and CI/CD.",
    skills: ["Machine Learning & Scikit-Learn", "Quantitative Analysis", "Docker Containerization", "Vercel / Cloud Edge", "CI/CD & GitHub Actions", "System Engineering & DevOps", "Git Workflow"]
  }
];

// Experience / Milestone Timeline
const careerJourney = [
  {
    period: "2024 — Present",
    role: "Full-Stack Engineer & AI Systems Developer",
    organization: "Independent Software & FinTech Development",
    description: "Architected and shipped production web applications including AI Market Tracker, AI Quant algorithmic trading frameworks, and cloud-hosted platforms serving active users.",
    badges: ["AI / ML", "Full-Stack Web", "Quantitative Systems", "TypeScript / Python"]
  },
  {
    period: "2022 — 2024",
    role: "Full-Stack Software Engineering & DevOps",
    organization: "ALX Software Engineering Program",
    description: "Mastered low-level systems engineering in C, backend microservices, Linux systems administration, DevOps automation, and scalable web architectures.",
    badges: ["C Programming", "Linux / Bash", "DevOps & CI/CD", "Web Architecture"]
  }
];
