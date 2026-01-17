# GitHub Portfolio Project - Complete Structure & Overview

## Repository Information

- **Repository**: https://github.com/Ghanasyam20/Portfolio
- **Author**: Naresh Khatri
- **Type**: Next.js 14 Full-Stack Developer Portfolio
- **Tech Stack**: TypeScript, Next.js 14, React 18, Tailwind CSS, GSAP, Framer Motion, Spline
- **Language Breakdown**: TypeScript 97.3%, SCSS 1.4%, Other 1.3%

---

## 📁 Complete Directory Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── projects-screenshots/
│       │   ├── codingducks/
│       │   ├── couponluxury/
│       │   ├── the-booking-desk/
│       │   ├── portfolio/
│       │   ├── ghostchat/
│       │   └── jra/
│       └── seo/
│           └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata, fonts, providers
│   │   ├── page.tsx                # Main page with sections
│   │   ├── globals.css             # Global styles with CSS variables
│   │   └── (other app routes)
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx            # Hero/landing section
│   │   │   ├── skills.tsx          # Skills section with 3D keyboard
│   │   │   ├── experience.tsx      # Work experience timeline
│   │   │   ├── projects.tsx        # Projects showcase section
│   │   │   ├── contact.tsx         # Contact/email form section
│   │   │   └── section-header.tsx  # Reusable section header component
│   │   │
│   │   ├── ui/
│   │   │   ├── shadcn-io/          # Shadcn UI components folder
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── typography.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── floating-dock.tsx
│   │   │   ├── scroll-progress.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   ├── animated-modal.tsx
│   │   │   ├── 3d-pin.tsx
│   │   │   ├── ElasticCursor.tsx
│   │   │   ├── ace-input.tsx
│   │   │   ├── ace-textarea.tsx
│   │   │   ├── Header.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── header/
│   │   │   └── header.tsx          # Main navigation header
│   │   │
│   │   ├── footer/
│   │   │   └── footer.tsx          # Footer component
│   │   │
│   │   ├── social/
│   │   │   └── (social media components)
│   │   │
│   │   ├── logos/
│   │   │   └── aceternity.tsx      # Custom logo components
│   │   │
│   │   ├── theme/
│   │   │   └── (theme switcher components)
│   │   │
│   │   ├── radial-menu/
│   │   │   └── (circular menu component)
│   │   │
│   │   ├── preloader/
│   │   │   └── (loading animation)
│   │   │
│   │   ├── realtime/
│   │   │   └── (real-time features)
│   │   │
│   │   ├── ContactForm.tsx         # Contact form component
│   │   ├── Particles.tsx           # Particle animation component
│   │   ├── animated-background.tsx # Animated background with canvas
│   │   ├── animated-background-config.ts
│   │   ├── app-overlays.tsx        # Overlay components
│   │   ├── providers.tsx           # Context providers wrapper
│   │   ├── theme-provider.tsx      # Theme provider setup
│   │   ├── smooth-scroll.tsx       # Lenis smooth scrolling
│   │   ├── reveal-animations.tsx   # Scroll reveal animations
│   │   ├── scroll-down-icon.tsx    # Scroll indicator component
│   │   ├── slide-show.tsx          # Image slideshow component
│   │   ├── email-template.tsx      # Email template for contact form
│   │   ├── easter-eggs.tsx         # Easter egg components
│   │   └── nyan-cat.tsx            # Nyan cat easter egg
│   │
│   ├── data/
│   │   ├── config.ts               # PERSONAL CONFIG - Title, description, author, email, social links
│   │   ├── constants.ts            # Skills enum, experience, theme disclaimers
│   │   └── projects.tsx            # Projects data with descriptions and tech stack
│   │
│   ├── content/
│   │   └── blogs/                  # Blog content (MDX files)
│   │
│   ├── contexts/
│   │   └── (React context providers)
│   │
│   ├── hooks/
│   │   └── (Custom React hooks)
│   │
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (cn for className)
│   │   └── (other lib utilities)
│   │
│   ├── types/
│   │   └── (TypeScript type definitions)
│   │
│   └── utils/
│       └── (Utility functions)
│
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── components.json                 # Shadcn UI components config
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
├── package.json                    # Project dependencies
├── pnpm-lock.yaml                  # PNPM lock file
├── yarn.lock                       # Yarn lock file
└── README.md                       # Project description
```

---

## 🔑 Key Configuration Files

### **package.json**

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "typescript": "^5",
    "@gsap/react": "^2.1.1",
    "framer-motion": "^11.3.17",
    "tailwindcss": "^3.4.1",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-tooltip": "^1.1.2",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@splidejs/react-splide": "^0.7.12",
    "@splinetool/react-spline": "^4.0.0",
    "@splinetool/runtime": "^1.9.3",
    "three": "^0.167.1",
    "gsap": "^3.12.5",
    "lenis": "^1.1.6",
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^0.416.0",
    "react-icons": "^5.2.1",
    "next-themes": "^0.3.0",
    "socket.io-client": "^4.7.5",
    "resend": "^4.0.0",
    "zod": "^3.23.8",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.1.8",
    "motion": "^12.23.24",
    "gray-matter": "^4.0.3",
    "next-mdx-remote": "^5.0.0",
    "react-use-measure": "^2.1.7",
    "sass": "^1.77.8",
    "devtools-detector": "^2.0.22"
  }
}
```

