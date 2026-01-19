"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPython,
} from "react-icons/fa6";
import {
  SiBootstrap,
  SiBlender,
  SiCanva,
  SiCplusplus,
  SiDjango,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
  SiDotnet,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoAdobe } from "react-icons/bi";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbBrandWindows } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "gindulal28@gmail.com",
    href: "mailto:gindulal28@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 88912 04877",
    href: "tel:+918891204877",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ghanasyam-indulal-35811b311/",
    content: "/ghanasyam-indulal",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Ghanasyam20",
    content: "/Ghanasyam20",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  // Programming & Markup
  {
    name: "C",
    content: "C - A powerful general-purpose programming language",
    icon: <SiC size={"50px"} color={"#A8B9CC"} />,
    color: "#A8B9CC",
  },
  {
    name: "C++",
    content: "C++ - An extension of C with object-oriented features",
    icon: <SiCplusplus size={"50px"} color={"#00599C"} />,
    color: "#00599C",
  },
  {
    name: "Java",
    content: "Java - A versatile, object-oriented programming language",
    icon: <FaJava size={"50px"} color={"#007396"} />,
    color: "#007396",
  },
  {
    name: "JavaScript",
    content: "JavaScript - The language of the web",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "HTML5",
    content: "HTML5 - The standard markup language for web pages",
    icon: <SiJavascript size={"50px"} color={"#e34c26"} />,
    color: "#e34c26",
  },
  {
    name: "PHP",
    content: "PHP - Server-side scripting language",
    icon: <SiPhp size={"50px"} color={"#777BB4"} />,
    color: "#777BB4",
  },
  {
    name: "Python",
    content: "Python - A versatile, easy-to-learn programming language",
    icon: <FaPython size={"50px"} color={"#3776AB"} />,
    color: "#3776AB",
  },

  // Frameworks & Libraries
  {
    name: ".NET",
    content: ".NET - Microsoft's framework for building applications",
    icon: <SiDotnet size={"50px"} color={"#512BD4"} />,
    color: "#512BD4",
  },
  {
    name: "Bootstrap",
    content: "Bootstrap - Popular CSS framework for responsive design",
    icon: <SiBootstrap size={"50px"} color={"#7952B3"} />,
    color: "#7952B3",
  },
  {
    name: "Django",
    content: "Django - High-level Python web framework",
    icon: <SiDjango size={"50px"} color={"#092E20"} />,
    color: "#092E20",
  },
  {
    name: "TailwindCSS",
    content: "TailwindCSS - Utility-first CSS framework",
    icon: <SiTailwindcss size={"50px"} color={"#06B6D4"} />,
    color: "#06B6D4",
  },

  // Data & ML
  {
    name: "MySQL",
    content: "MySQL - Popular open-source relational database",
    icon: <SiMysql size={"50px"} color={"#00758F"} />,
    color: "#00758F",
  },
  {
    name: "MongoDB",
    content: "MongoDB - NoSQL document database",
    icon: <DiMongodb size={"50px"} color={"#4DB33D"} />,
    color: "#4DB33D",
  },
  {
    name: "NumPy",
    content: "NumPy - Numerical computing library for Python",
    icon: <SiNumpy size={"50px"} color={"#013243"} />,
    color: "#013243",
  },
  {
    name: "Pandas",
    content: "Pandas - Data manipulation and analysis library",
    icon: <SiPandas size={"50px"} color={"#150458"} />,
    color: "#150458",
  },
  {
    name: "TensorFlow",
    content: "TensorFlow - Machine learning framework",
    icon: <SiTensorflow size={"50px"} color={"#FF6F00"} />,
    color: "#FF6F00",
  },
  {
    name: "Matplotlib",
    content: "Matplotlib - Data visualization library",
    icon: <SiPandas size={"50px"} color={"#11557C"} />,
    color: "#11557C",
  },

  // DevOps & Platforms
  {
    name: "Windows Terminal",
    content: "Windows Terminal - Modern terminal application",
    icon: <TbBrandWindows size={"50px"} color={"#0078D4"} />,
    color: "#0078D4",
  },
  {
    name: "Vercel",
    content: "Vercel - Platform for deploying Next.js applications",
    icon: <SiVercel size={"50px"} color={"#000"} />,
    color: "#000000",
  },
  {
    name: "Anaconda",
    content: "Anaconda - Python distribution and package manager",
    icon: <SiPandas size={"50px"} color={"#44A833"} />,
    color: "#44A833",
  },

  // Design & Media
  {
    name: "Adobe Acrobat Reader",
    content: "Adobe Acrobat Reader - PDF viewer and editor",
    icon: <BiLogoAdobe size={"50px"} color={"#FF0000"} />,
    color: "#FF0000",
  },
  {
    name: "Adobe After Effects",
    content: "Adobe After Effects - Motion graphics and visual effects",
    icon: <BiLogoAdobe size={"50px"} color={"#9999FF"} />,
    color: "#9999FF",
  },
  {
    name: "Adobe Lightroom",
    content: "Adobe Lightroom - Photo editing and organization",
    icon: <BiLogoAdobe size={"50px"} color={"#31A8FF"} />,
    color: "#31A8FF",
  },
  {
    name: "Adobe Lightroom Classic",
    content: "Adobe Lightroom Classic - Advanced photo editing",
    icon: <BiLogoAdobe size={"50px"} color={"#31A8FF"} />,
    color: "#31A8FF",
  },
  {
    name: "Adobe Photoshop",
    content: "Adobe Photoshop - Image editing and design tool",
    icon: <BiLogoAdobe size={"50px"} color={"#31A8FF"} />,
    color: "#31A8FF",
  },
  {
    name: "Adobe Premiere Pro",
    content: "Adobe Premiere Pro - Video editing software",
    icon: <BiLogoAdobe size={"50px"} color={"#EA77FF"} />,
    color: "#EA77FF",
  },
  {
    name: "Figma",
    content: "Figma - Collaborative design and prototyping tool",
    icon: <SiFigma size={"50px"} color={"#F24E1E"} />,
    color: "#F24E1E",
  },
  {
    name: "Canva",
    content: "Canva - Online design and graphics creation platform",
    icon: <SiCanva size={"50px"} color={"#00C4CC"} />,
    color: "#00C4CC",
  },
  {
    name: "Blender",
    content: "Blender - 3D modeling and animation software",
    icon: <SiBlender size={"50px"} color={"#F5792A"} />,
    color: "#F5792A",
  },

  // Version Control
  {
    name: "Git",
    content: "Git - Distributed version control system",
    icon: <SiGit size={"50px"} color={"#F05032"} />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    content: "GitHub - Web-based version control repository",
    icon: <SiGithub size={"50px"} color={"#000"} />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Ghanasyam Indulal</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Programmer & Web Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              A passionate AI enthusiast who actively seeks ways to integrate
              cutting-edge technology into everyday solutions. Growing up in the
              UAE has shaped my global outlook and sharpened my communication
              skills, allowing me to connect effectively with diverse teams. I'm
              driven by the pursuit of innovative problem-solving and eager to
              bring a fresh perspective to software development.
            </p>
            <p className="mb-10">
              Location: Kollam, Kerala | Phone: +91 88912 04877 | Email:
              gindulal28@gmail.com
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
