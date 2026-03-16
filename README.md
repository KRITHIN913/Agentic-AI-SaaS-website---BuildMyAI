# BuildMyAI — Agentic AI SaaS Website

[![License: MIT](https://img.shields.io/badge/license-MIT-2185d0?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![GitHub Stars](https://img.shields.io/github/stars/KRITHIN913/Agentic-AI-SaaS-website---BuildMyAI?color=2185d0&style=flat-square)](https://github.com/KRITHIN913/Agentic-AI-SaaS-website---BuildMyAI/stargazers)

> **The Smartest Way to Manage Your Day — Stop Paying for Tasks, Start Investing in a Solution.**

BuildMyAI is a full-stack Agentic AI SaaS platform that connects businesses and professionals with fine-tuned AI Virtual Assistants and expert development services. Built to be production-ready, blazing fast, and visually stunning out of the box.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Services](#services)
- [AI Verticals](#ai-verticals)
- [Pages & Routes](#pages--routes)
- [Get Started](#get-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Community](#community)
- [Contributing](#contributing)
- [License](#license)

---

## About

**BuildMyAI** is an open-source Agentic AI SaaS website built to showcase and deliver AI-powered services for businesses of all sizes. The platform features:

- A **platform of specialized Virtual Assistants** using advanced fine-tuned models to automate daily administrative tasks for professionals.
- A range of **dedicated AI coaches** providing expert guidance in startups, health, and finance.
- **Enterprise-grade development services** — from full-stack web apps to mobile, database design, and precision engineering.

The missions is to provide intelligent, on-demand support for every part of your life and career.

Built with **Next.js 15 App Router**, **Supabase**, **Drizzle ORM**, and animated with **Framer Motion** — this codebase is a reference-quality production template for modern SaaS.

---

## Features

- ⚡ **App Router + Server Components** — Next.js 15 with full RSC support
- 🔐 **Authentication** — Supabase Auth with secure session management via `jose` JWT
- 🗄️ **Database** — Drizzle ORM with PostgreSQL (Supabase) and type-safe schema
- 🎨 **UI System** — Radix UI primitives + shadcn/ui + TailwindCSS
- 🌀 **Animations** — Framer Motion page transitions, viewport-triggered counters, timeline charts
- 🌍 **Internationalization** — Language context provider with Google Translate integration
- 🌗 **Dark/Light Mode** — System-preference-aware theme with `next-themes`
- 📊 **Dashboard** — Analytics charts powered by Recharts
- 📩 **Consultation Flow** — Multi-step inquiry wizard with email dispatch
- 📱 **Fully Responsive** — Mobile-first design with Tailwind breakpoints
- 🔗 **OpenGraph SEO** — Full `og:` meta coverage baked into `layout.tsx`
- 🏢 **Business Profile Header** — Contextual floating identity header
- 🎥 **Video Backgrounds** — Ambient fullscreen video hero with overlay effects
- 🌐 **Spinning Earth + Code Rain** — Immersive canvas-based background effects
- 🧩 **Modular Architecture** — Each page and section is fully isolated and composable

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + Radix UI |
| Animations | Framer Motion |
| Auth | Supabase Auth + jose JWT |
| Database | Supabase PostgreSQL |
| ORM | Drizzle ORM |
| UI Components | shadcn/ui + Radix Primitives |
| Charts | Recharts |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Forms | React Hook Form + Zod |
| Carousel | Embla Carousel |
| Toast | Sonner |

---

## Services

BuildMyAI offers six core development service verticals:

| Service | Timeline | Price Range | Focus |
|---|---|---|---|
| 🌐 **Enterprise Web Development** | 8–16 weeks | $15K–$200K | Scalable cloud apps, APIs, 99.9% uptime |
| 📱 **Mobile App Development** | 10–20 weeks | $25K–$150K | Native iOS & Android, App Store ready |
| ⚙️ **Precision Engineering** | 6–12 weeks | $10K–$100K | CAD/CAM, FEA Analysis, 3D Printing |
| 💻 **Custom Software Solutions** | 12–24 weeks | $20K–$180K | Workflow automation, legacy modernization |
| 🗃️ **Database Solutions** | 4–10 weeks | $8K–$75K | Architecture, cloud migration, analytics |
| 🎨 **UI/UX Design** | 3–8 weeks | $5K–$50K | User research, prototyping, design systems |

---

## AI Verticals

BuildMyAI's intelligent Virtual Assistants specialize in:

- 🏥 **Healthcare** — Medical admin automation, scheduling, and reminders
- 📅 **Administrative** — Calendar management, correspondence, task delegation
- 💰 **Finance** — Budgeting, expense tracking, and financial planning guidance
- ⚡ **Productivity** — Deep work optimization, focus tools, smart scheduling
- 🚀 **Startup** — Fundraising prep, pitch coaching, go-to-market guidance
- 🤖 **Virtual Assistant** — General-purpose AI assistant for daily tasks

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Hero landing page with animated background, expertise section, services viewport |
| `/services` | Detailed service offerings with interactive service showcase carousel |
| `/portfolio` | Showcase of past projects and delivered work |
| `/consultation` | Free consultation booking — multi-step wizard |
| `/dashboard` | Client analytics dashboard with Recharts |
| `/clientele` | Enterprise clients and partners listing |
| `/partnership` | Partnership & collaboration inquiries |
| `/support` | Help center and ticket flow |
| `/contact` | Contact form and direct links |
| `/process` | Methodology: Discovery → Concept → Execution |
| `/corporate-login` | Corporate authentication portal |

---

## Get Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project (free tier works)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repo
git clone https://github.com/KRITHIN913/Agentic-AI-SaaS-website---BuildMyAI.git
cd Agentic-AI-SaaS-website---BuildMyAI

# Install dependencies
npm install

# Set up your environment variables (see below)
cp .env.example .env

# Push database schema
npm run db:push

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout with metadata & providers
│   ├── dashboard/          # Client analytics dashboard
│   ├── services/           # Service offerings
│   ├── portfolio/          # Portfolio showcase
│   ├── consultation/       # Consultation booking wizard
│   ├── clientele/          # Client listing
│   ├── partnership/        # Partnership page
│   ├── support/            # Support & help center
│   ├── contact/            # Contact page
│   └── process/            # Process methodology
│
├── components/             # Shared React components
│   ├── expertise-section   # Stats, charts, service selector
│   ├── services-section    # Animated service carousel
│   ├── services-viewport   # Scroll-triggered service showcase
│   ├── nav-bar             # Global navigation
│   ├── footer              # Site footer
│   ├── dashboard-chart     # Recharts dashboard component
│   ├── code-rain           # Matrix-style canvas background
│   ├── spinning-earth      # Animated globe effect
│   ├── typing-hero         # Typewriter hero text
│   ├── profile-dropdown    # Auth-aware profile menu
│   └── ui/                 # shadcn/ui component library
│
├── lib/                    # Utilities, DB client, auth helpers
├── actions/                # Next.js Server Actions
├── hooks/                  # Custom React hooks
├── contexts/               # React context providers (language, etc.)
├── styles/                 # Global CSS
├── public/                 # Static assets (images, videos)
├── drizzle.config.ts       # Drizzle ORM config
└── migrate.ts              # Database migration runner
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database
DATABASE_URL=your_postgresql_connection_string

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Community

- 🌐 [Visit BuildMyAI Website](https://buildmyai.com)
- 💬 [Open an Issue](https://github.com/KRITHIN913/Agentic-AI-SaaS-website---BuildMyAI/issues/new)
- ⭐ [Star this repo](https://github.com/KRITHIN913/Agentic-AI-SaaS-website---BuildMyAI/stargazers) to help others discover it

---

## Contributing

Contributions are welcome! Whether you're fixing a bug, adding a feature, or improving docs:

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please make sure all code is formatted with TypeScript and follows the existing code style.

---

## License

BuildMyAI is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ to make AI accessible for every business.</sub>
</div>
