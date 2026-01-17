const config = {
  title: "Ghanasyam Indulal | Programmer & Web Developer",
  description: {
    long: "Explore the portfolio of Ghanasyam Indulal, a passionate AI enthusiast and full-stack developer specializing in interactive web experiences, innovative solutions, and cutting-edge technology integration. Discover my latest projects in web development and software engineering. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ghanasyam Indulal, a programmer and web developer creating innovative software solutions and interactive experiences.",
  },
  keywords: [
    "Ghanasyam",
    "Indulal",
    "portfolio",
    "programmer",
    "web developer",
    "AI enthusiast",
    "web development",
    "interactive websites",
    "software development",
    "web design",
    "React",
    "Next.js",
    "Framer Motion",
    "PHP",
    "Python",
    "Java",
  ],
  author: "Ghanasyam Indulal",
  email: "gindulal28@gmail.com",
  site: "https://ghanasyamportfolio.vercel.app",

  // for github stars button
  githubUsername: "Ghanasyam20",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ghanasyam-indulal-35811b311/",
    github: "https://github.com/Ghanasyam20",
  },
};
export { config };
