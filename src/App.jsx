
import { useEffect, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
  FiMapPin,
  FiCode,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiMongodb,
  SiFastapi,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

import profileImage from "./images/Saya1.jpeg";
import projectImage1 from "./images/sample.png";
import projectImage2 from "./images/sample2.png";
import projectImage3 from "./images/sample3.png";

const skills = [
  { name: "React", category: "Frontend", icon: <SiReact /> },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs /> },
  { name: "Python", category: "Programming", icon: <SiPython /> },
  { name: "TensorFlow", category: "AI / ML", icon: <SiTensorflow /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb /> },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi /> },
  { name: "TailwindCSS", category: "Styling", icon: <SiTailwindcss /> },
  { name: "MySQL", category: "Database", icon: <SiMysql /> },
];

const projects = [
  {
    id: "01",
    category: "Machine Learning",
    title: "Fraud Detection System",
    description:
      "Digital fraud classification model using LSTM and XGBoost.",
    image: projectImage3,
    year: "2026",
    stack: ["Python", "LSTM", "XGBoost", "React", "Node.js"],
  },
  {
    id: "02",
    category: "GrsApp_Mobile",
    title: "Ecommerce Mobile App",
    description:
      "A mobile application for e-commerce featuring search, a shopping cart, and payment capabilities.",
    image: projectImage2,
    year: "2025",
    stack: ["TypeScript", "JavaScript", "MongoDB", "React Native", "Node.js"],
  },
  {
    id: "03",
    category: "AddYourMusic",
    title: "Mobile App Music Detection",
    description:
      "A mobile application for music detection using AI.",
    image: projectImage1,
    year: "2025",
    stack: ["Python", "Node.js", "MongoDB", "Flask", "React Native", "expo"],
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const openProject = (project) => {
    setSelectedProject(project);
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeProject = () => setSelectedProject(null);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f5f3ee] text-[#24251f] transition-colors duration-500 dark:bg-[#111210] dark:text-[#eeede7]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#f5f3ee]/90 backdrop-blur-md dark:bg-[#111210]/90 transition-colors duration-300">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#d9d6cd] px-6 py-4 md:px-12 lg:px-20 dark:border-[#34352f]">
          <a
            href="#home"
            className="text-lg font-black tracking-[-0.07em]"
          >
            PERDY<span className="text-[#a4a092]">.</span>IMAM
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] font-medium tracking-[0.08em] text-[#77766d] transition-colors hover:text-[#24251f] dark:text-[#a09f96] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((current) => !current)}
              aria-label="Toggle light and dark mode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d6cd] transition hover:bg-[#eae7df] dark:border-[#34352f] dark:hover:bg-[#252620]"
            >
              {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>

            <button
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d6cd] md:hidden dark:border-[#34352f]"
            >
              {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col bg-[#f5f3ee] px-8 pt-28 dark:bg-[#111210] md:hidden">
            <span className="mb-8 font-mono text-[10px] tracking-[0.2em] text-[#969388]">
              NAVIGATION / MENU
            </span>

            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#d9d6cd] py-5 text-3xl font-semibold tracking-tight dark:border-[#34352f]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#969388]">
                  0{index + 1}
                </span>
              </a>
            ))}

            <p className="mt-auto pb-12 font-mono text-[10px] tracking-widest text-[#969388]">
              PERDY IMAM SAMUDRA © 2026
            </p>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-20"
      >
        <div className="order-2 lg:order-1">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-[1px] w-9 bg-[#a4a092]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#858379]">
              Portfolio / 2026
            </span>
          </div>

          <p className="mb-5 text-sm font-medium tracking-wide text-[#858379]">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.91] tracking-[-0.085em]">
            Perdy Imam
            <br />
            <span className="text-[#aaa69a] dark:text-[#66665c]">
              Samudra.
            </span>
          </h1>

          <div className="mt-9 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <h2 className="mb-3 text-lg font-medium tracking-tight md:text-xl">
                AI & Fullstack Developer
              </h2>

              <p className="text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
                AI & Fullstack Developer yang berfokus pada Artificial
                Intelligence, Deep Learning, dan Web Development modern.
              </p>
            </div>

            <a
              href="#projects"
              className="group flex w-fit items-center gap-4 border-b border-[#aaa69a] pb-3 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-[#24251f] dark:hover:border-white"
            >
              Explore my work
              <FiArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#d9d6cd] pt-6 dark:border-[#34352f] md:max-w-lg">
            <div>
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[#969388]">
                Based in
              </span>
              <div className="flex items-center gap-2 text-sm font-medium">
                <FiMapPin size={14} />
                Indonesia
              </div>
            </div>

            <div>
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-[#969388]">
                Availability
              </span>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[390px] lg:order-2 lg:ml-auto">
          <div className="relative">
            <div className="absolute -right-4 -top-4 z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#d9d6cd] bg-[#f5f3ee] text-center font-mono text-[9px] uppercase leading-4 tracking-widest dark:border-[#34352f] dark:bg-[#111210]">
              Creative
              <br />
              Developer
            </div>

            <div className="aspect-[4/5] overflow-hidden bg-[#e4e0d6] dark:bg-[#292a24] flex items-center justify-center">
              <img
                src={profileImage}
                alt="Perdy Imam Samudra"
                className="h-full w-full object-contain scale-[0.85]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-[#d9d6cd] pb-4 dark:border-[#34352f]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#858379]">
                Personal portrait
              </span>
              <span className="font-mono text-[10px] text-[#858379]">
                01 / 04
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-[#d9d6cd] bg-[#eeece5] dark:border-[#34352f] dark:bg-[#171813]"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-12 lg:grid-cols-[0.65fr_1.35fr] lg:px-20 lg:py-32">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
              01 / About me
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
              A little
              <br />
              about me<span className="text-[#aaa69a]">.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-[1.7] tracking-tight text-[#55554d] dark:text-[#c3c1b7] md:text-2xl">
              Informatics student with a focus on Artificial Intelligence and Data Science. 
              Experienced in building Machine Learning and Deep Learning models, as well as modern full-stack applications using React,
               Node.js, and MongoDB. I am passionate about developing scalable, AI-driven solutions that deliver real-world impact.
            </p>

            <div className="mt-14 grid gap-0 border-t border-[#d2cfc5] dark:border-[#34352f] sm:grid-cols-3">
              {[
                { label: "Location", value: "Indonesia" },
                { label: "Education", value: "3 Years in Informatics" },
                { label: "Focus", value: "Coding & AI Development" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`py-6 ${
                    index !== 2
                      ? "border-b border-[#d2cfc5] sm:border-b-0 sm:border-r dark:border-[#34352f]"
                      : ""
                  } ${index > 0 ? "sm:pl-6" : ""}`}
                >
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#969388]">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
              02 / Technical toolkit
            </p>
            <h2 className="text-5xl font-semibold tracking-[-0.07em] md:text-6xl">
              Tools I work
              <br />
              with<span className="text-[#aaa69a]">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
            Technologies and tools I use to turn ideas into functional digital
            experiences.
          </p>
        </div>

        <div className="border-t border-[#d9d6cd] dark:border-[#34352f]">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group grid grid-cols-[45px_1fr_auto] items-center gap-4 border-b border-[#d9d6cd] py-5 transition-colors hover:bg-[#eeece5] dark:border-[#34352f] dark:hover:bg-[#1a1b16] md:grid-cols-[70px_1fr_1fr_auto]"
            >
              <span className="font-mono text-[10px] text-[#969388]">
                0{index + 1}
              </span>

              <div className="flex items-center gap-4">
                <span className="text-xl text-[#77766d] transition-colors group-hover:text-[#24251f] dark:text-[#aaa99f] dark:group-hover:text-white">
                  {skill.icon}
                </span>
                <h3 className="text-lg font-medium tracking-tight md:text-xl">
                  {skill.name}
                </h3>
              </div>

              <span className="hidden text-xs text-[#969388] md:block">
                {skill.category}
              </span>

              <FiArrowUpRight className="text-[#969388] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#eeece5] py-24 dark:bg-[#171813] md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
                03 / Selected work
              </p>
              <h2 className="text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
                Things I've
                <br />
                built<span className="text-[#aaa69a]">.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
              A selection of projects exploring machine learning, artificial
              intelligence, and fullstack development.
            </p>
          </div>

          {selectedProject === null ? (
            <div className="border-t border-[#d2cfc5] dark:border-[#34352f]">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group grid gap-6 border-b border-[#d2cfc5] py-8 dark:border-[#34352f] md:grid-cols-[65px_1fr_1fr_40px] md:items-center md:gap-8 md:py-10"
                >
                  <span className="font-mono text-xs text-[#969388]">
                    {project.id}
                  </span>

                  <div className="overflow-hidden bg-[#dfdcd2] dark:bg-[#252620]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#969388]">
                      {project.category}
                    </p>

                    <h3 className="mb-4 text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="max-w-md text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="border border-[#d2cfc5] px-2.5 py-1 font-mono text-[9px] text-[#77766d] dark:border-[#414139] dark:text-[#aaa99f]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openProject(project)}
                      className="group/button mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest"
                    >
                      View project
                      <FiArrowUpRight className="transition-transform group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
                    </button>
                  </div>

                  <button
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title}`}
                    className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#d2cfc5] transition hover:bg-[#24251f] hover:text-white dark:border-[#414139] dark:hover:bg-white dark:hover:text-black md:flex"
                  >
                    <FiArrowUpRight />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="border-t border-[#d2cfc5] pt-8 dark:border-[#34352f]">
              <button
                onClick={closeProject}
                className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#77766d] transition hover:text-[#24251f] dark:text-[#aaa99f] dark:hover:text-white"
              >
                <FiArrowLeft />
                Back to projects
              </button>

              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden bg-[#dfdcd2] dark:bg-[#252620]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
                    {selectedProject.id} / {selectedProject.category}
                  </p>

                  <h3 className="mb-6 text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-5xl">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm leading-8 text-[#77766d] dark:text-[#aaa99f]">
                    {selectedProject.description}
                  </p>

                  <div className="mt-10 border-t border-[#d2cfc5] pt-6 dark:border-[#34352f]">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#969388]">
                      Technologies used
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((technology) => (
                        <span
                          key={technology}
                          className="border border-[#d2cfc5] px-3 py-2 text-xs dark:border-[#414139]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
              04 / Get in touch
            </p>

            <h2 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">
              Let's work
              <br />
              together<span className="text-[#aaa69a]">.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#77766d] dark:text-[#aaa99f]">
              Interested in working together, collaborating, or having a discussion about AI and web development?
               Please reach out to me via email or through the social media channels below.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=perdyimam49@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[#aaa69a] pb-3 text-sm font-medium transition hover:border-[#24251f] dark:hover:border-white"
            >
              perdyimam49@gmail.com
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
                Social connections
              </p>

              <div className="border-t border-[#d9d6cd] dark:border-[#34352f]">
                <a
                  href="https://github.com/perdy49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[#d9d6cd] py-5 dark:border-[#34352f]"
                >
                  <span className="flex items-center gap-4 text-sm font-medium">
                    <FiGithub size={19} />
                    GitHub
                  </span>
                  <FiArrowUpRight className="text-[#969388] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/perdy-imam-502b3b387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[#d9d6cd] py-5 dark:border-[#34352f]"
                >
                  <span className="flex items-center gap-4 text-sm font-medium">
                    <FiLinkedin size={19} />
                    LinkedIn
                  </span>
                  <FiArrowUpRight className="text-[#969388] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="border-t border-[#d9d6cd] pt-8 dark:border-[#34352f]">
              <div className="mb-5 flex items-center gap-3">
                <FiDownload className="text-lg" />
                <h3 className="text-lg font-semibold tracking-tight">
                  Curriculum Vitae
                </h3>
              </div>

              <p className="mb-6 text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
                Download my full CV to view further experience and technical details.
              </p>

              <a
                href={`${import.meta.env.BASE_URL}CV-Perdy.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#24251f] px-5 py-3 text-xs font-semibold uppercase tracking-widest transition hover:bg-[#24251f] hover:text-white dark:border-[#77766d] dark:hover:bg-white dark:hover:text-black"
              >
                <FiDownload />
                Download CV
                <FiArrowUpRight />
              </a>
            </div>

            <div className="border-t border-[#d9d6cd] pt-8 dark:border-[#34352f]">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#969388]">
                Availability
              </p>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm leading-7 text-[#77766d] dark:text-[#aaa99f]">
                  Currently open to internships, freelance projects, and AI research collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d9d6cd] dark:border-[#34352f]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
          <div>
            <a
              href="#home"
              className="text-lg font-black tracking-[-0.07em]"
            >
              PERDY IMAM SAMUDRA<span className="text-[#aaa69a]">.</span>
            </a>

            <p className="mt-2 text-xs text-[#858379]">
              AI & Fullstack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/perdy49"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#77766d] transition hover:text-[#24251f] dark:hover:text-white"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/perdy-imam-502b3b387/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#77766d] transition hover:text-[#24251f] dark:hover:text-white"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href="mailto:perdyimam49@gmail.com"
              aria-label="Email"
              className="text-[#77766d] transition hover:text-[#24251f] dark:hover:text-white"
            >
              <FiMail size={18} />
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-[#969388]">
            © {new Date().getFullYear()} Perdy Imam Samudra. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
