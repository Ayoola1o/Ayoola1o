// Web Applications Showcase Data — Ayoola Adebisi (Ayoola1o)
const portfolioProjects = [
  {
    id: "smarkquant",
    title: "SmarkQuant AI",
    tagline: "Automated Quantitative Trading, Backtesting & Strategy Optimization Platform",
    category: "saas",
    categoryName: "SaaS & Full-Stack",
    status: "Production Live",
    statusColor: "emerald",
    image: "assets/images/project-saas.jpg",
    featured: true,
    year: "2026",
    summary: "Sophisticated quantitative trading engine with historical backtesting, Optuna hyperparameter tuning, and real-time visual analytics.",
    description: "SmarkQuant empowers traders and quants to build, backtest, and automate trading strategies at scale. It combines a high-performance Python analytics core with a modern Next.js dashboard, integrating seamlessly with the Jesse quantitative framework for real-world market execution.",
    highlights: [
      "Sub-second algorithmic backtesting over high-resolution historical candle data",
      "Automated strategy hyperparameter optimization powered by Optuna",
      "Interactive visual analytics powered by Recharts, Framer Motion, and Tailwind CSS",
      "Containerized microservice architecture orchestrated via Docker Compose"
    ],
    techStack: ["Next.js", "React", "Python (Jesse/Optuna)", "Tailwind CSS", "Docker", "Recharts"],
    metrics: [
      { label: "Backtest Speed", value: "<1.2s" },
      { label: "Strategies Tested", value: "350+" },
      { label: "Architecture", value: "Docker / Next.js" },
      { label: "Uptime SLA", value: "99.98%" }
    ],
    liveUrl: "https://smarkquant.vercel.app",
    githubUrl: "https://github.com/Ayoola1o/SmarkQuant",
    architecture: "Next.js edge frontend hosted on Vercel communicating with containerized Python backend running Optuna hyperparameter search and Jesse quant execution."
  },
  {
    id: "huntiq",
    title: "HUNTIQ Intelligence",
    tagline: "AI Threat & OSINT Intelligence Discovery Platform",
    category: "ai",
    categoryName: "AI & ML Systems",
    status: "Production Live",
    statusColor: "violet",
    image: "assets/images/project-ai.jpg",
    featured: true,
    year: "2026",
    summary: "Real-time threat discovery and digital footprint intelligence engine with automated reconnaissance and sub-second asset search.",
    description: "HUNTIQ is a proactive security intelligence platform designed for researchers and analysts. It monitors exposed web assets, identifies vulnerabilities, and correlates OSINT threat feeds into an actionable security posture overview.",
    highlights: [
      "Continuous ingestion and correlation of threat intelligence and digital footprint assets",
      "Interactive investigation dashboard with live filtering and visual risk scoring",
      "Sub-100ms response times on broad asset search queries",
      "Responsive glassmorphic UI optimized for desktop security analysts"
    ],
    techStack: ["TypeScript", "Next.js", "React", "OSINT Feeds", "Tailwind CSS", "REST APIs"],
    metrics: [
      { label: "Active Threat Feeds", value: "50+" },
      { label: "Query P95 Latency", value: "65ms" },
      { label: "Hosting", value: "Vercel Edge" },
      { label: "Reliability", value: "99.9%" }
    ],
    liveUrl: "https://huntiq-drab.vercel.app",
    githubUrl: "https://github.com/Ayoola1o/HUNTIQ",
    architecture: "Serverless Next.js architecture hosted on Vercel with streaming data connectors and low-latency API proxying."
  },
  {
    id: "email-scraper",
    title: "Email Scraper & Lead Engine",
    tagline: "High-Throughput Web Email Extraction & Lead Generation Tool",
    category: "productivity",
    categoryName: "Productivity & Tools",
    status: "Production Live",
    statusColor: "cyan",
    image: "assets/images/project-ecommerce.jpg",
    featured: true,
    year: "2026",
    summary: "Open-source TypeScript library and web tool extracting verified emails from single pages or entire website crawl trees.",
    description: "Designed for growth teams and developers, Email Scraper automates lead discovery across both static web pages and modern dynamic JavaScript single-page apps. It features dual extraction pipelines (HTTP and headless Playwright) for 100% crawl coverage.",
    highlights: [
      "Dual pipeline: Fast HTTP for static HTML + Playwright cluster for JS-rendered SPAs",
      "Dual interface: Command-line CLI tool and responsive web UI with CSV/JSON exports",
      "Advanced heuristics bypassing email obfuscation, anti-bot walls, and mailto filters",
      "Configurable crawl depth, domain boundary filters, and automated rate-limiting"
    ],
    techStack: ["TypeScript", "Node.js 20+", "Playwright", "Puppeteer", "Tailwind CSS"],
    metrics: [
      { label: "Extraction Rate", value: "98.5%" },
      { label: "Engines", value: "HTTP & Playwright" },
      { label: "License", value: "MIT Open Source" },
      { label: "Avg Crawl Speed", value: "<1.5s" }
    ],
    liveUrl: "https://emailfinder-sigma.vercel.app",
    githubUrl: "https://github.com/Ayoola1o/email-scraper",
    architecture: "TypeScript runtime utilizing Cheerio for lightning-fast DOM traversal and Playwright headless browser instances for single-page applications."
  },
  {
    id: "aitrader",
    title: "AI Quant Trader",
    tagline: "Autonomous Agent-Driven Crypto & Equity Trading Terminal",
    category: "ai",
    categoryName: "AI & ML Systems",
    status: "Production Live",
    statusColor: "amber",
    image: "assets/images/project-devflow.jpg",
    featured: true,
    year: "2026",
    summary: "Next.js 14 algorithmic trading workspace integrated with Supabase realtime persistence and AI SDK natural language querying.",
    description: "AI Quant Trader bridges artificial intelligence with automated order execution. Traders can query historical patterns and execute autonomous trading signals via an interactive natural language interface connected to Supabase and live exchange APIs.",
    highlights: [
      "Sub-30ms state synchronization using Supabase realtime WebSocket subscriptions",
      "Natural language financial assistant powered by the Vercel AI SDK",
      "Real-time orderbook and portfolio PnL visualization using custom charting components",
      "Fine-grained risk parameters, stop-loss triggers, and automated position rebalancing"
    ],
    techStack: ["Next.js 14", "React", "Supabase", "Vercel AI SDK", "Python", "Lucide React"],
    metrics: [
      { label: "State Sync", value: "<30ms" },
      { label: "Database", value: "Supabase" },
      { label: "Framework", value: "Next.js 14" },
      { label: "Uptime", value: "99.9%" }
    ],
    liveUrl: "https://github.com/Ayoola1o/Aitrader",
    githubUrl: "https://github.com/Ayoola1o/Aitrader",
    architecture: "Full-stack Next.js App Router frontend with Supabase Postgres auth & realtime table subscriptions, calling asynchronous Python quantitative risk engines."
  },
  {
    id: "webosint",
    title: "WebOSINT Reconnaissance",
    tagline: "Digital Footprint Mapping & Web Asset Reconnaissance Tool",
    category: "productivity",
    categoryName: "Productivity & Tools",
    status: "Production Live",
    statusColor: "violet",
    image: "assets/images/ai_platform_1789858813270.jpg",
    featured: true,
    year: "2025",
    summary: "Automated reconnaissance tool mapping subdomains, DNS topology, and exposed digital footprint assets for cybersecurity professionals.",
    description: "WebOSINT simplifies open-source intelligence collection by correlating scattered data points into structured threat maps. It automates domain lookups, IP mapping, and SSL certificate queries into clean, exportable reports.",
    highlights: [
      "Automated subdomain enumeration, DNS record tracking, and WHOIS intelligence",
      "Concurrent request engine minimizing scan durations without triggering rate limits",
      "Structured output exportable in JSON, CSV, and markdown executive reports",
      "Modular design allowing seamless integration into CI/CD security pipelines"
    ],
    techStack: ["TypeScript", "Node.js", "OSINT Modules", "DNS APIs", "REST"],
    metrics: [
      { label: "Recon Modules", value: "18+" },
      { label: "Scan Time", value: "<8s" },
      { label: "Language", value: "TypeScript" },
      { label: "Format", value: "JSON / CSV" }
    ],
    liveUrl: "https://github.com/Ayoola1o/webosint",
    githubUrl: "https://github.com/Ayoola1o/webosint",
    architecture: "Event-driven asynchronous Node.js worker pipeline aggregating public OSINT endpoints with exponential backoff and localized caching."
  }
];

