// Web Applications Showcase Data
const portfolioProjects = [
  {
    id: "pulsemetrics",
    title: "PulseMetrics AI",
    tagline: "Real-Time Enterprise SaaS Analytics & Revenue Forecasting Platform",
    category: "saas",
    categoryName: "SaaS & Full-Stack",
    status: "Production Live",
    statusColor: "emerald",
    image: "assets/images/project-saas.jpg",
    featured: true,
    year: "2025",
    summary: "High-throughput cloud analytics engine processing 14M+ daily telemetry events with predictive ARR/MRR forecasting and real-time customer churn alerts.",
    description: "PulseMetrics AI was built to solve the fragmentation in B2B subscription monitoring. It ingests Stripe, Paddle, and custom webhook events through a Kafka pipeline, computes rolling retention cohorts, and renders sub-second interactive heatmaps and metrics widgets.",
    highlights: [
      "Sub-second aggregation queries over 50M+ rows using TimescaleDB & Redis caching",
      "Interactive data visualization built with WebGL & Canvas for zero dropped frames",
      "Automated predictive forecasting with 94.2% accuracy on 90-day churn",
      "Multi-tenant workspace architecture with granular role-based access control (RBAC)"
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "TimescaleDB", "Redis", "Tailwind CSS", "Docker"],
    metrics: [
      { label: "Active Organizations", value: "240+" },
      { label: "Daily Ingested Events", value: "14M+" },
      { label: "Query P95 Latency", value: "85ms" },
      { label: "Uptime SLA", value: "99.98%" }
    ],
    liveUrl: "https://pulsemetrics-demo.example.com",
    githubUrl: "https://github.com/example/pulsemetrics-ai",
    architecture: "Event-driven microservices: Next.js frontend deployed on Vercel edge nodes, Go webhook ingestion gateway, TimescaleDB for time-series persistence, and Redis pub/sub for real-time WebSocket feeds."
  },
  {
    id: "neuralforge",
    title: "NeuralForge Studio",
    tagline: "Visual Multi-Agent Prompt Orchestration & LLM Pipeline IDE",
    category: "ai",
    categoryName: "AI & ML Systems",
    status: "Active Beta",
    statusColor: "violet",
    image: "assets/images/project-ai.jpg",
    featured: true,
    year: "2025",
    summary: "Visual canvas environment allowing engineering teams to design, benchmark, and deploy multi-model AI agent workflows with zero boilerplate.",
    description: "NeuralForge Studio eliminates brittle Python glue code for complex prompt chaining. Developers visually connect embeddings, vector stores, prompt nodes, and LLM reasoning steps with real-time token telemetry and side-by-side model benchmarking.",
    highlights: [
      "Custom node-graph editor supporting dynamic execution loops and conditional branching",
      "Unified adapter layer supporting OpenAI, Anthropic, Gemini, and local Ollama models",
      "Streaming token diffing with interactive temperature and Top-P live preview sliders",
      "Automated evaluation suites measuring hallucination rates, latency, and token cost"
    ],
    techStack: ["React 19", "FastAPI", "Python", "Qdrant Vector DB", "WebSockets", "CSS Modules"],
    metrics: [
      { label: "Pipeline Executions", value: "1.2M+" },
      { label: "Avg Token Savings", value: "32%" },
      { label: "Supported Models", value: "18+" },
      { label: "GitHub Stars", value: "2.4k" }
    ],
    liveUrl: "https://neuralforge.example.com",
    githubUrl: "https://github.com/example/neuralforge-studio",
    architecture: "React Flow front-end connected via WebSockets to an asynchronous Python FastAPI runtime. Workflows execute asynchronously in Celery workers with vector semantic cache layers."
  },
  {
    id: "agileflow",
    title: "AgileFlow Collaborative",
    tagline: "Ultra-Fast Real-Time Kanban & Sprint Execution Workspace",
    category: "productivity",
    categoryName: "Productivity & Tools",
    status: "Production Live",
    statusColor: "amber",
    image: "assets/images/project-devflow.jpg",
    featured: true,
    year: "2024",
    summary: "Frictionless agile project management web app with multiplayer cursor presence, optimistic updates, and bidirectional GitHub/GitLab issue synchronization.",
    description: "Designed for high-velocity software engineering teams that find Jira sluggish. AgileFlow provides a 60fps keyboard-driven kanban board that syncs across teammates in under 30 milliseconds using conflict-free replicated data types (CRDTs).",
    highlights: [
      "Zero-latency drag-and-drop powered by HTML5 Drag API and optimistic state trees",
      "Multiplayer live collaboration with shared presence, avatars, and live typing indicators",
      "Bi-directional webhook sync with GitHub Issues, PRs, and commit references",
      "Complete offline-first support via IndexedDB with automatic background conflict reconciliation"
    ],
    techStack: ["Vue.js 3", "Node.js", "WebSockets", "PostgreSQL", "IndexedDB", "Tailwind CSS"],
    metrics: [
      { label: "Sync Latency", value: "<30ms" },
      { label: "Daily Active Users", value: "18.5k" },
      { label: "Tasks Completed", value: "890k+" },
      { label: "Customer CSAT", value: "4.9/5" }
    ],
    liveUrl: "https://agileflow.example.com",
    githubUrl: "https://github.com/example/agileflow-collaborative",
    architecture: "Optimistic UI state with Yjs CRDTs over secure WebSockets. Distributed Node.js backend using Redis cluster for horizontal room routing and PostgreSQL for persistent snapshots."
  },
  {
    id: "velour",
    title: "Velour Luxury Commerce",
    tagline: "Headless Luxury E-Commerce with Sub-100ms Instant Checkout",
    category: "ecommerce",
    categoryName: "E-Commerce",
    status: "Production Live",
    statusColor: "cyan",
    image: "assets/images/project-ecommerce.jpg",
    featured: true,
    year: "2024",
    summary: "Architected a luxury timepiece e-commerce flagship featuring dynamic product 3D config, micro-animations, and integrated Stripe 1-Click payment flows.",
    description: "Velour pairs high-end editorial aesthetics with extreme performance engineering. Built on a headless architecture, it achieves 100/100 Google Lighthouse audit scores while rendering high-res interactive product showcases and instant cart slides.",
    highlights: [
      "100/100 Lighthouse Performance, Accessibility, and Best Practices scores",
      "Edge-rendered dynamic inventory counters with global CDN geolocation pricing",
      "One-click frictionless checkout integrating Apple Pay, Google Pay, and Stripe Elements",
      "Fluid glassmorphic cart drawer with persistent guest-to-account migration"
    ],
    techStack: ["Next.js", "TypeScript", "Shopify Storefront API", "Stripe SDK", "CSS3 Glass"],
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Mobile Traffic", value: "72%" }
    ],
    liveUrl: "https://velour-luxury.example.com",
    githubUrl: "https://github.com/example/velour-headless-store",
    architecture: "Static Site Generation (SSG) with Incremental Static Regeneration (ISR) on Cloudflare Edge. Cart state handled via local state synced to Shopify Storefront GraphQL endpoints."
  }
];