### **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### **tailwind.config.ts**

- Uses CSS variables for colors
- Dark mode with class-based toggle
- Custom animations (accordion-up/down)
- Radix UI color scheme
- Custom fonts: `--font-sans`, `--font-display`

### **next.config.mjs**

```javascript
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
```

---

## 📊 Data Files (PERSONAL CONTENT)

### **src/data/config.ts** - MAIN CONFIG FILE

```typescript
const config = {
  title: "Naresh Khatri | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer...",
    short: "Discover the portfolio of Naresh, a full-stack developer...",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Naresh Khatri",
  email: "naresh.khatri2345@gmail.com",
  site: "https://nareshkhatri.site",
  githubUsername: "naresh-khatri",
  githubRepo: "3d-portfolio",

  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/naresh-khatri/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Naresh-Khatri",
  },
};
```

### **src/data/constants.ts** - SKILLS & EXPERIENCE

**Skills Enum (SkillNames)**:

- Frontend: JS, TS, HTML, CSS, React, Vue, Next.js, Tailwind
- Backend: Node.js, Express, PostgreSQL, MongoDB
- Tools: Git, GitHub, Docker, AWS, Vercel, Firebase, Linux, Vim, Nginx, WordPress, Prettier, NPM

**Skills Data Structure**:
Each skill has: id, name, label, shortDescription, color, icon URL

**Experience Array**:

1. **Full Stack Engineer** (Dec 2024 - Present)
   - Company: OmniNexus
   - Stack: Next.js, TS, PostgreSQL, Docker, AWS

2. **Freelance Developer** (Apr 2022 - Dec 2024)
   - Company: Live & Learn
   - Stack: React, Node.js, MongoDB, Tailwind, WordPress

**Theme Disclaimers**: Humorous messages for light/dark mode toggle

### **src/data/projects.tsx** - FEATURED PROJECTS

#### Project Structure:

```typescript
type Project = {
  id: string;
  category: string;
  title: string;
  src: string; // thumbnail
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode; // rich markdown/JSX description
  github?: string;
  live: string;
};
```

#### Featured Projects:

1. **Coding Ducks** (Coding Platform)
   - Live: https://www.codingducks.xyz/
   - Repo: https://github.com/Naresh-Khatri/Coding-Ducks
   - Description: LeetCode + CodePen + CSS Battles platform
   - Features: Problems, Ducklets (multiplayer), UI Battles, Contests, Playground
   - Frontend: TypeScript, Next.js, Chakra UI, React Query, Firebase
   - Backend: Node.js, Express, Prisma, PostgreSQL, Socket.io

