# 🚀 Ghanasyam Indulal - Portfolio Website

Welcome to my personal portfolio website! This is where I showcase my skills, projects, and expertise in programming and web development. Built with cutting-edge technologies and featuring smooth animations, interactive UI, and a modern design.

**Developer**: Ghanasyam Indulal  
**Email**: gindulal28@gmail.com  
**Phone**: +91 88912 04877  
**Location**: Kollam, Kerala

---

## 👋 About Me

I'm a passionate **Programmer & Web Developer** with expertise in:

- **AI Integration**: Actively seeking ways to integrate cutting-edge technology into everyday solutions
- **Web Development**: Full-stack development with modern frameworks
- **Problem Solving**: Innovative approach to building software solutions
- **Global Perspective**: Growing up in the UAE shaped my communication skills and global outlook

### Skills

**Technical Skills**: Project Management, Teamwork, Leadership, Effective Communication, Critical Thinking

**Programming Languages**:

- Java, Python, C, C++, PHP, JavaScript

**Spoken Languages**:

- English (Fluent)
- Malayalam (Fluent)
- Hindi (Fluent)
- Tamil (Intermediate)

---

## 🎯 Featured Projects

### 1. **Mishler Homes Ltd.** (2024)

Real estate platform for property buying, selling, and renting. Connects property seekers with real estate companies while reducing transaction costs through digital solutions.

- **Tech**: PHP, MySQL
- **Features**: Property listings, advanced search, streamlined transactions, reduced paperwork

### 2. **Defense Security Management** (2022)

Advanced defense management system with secure data handling, stereo audio interaction, and speech recognition for security protocols.

- **Tech**: Python, MySQL
- **Features**: Secure data handling, immersive audio interface, voice-based security, improved operational efficiency

### 3. **Mishler Wine House** (2025)

Machine learning system for wine quality prediction using supervised learning models trained on open datasets.

- **Tech**: PHP, MySQL, Python
- **Features**: Analyzes acidity, sugar, pH, alcohol, density for quality prediction

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui, Chakra UI, Aceternity

### Backend & Services

- **APIs**: Next.js API Routes
- **Email**: Resend
- **3D**: Spline integration
- **Database**: MySQL, MongoDB ready

### Development Tools

- **Version Control**: Git, GitHub
- **Build Tools**: npm, webpack
- **Deployment**: Vercel-ready

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
echo "RESEND_API_KEY=your_key_here" > .env.local

# Start development server
npm run dev
```

Visit **http://localhost:3000** to view the portfolio!

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/        # About me section
│   │   ├── projects/     # Projects showcase
│   │   ├── contact/      # Contact page
│   │   ├── blogs/        # Blog posts (MDX)
│   │   ├── api/          # Backend API routes
│   │   └── page.tsx      # Homepage
│   ├── components/        # React components
│   │   ├── sections/     # Page sections
│   │   ├── ui/           # UI components
│   │   └── ...
│   ├── data/             # Static data
│   │   ├── config.ts     # Personal information
│   │   ├── projects.tsx  # Projects details
│   │   └── constants.ts  # App constants
│   └── styles/           # Global styles
├── public/               # Static assets
│   └── assets/          # Images, screenshots
├── .env.local            # Environment variables (not in repo)
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🎨 Customization

### Update Personal Information

Edit `src/data/config.ts`:

```typescript
const config = {
  author: "Your Name",
  email: "your.email@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
```

### Update About Section

Edit `src/app/about/page.tsx`:

- Update `CONTACT_LINKS` with your information
- Modify bio/about text
- Update `TOOLS` array with your tech stack

### Add/Modify Projects

Edit `src/data/projects.tsx`:

- Update project descriptions
- Change project screenshots paths
- Add new projects following the existing structure

### Add Images

1. **Profile Photo**: Replace `public/assets/me.jpg`
2. **Project Screenshots**: Add to `public/assets/projects-screenshots/[project-id]/`
3. **OG Image**: Update `public/assets/seo/og-image.png`

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push code to GitHub
2. Connect repository on [Vercel](https://vercel.com)
3. Add `RESEND_API_KEY` environment variable
4. Deploy!

```bash
# Quick deploy after setup
git push origin main  # Vercel auto-deploys
```

### Alternative Platforms

- **Netlify**: Easy GitHub integration
- **AWS Amplify**: Full AWS integration
- **DigitalOcean**: App Platform support
- **Self-hosted**: Works with any Node.js server

---

## ✨ Features

- ✅ **Responsive Design**: Works on mobile, tablet, desktop
- ✅ **Smooth Animations**: Framer Motion powered
- ✅ **Dark Mode**: Beautiful dark theme (default)
- ✅ **Contact Form**: Email integration via Resend
- ✅ **Project Showcase**: Interactive project modals
- ✅ **Skills Display**: Tool carousel
- ✅ **Blog Support**: MDX-powered blog posts
- ✅ **SEO Optimized**: Meta tags and structured data
- ✅ **Fast Performance**: Optimized for Lighthouse
- ✅ **Mobile Menu**: Smooth navigation
- ✅ **Social Links**: GitHub, LinkedIn integration

---

## 📝 Environment Variables

Create `.env.local` in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
```

### Getting Resend API Key:

1. Visit https://resend.com
2. Sign up (free tier available)
3. Generate API key from dashboard
4. Add to `.env.local`

---

## 📊 Build Information

- **Build Tool**: Next.js 14
- **Bundle Size**: ~87.5 KB (First Load JS)
- **Build Time**: ~30 seconds
- **TypeScript Errors**: 0
- **Pages**: 6+ (Home, About, Projects, Contact, Blogs, 404)
- **Components**: 40+

---

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📞 Contact

- **Email**: gindulal28@gmail.com
- **Phone**: +91 88912 04877
- **GitHub**: https://github.com/Ghanasyam20
- **LinkedIn**: https://www.linkedin.com/in/ghanasyam-indulal-35811b311/

---

## 🎓 Declaration

I do hereby declare that all the above-furnished statements are correct and true to the best of my knowledge and belief.

---

## 📚 Resources & Documentation

- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions
- [Completion Summary](./COMPLETION_SUMMARY.md) - Project completion details
- [Verification Report](./VERIFICATION_REPORT.md) - Full verification checklist
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)

---

## 📄 License

This portfolio is provided as-is for personal use.

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion**

_Let's connect and build something amazing together! 🚀_
