# Tech Solve Engine — Company Website

A modern, multi-page company website for **TECH SOLVE ENGINE**, a strategic technology partner that designs, builds, secures, and operates technology infrastructure for businesses.

🔗 **Live Site**: [https://www.techsolveengine.com/](https://www.techsolveengine.com/)

## 🚀 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|--------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.4.5 | Type Safety |
| React Router | v7.13.0 | Multi-page Navigation |
| Tailwind CSS | v4.1.12 | Styling |
| Motion | 12.23.24 | Animations |
| Lucide React | 0.487.0 | Icons |
| Vite | 6.3.5 | Build Tool |

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with animations, services, case studies, CTA |
| `/approach` | Approach | TSE methodology, architecture philosophy |
| `/solutions` | Solutions | Full service catalog with capabilities |
| `/case-studies` | Case Studies | Real client outcomes and business impact |
| `/iso-27001` | ISO 27001 | Security framework and advisory services |
| `/global-expansion` | Global Expansion | India market entry support |
| `/about` | About | Company story, philosophy, commitments |
| `/contact` | Contact | Contact form with service interest selection |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Root app with RouterProvider
│   ├── Root.tsx                   # Layout wrapper with Header & Footer
│   ├── routes.tsx                 # React Router configuration
│   ├── components/
│   │   ├── Header.tsx             # Sticky navigation with mobile menu
│   │   ├── Footer.tsx             # Site footer with links & contact
│   │   └── figma/
│   │       └── ImageWithFallback.tsx  # Image component with error fallback
│   └── pages/
│       ├── Home.tsx              # Landing page with hero & all sections
│       ├── Approach.tsx          # TSE methodology page
│       ├── Solutions.tsx         # Technology solutions catalog
│       ├── CaseStudies.tsx       # Client success stories
│       ├── ISO27001.tsx          # ISO 27001 certification page
│       ├── GlobalExpansion.tsx   # India expansion support
│       ├── About.tsx             # Company about page
│       ├── Contact.tsx           # Contact form page
│       └── NotFound.tsx          # 404 page
└── styles/
    ├── index.css              # Main CSS entry point
    ├── theme.css              # Design tokens & color theme
    ├── tailwind.css           # Tailwind imports
    └── fonts.css              # Font imports
```

## ✨ Features

### Hero Section
- Animated gradient background with floating blur elements
- Motion-powered entrance animations (fade + slide)
- Animated stats counter display (20+ years, 99.9% uptime, 86% cost savings)
- Floating cards with ISO 27001 and Fast Deployment badges
- Scroll indicator animation
- Dual CTA buttons

### Micro Animations
- Scroll-triggered section animations with `whileInView`
- Card hover effects with y-axis translation
- Icon rotation on hover (360°)
- Staggered list item animations
- Arrow button slide animations

### Design System
- **Primary**: `#1e40af` (blue-700)
- **Secondary**: `#0ea5e9` (sky-500)
- **Accent**: `#0284c7` (cyan-600)
- Professional blue gradient theme
- Clean sans-serif typography
- Minimal, engineering-focused aesthetic

### Pages
- **Home**: Full landing page with Hero, Trust, Services (7 cards), Approach, Case Studies Preview, Security, Global Expansion, Why TSE, CTA
- **Solutions**: Complete 7-service catalog with capability lists
- **Case Studies**: 4 detailed real-world case studies with metrics
- **ISO 27001**: Security framework, capabilities, certification pathway
- **Global Expansion**: India market entry support services
- **About**: Company story, philosophy, journey, commitments
- **Contact**: Lead capture form with role and service interest

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/venu-shivalingappa/tse-company-website.git
cd tse-company-website

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Target Audience

- **Primary**: Founders, CEOs, CTOs, CIOs, Enterprise decision makers
- **Secondary**: International companies expanding into India, growing businesses scaling technology infrastructure

## 📊 Key Metrics (from Case Studies)

- **86%** cost reduction (₹18L → ₹2.5L infrastructure optimization)
- **400+** employees supported (Oben Electric scaling)
- **₹11L** annual productivity loss eliminated (Enterprise WiFi)
- **99.9%** uptime target
- **3-5 years** architecture lifespan

---

**© 2026 Tech Solve Engine. All rights reserved.**

> *"Choosing TSE was the right technology decision for our organization."*