2. **Coupon Luxury** (Coupon Site)
   - Live: https://www.couponluxury.com/
   - Description: Deal aggregation and coupon site
   - Features: Stores, Categories, Custom Vue.js CMS
   - Frontend: JavaScript, Next.js, Chakra UI, Vue.js
   - Backend: Node.js, Express, Prisma, PostgreSQL, Docker

3. **The Booking Desk** (Travel Consultation)
   - Live: https://thebookingdesk.com/
   - Description: Travel consultation hub with animations
   - Features: Travel tips, Blog with Sanity CMS, 100% Lighthouse score
   - Frontend: TypeScript, Next.js, Aceternity, Tailwind
   - Backend: Sanity CMS

4. **My Portfolio** (Portfolio - This Project)
   - Live: http://nareshkhatri.vercel.app
   - Repo: https://github.com/Naresh-Khatri/Portfolio
   - Features: 3D keyboard with skills, Space theme, Projects showcase
   - Frontend: TypeScript, Next.js, ShadcN UI, Aceternity, Framer Motion, Spline, GSAP

5. **GhostChat** (Anonymous Chat)
   - Live: https://ghostchat.vercel.app
   - Repo: https://github.com/Naresh-Khatri/GhostChat
   - Description: Anonymous message sending app
   - Frontend: JavaScript, Next.js, Chakra UI
   - Backend: Supabase

6. **JNTUA Results Analyzer** (Result Analyzer)
   - Live: https://naresh-khatri.github.io/JNTUA-result-analyser-spa/
   - Features: Results retrieval, Class-wise results, Faculty downloads, CGPA calculations, Charts
   - Frontend: JavaScript, Vue.js
   - Backend: Node.js, MongoDB, Express, Docker
   - Status: Discontinued (CAPTCHA on official site)

---

## 🎨 Component Breakdown

### **Layout Components**

- `header/header.tsx` - Navigation bar
- `footer/footer.tsx` - Footer section
- `app-overlays.tsx` - Modal/overlay system

### **Section Components** (src/components/sections/)

- `hero.tsx` - Landing hero section
- `skills.tsx` - Skills with 3D keyboard interaction
- `experience.tsx` - Work experience timeline
- `projects.tsx` - Featured projects showcase
- `contact.tsx` - Contact form section
- `section-header.tsx` - Reusable section header

### **UI Components** (src/components/ui/)

- Shadcn UI components: Button, Card, Dialog, Dropdown, Input, etc.
- Custom: FloatingDock, ScrollProgress, SectionWrapper, AnimatedModal
- Form components: AceInput, AceTextarea, Input, Label
- Special: 3DPin, ElasticCursor, Header

### **Animation Components**

- `animated-background.tsx` - Canvas background with particles
- `smooth-scroll.tsx` - Lenis smooth scrolling
- `reveal-animations.tsx` - Scroll-based reveal animations
- `Particles.tsx` - Particle system

### **Feature Components**

- `ContactForm.tsx` - Email form with Resend
- `slide-show.tsx` - Image carousel
- `scroll-down-icon.tsx` - Scroll indicator
- `theme-provider.tsx` - Dark/light mode
- `providers.tsx` - Context providers wrapper
- `easter-eggs.tsx` - Fun interactive elements
- `nyan-cat.tsx` - Easter egg component

---

## 🎯 Key Features & Technology

### **3D & Animation**

- GSAP (GreenSock Animation Platform) - Advanced animations
- Framer Motion - React animation library
- Spline - 3D object rendering (3D keyboard)
- Three.js - 3D graphics
- Canvas-based animated background

### **Styling & UI**

- Tailwind CSS - Utility-first CSS framework
- CSS Variables for theming
- ShadcN UI - Component library
- Aceternity UI - Premium components
- Sass/SCSS support

