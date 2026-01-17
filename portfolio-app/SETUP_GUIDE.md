# Ghanasyam's Portfolio Website

A responsive, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases projects, skills, and contact information with modern animations and interactive UI components.

## 🚀 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **3D Elements**: Interactive animations using Framer Motion and Spline
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Beautiful dark theme with optional light mode
- **Project Showcase**: Display of featured projects with detailed information
- **Contact Form**: Integrated contact form using Resend email service
- **Skills Display**: Visual representation of technical skills and tools used
- **About Section**: Detailed profile information and background

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/              # About page
│   │   ├── blogs/              # Blog posts
│   │   ├── projects/           # Projects showcase
│   │   ├── contact/            # Contact page
│   │   ├── api/                # API routes
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── sections/           # Page sections (Hero, About, Skills, etc.)
│   │   ├── ui/                 # Reusable UI components
│   │   └── ...                 # Other components
│   ├── data/                   # Static data
│   │   ├── config.ts           # Configuration and personal info
│   │   ├── projects.tsx        # Projects data
│   │   └── constants.ts        # Constants
│   └── styles/                 # Global styles
├── public/                      # Static assets
│   └── assets/                 # Images and project screenshots
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── next.config.mjs             # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui, Chakra UI, Aceternity
- **Icons**: react-icons
- **Form Handling**: Zod
- **Email**: Resend
- **3D**: Spline
- **Database**: N/A (Static content)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository** (or copy the project folder):

```bash
cd portfolio-app
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

To get a Resend API key:

1. Visit [Resend](https://resend.com)
2. Sign up for a free account
3. Generate an API key from the dashboard
4. Add it to your `.env.local` file

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Production Build

Create an optimized production build:

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit `src/data/config.ts`:

```typescript
const config = {
  title: "Your Name | Your Title",
  author: "Your Name",
  email: "your.email@example.com",
  site: "https://yourwebsite.com",
  social: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
};
```

### Update About Section

Edit `src/app/about/page.tsx`:

- Update `CONTACT_LINKS` with your contact information
- Update the about me text in the main content area
- Update `TOOLS` array with your skills and tech stack

### Update Projects

Edit `src/data/projects.tsx`:

- Modify or add new projects in the `projects` array
- Each project needs:
  - `id`: Unique identifier
  - `category`: Project category
  - `title`: Project name
  - `src`: Project image path
  - `skills`: Frontend and backend technologies used
  - `live`: Live project URL
  - `github`: GitHub repository link (optional)
  - `content`: JSX content describing the project

### Update Images

1. **Profile Image**: Replace `public/assets/me.jpg` with your profile photo
2. **Project Images**: Add screenshots to `public/assets/projects-screenshots/[project-id]/`
3. **OG Image**: Update `public/assets/seo/og-image.png` for social media preview

## 📧 Contact Form Setup

The contact form uses Resend for email delivery:

1. Get a free Resend account at [Resend.com](https://resend.com)
2. Add your Resend API key to `.env.local`
3. Update the email template in `src/components/email-template.tsx` if needed
4. The form will send emails to the address specified in `config.ts`

## 🎨 Styling

The site uses Tailwind CSS with a custom dark theme. Main colors and styles are defined in:

- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- Component files have inline Tailwind classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: Default styles
- Tablet: `md:` classes (768px)
- Desktop: `lg:` classes (1024px)
- Large Desktop: `xl:` classes (1280px)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in the Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

The site can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## 📄 Additional Pages

- **Blogs**: Add blog posts in `src/app/blogs/` using MDX format
- **Projects**: Extended project showcase in `src/app/projects/`
- **Contact**: Contact page with form in `src/app/contact/`

## 🎯 Performance

- Optimized images with Next.js Image component
- Static generation for fast page loads
- Lazy loading for animations
- Production build: < 100KB gzipped

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)
- [Resend](https://resend.com)

## 🤝 Support

For issues or questions:

1. Check the existing code comments
2. Review Next.js documentation
3. Check component implementations in `src/components/`

## 📝 License

This portfolio template is provided as-is for personal use.

---

**Happy coding! 🚀**