// Technical Capabilities Matrix
const technicalSkills = [
  {
    category: "Frontend Engineering",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    description: "Building responsive, accessible, high-framerate web applications with modern frameworks.",
    skills: ["React 19 / Next.js", "TypeScript", "Vue.js 3", "Modern CSS & Flex/Grid", "Zustand & Redux", "WebSockets / Realtime", "Performance Optimization"]
  },
  {
    category: "Backend & Distributed Systems",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    description: "Designing scalable REST, GraphQL, and event-driven APIs with robust security and throughput.",
    skills: ["Node.js / Express", "Python (FastAPI)", "Go (Golang)", "PostgreSQL / TimescaleDB", "Redis Caching", "Kafka Event Pipelines", "JWT / OAuth2 / RBAC"]
  },
  {
    category: "AI & Cloud Infrastructure",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22-v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
    description: "Integrating modern LLMs, vector search, continuous deployment, and containerized cloud setups.",
    skills: ["LLM Chaining & RAG", "Vector DBs (Qdrant/Pinecone)", "Docker & Containers", "CI/CD (GitHub Actions)", "Vercel / Cloudflare / AWS", "Git & Code Quality"]
  }
];

// Experience / Milestone Timeline
const careerJourney = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack & Systems Engineer",
    organization: "Independent Software Studio / Contract",
    description: "Lead end-to-end development of customer-facing web applications, enterprise SaaS platforms, and AI-driven workflow engines. Shipped 4 major production applications serving 70k+ monthly active users.",
    badges: ["Full-Stack Architecture", "System Design", "Cloud Infrastructure", "Client Delivery"]
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Web Developer",
    organization: "Nexus Tech Solutions",
    description: "Spearheaded frontend rebuild of core telemetry dashboard into Next.js, reducing bundle size by 44% and lowering average page load latency under 1 second.",
    badges: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs", "Micro-frontends"]
  },
  {
    period: "2019 — 2021",
    role: "Frontend Software Engineer",
    organization: "Hyperion Digital",
    description: "Designed responsive user interfaces, design systems, and state architectures for high-traffic client web applications. Mentored junior developers in accessibility and automated testing.",
    badges: ["React", "JavaScript ES6+", "UI/UX Design", "Performance Auditing"]
  }
];