### **Interactions**

- Lenis - Smooth scrolling
- Socket.io - Real-time communication
- Radix UI - Accessible components
- Embla Carousel - Image carousel
- Elastic cursor effect

### **Backend & Services**

- Resend - Email service (contact form)
- Sanity CMS - Content management (blog articles)
- Socket.io Client - Real-time updates
- Next.js 14 App Router

### **Development Tools**

- TypeScript - Type safety
- ESLint - Code linting
- Next.js 14 - React framework
- PostCSS - CSS processing
- Prettier - Code formatting

---

## 📱 Font Setup

- **Sans Font**: Inter (Google Font) → `--font-sans`
- **Display Font**: Archivo Black (Google Font) → `--font-display`

---

## 🌐 Fonts & Metadata

The root layout includes:

- Meta title, description, keywords
- OG (Open Graph) tags for social sharing
- Twitter card configuration
- Robot directives for SEO
- Google Analytics (Umami)

---

## 📋 Environment Variables (if needed)

- `UMAMI_DOMAIN` - Analytics domain
- `UMAMI_SITE_ID` - Analytics site ID

---

## 🚀 How to Adapt This to Your Portfolio

### **Essential Personal Changes** (src/data/):

1. **config.ts**:
   - Change `title` to your name
   - Update `description` with your bio
   - Change `author`, `email` to yours
   - Update social media links
   - Update `site` URL
   - Update `githubUsername` and `githubRepo`

2. **constants.ts**:
   - Modify `EXPERIENCE` array with your work experience
   - Keep or modify `SKILLS` as needed

3. **projects.tsx**:
   - Replace/update `projects` array with YOUR projects
   - Update screenshots paths to your project images
   - Modify skills used for each project

### **Content Changes**:

- Replace hero content in `src/components/sections/hero.tsx`
- Update about/bio section
- Replace project images in `public/assets/projects-screenshots/`

### **Optional Customizations**:

- Colors in `globals.css` (CSS variables)
- Theme colors in `tailwind.config.ts`
- Animations in `animated-background-config.ts`

---

## 📦 Public Assets Structure

```
public/assets/
├── projects-screenshots/
│   ├── codingducks/
│   │   ├── landing.png
│   │   ├── problems.png
│   │   ├── ducklets.png
│   │   ├── css-battles.png
│   │   ├── contests.png
│   │   ├── playground.png
│   │   └── users.png
│   ├── couponluxury/
│   │   ├── landing.png
│   │   ├── stores.png
│   │   ├── cms-1.png
│   │   └── cms-2.png
│   ├── the-booking-desk/
│   ├── portfolio/
│   ├── ghostchat/
│   └── jra/
└── seo/
    └── og-image.png
```

---

## 🎬 Getting Started with Your Own Portfolio

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ghanasyam20/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install  # or npm install / yarn install
   ```

3. **Update personal data** (src/data/)
   - Edit `config.ts` with your info
   - Update `constants.ts` with your skills/experience
   - Replace `projects.tsx` with your projects

4. **Replace project images**
   - Create folders in `public/assets/projects-screenshots/`
   - Add your project screenshots

5. **Customize components** (optional)
   - Update hero section text
   - Modify colors in `globals.css`
   - Adjust animations as needed

6. **Run locally**

   ```bash
   pnpm dev
   ```

7. **Deploy**
   ```bash
   pnpm build
   pnpm start
   ```

---

## 📄 Summary

This is a **modern, animated portfolio** built with:

- **Next.js 14** for framework
- **React 18** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **GSAP & Framer Motion** for animations
- **Spline** for 3D elements
- **Shadcn UI & Aceternity** for premium components
- **Resend** for contact forms

Perfect for developers, designers, and creative technologists who want a portfolio with **jaw-dropping 3D animations, slick interactions, and fluid motion**.