// Technical Capabilities Matrix
const technicalSkills = [
  {
    category: "Frontend Engineering",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    description: "Building responsive, accessible, high-framerate web applications with modern frameworks.",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Modern CSS & Flex/Grid", "Framer Motion", "Recharts", "WebSockets / Realtime"]
  },
  {
    category: "Backend & Distributed Systems",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    description: "Designing scalable REST APIs, automated scraping pipelines, and quantitative backends.",
    skills: ["Node.js / Express", "Python (FastAPI)", "Playwright / Puppeteer", "Supabase / PostgreSQL", "Docker & Compose", "REST & GraphQL APIs", "JWT / Auth"]
  },
  {
    category: "AI, Quant & Cloud Infrastructure",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22-v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
    description: "Developing quantitative trading strategies, AI agent integrations, and serverless edge deployments.",
    skills: ["Quantitative Backtesting", "Optuna Optimization", "Vercel AI SDK / LLMs", "OSINT Intelligence", "Vercel / Edge Deployment", "Git & CI/CD Pipelines"]
  }
];

// Experience / Milestone Timeline
const careerJourney = [
  {
    period: "2024 — Present",
    role: "Full-Stack Web & Systems Developer",
    organization: "Independent Software & Systems Builder",
    description: "Architecting and deploying production web applications spanning quantitative trading platforms (SmarkQuant), cyber intelligence hubs (HUNTIQ), and high-throughput automated scrapers (Email Scraper).",
    badges: ["Next.js", "TypeScript", "Python", "Supabase", "Docker", "Vercel Edge"]
  },
  {
    period: "2023 — 2024",
    role: "Web Application & Software Engineer",
    organization: "Web & CBT Systems Development",
    description: "Engineered scalable computer-based testing (CBT) systems, interactive portals, and web utilities delivering sub-second response times and high availability.",
    badges: ["Full-Stack", "JavaScript", "Database Design", "Security & Auth"]
  },
  {
    period: "2021 — 2023",
    role: "Software Engineering & Systems Foundation",
    organization: "ALX Software Engineering Program",
    description: "Comprehensive software engineering curriculum covering low-level C programming, DevOps, Linux system administration, and distributed architecture.",
    badges: ["C", "Linux / Bash", "DevOps", "Data Structures & Algorithms"]
  }
];
