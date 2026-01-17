import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            Github
            <ExternalLink className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};
export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "mishler-homes",
    category: "Real Estate Platform",
    title: "Mishler Homes Ltd.",
    src: "/assets/projects-screenshots/mishler-homes/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.php],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Property Buying, Selling & Renting Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Mishler Homes Ltd. is a comprehensive real estate platform that connects property seekers with real estate companies. The platform facilitates property buying, selling, and renting with a focus on reducing transaction costs by minimizing paperwork.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Property listings with detailed information</li>
            <li>Advanced search and filtering capabilities</li>
            <li>Direct connection between seekers and real estate companies</li>
            <li>Streamlined transaction process</li>
            <li>Reduced paperwork through digital solutions</li>
            <li>User-friendly property comparison tools</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with PHP and MySQL, Mishler Homes delivers a reliable and scalable real estate solution that transforms the property market by making transactions faster and more accessible.
          </p>
        </div>
      );
    },
  },
  {
    id: "defense-security",
    category: "Security Management System",
    title: "Defense Security Management",
    src: "/assets/projects-screenshots/defense-security/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Advanced Defense Data Management System
          </TypographyP>
          <TypographyP className="font-mono">
            A sophisticated defense management system built for secure data handling with innovative immersive features. This system integrates stereo audio for enhanced interaction and implements speech recognition for advanced security protocols, improving data security, accessibility, and operational efficiency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Secure data handling and encryption protocols</li>
            <li>Stereo audio interface for immersive interaction</li>
            <li>Advanced speech recognition for security access</li>
            <li>Enhanced data security measures</li>
            <li>Improved operational efficiency</li>
            <li>Accessibility-focused design</li>
            <li>Real-time monitoring and analytics</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Developed with Python and MySQL, this security-first system demonstrates the power of combining innovative technologies with robust backend infrastructure to create a defense-grade management solution.
          </p>
        </div>
      );
    },
  },
  {
    id: "mishler-wine",
    category: "ML Wine Quality Prediction",
    title: "Mishler Wine House",
    src: "/assets/projects-screenshots/mishler-wine/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.php],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.python, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Machine Learning Wine Quality Prediction
          </TypographyP>
          <TypographyP className="font-mono">
            Mishler Wine House leverages advanced machine learning algorithms to predict wine quality with remarkable accuracy. The system analyzes multiple wine properties to provide instant quality assessments, helping connoisseurs and businesses make informed decisions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ML Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Analyzes acidity levels (fixed and volatile)</li>
            <li>Sugar content evaluation</li>
            <li>pH level assessment</li>
            <li>Alcohol percentage analysis</li>
            <li>Density and sulfate measurements</li>
            <li>Chloride concentration tracking</li>
            <li>Supervised learning model training</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Model Training</TypographyH3>
          <p className="font-mono mb-2">
            Trained on open datasets with supervised learning models, the system achieves high accuracy in predicting wine quality. The machine learning pipeline processes multiple wine properties to deliver reliable quality predictions.
          </p>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Combines PHP frontend with Python-powered machine learning backend and MySQL database, creating a seamless integration of web technology and artificial intelligence.
          </p>
        </div>
      );
    },
  },
];
export default projects;
