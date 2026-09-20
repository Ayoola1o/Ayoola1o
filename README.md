# Developer Web Application Portfolio & Showcase

A modern, high-performance web developer portfolio built to showcase production web applications, live demo links, source code repositories, and system architecture breakdowns.

---

## 🚀 Quick Start (Run Locally)

You can run this portfolio locally with any static web server:

### Option 1: Python
```bash
# Inside C:\Users\ASUS\.gemini\antigravity-ide\scratch\personal-portfolio
python -m http.server 8080
```
Then visit: `http://localhost:8080`

### Option 2: Node / npx
```bash
npx serve .
```

---

## 🛠️ How to Add or Edit Your Web Applications

All project information is centralized in **[`js/projects-data.js`](file:///C:/Users/ASUS/.gemini/antigravity-ide/scratch/personal-portfolio/js/projects-data.js)**. You never have to write repetitive HTML for new projects.

To add a new web application, append an object to the `portfolioProjects` array:

```javascript
{
  id: "my-webapp",
  title: "My Web Application",
  tagline: "High-speed AI summary platform for engineers",
  category: "saas", // "saas" | "ai" | "productivity" | "ecommerce"
  categoryName: "SaaS & Full-Stack",
  status: "Production Live", // e.g., "Production Live", "Active Beta"
  statusColor: "emerald", // "emerald" | "violet" | "amber" | "cyan"
  image: "assets/images/my-app-screenshot.jpg",
  featured: true,
  year: "2025",
  summary: "Brief 1-2 sentence description visible on the card.",
  description: "Detailed problem statement and solution displayed in the modal.",
  highlights: [
    "Processed over 500,000 queries in the first month",
    "Sub-100ms response times with Redis caching",
    "Stripe automated subscription integration"
  ],
  techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
  metrics: [
    { label: "Active Users", value: "1,200+" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Latency", value: "65ms" },
    { label: "GitHub Stars", value: "320" }
  ],
  liveUrl: "https://your-live-demo-url.com",    // <-- Your live web app URL
  githubUrl: "https://github.com/your-username/repo", // <-- Your GitHub repository
  architecture: "Edge-rendered Next.js frontend with FastAPI backend and Redis pub/sub queue."
}
```

---

## 🎨 Customizing Your Personal Details

In **[`index.html`](file:///C:/Users/ASUS/.gemini/antigravity-ide/scratch/personal-portfolio/index.html)**:
- **Developer Name & Headline**: Update lines in the `<header>` and the `<section class="hero-section">`.
- **Avatar Photo**: Replace `assets/images/avatar.jpg` with your profile picture.
- **Email Address**: Update the text inside `<span id="email-address-text">` to your real contact email.
- **Social Links**: Update the GitHub, LinkedIn, and X profile URLs in the `#contact` section.

In **[`js/projects-data.js`](file:///C:/Users/ASUS/.gemini/antigravity-ide/scratch/personal-portfolio/js/projects-data.js)**:
- **Skills Matrix**: Edit `technicalSkills` array to list your frontend, backend, and cloud strengths.
- **Career Journey**: Edit `careerJourney` array to list your work milestones and experience.

---

## 🌐 Deploying to the Web

Because this portfolio uses pure HTML, CSS, and vanilla JS, it has **zero build step** and can be deployed in under 60 seconds:

### Deploy to GitHub Pages (Free)
1. Push this folder to a GitHub repository (e.g. `yourname/portfolio` or `yourname.github.io`).
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://yourname.github.io`!

### Deploy to Vercel (Free)
1. Run `npx vercel` inside this folder, or import your GitHub repository on [vercel.com](https://vercel.com).
2. It will automatically detect static HTML and deploy instantly with global edge CDN caching.

### Deploy to Netlify (Free)
1. Drag and drop the `personal-portfolio` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
2. It's live immediately with custom domain support and SSL!
