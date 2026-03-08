import { useState, useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    { name: "React", icon: <SiReact size={40} className="text-cyan-500" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={40} className="text-green-600" />,
    },
    {
      name: "Python",
      icon: <SiPython size={40} className="text-yellow-500" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow size={40} className="text-orange-500" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-green-500" />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi size={40} className="text-teal-500" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
    },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      category: "Machine Learning",
      title: "Sentiment Analysis",
      description:
        "Model klasifikasi sentimen menggunakan Naive Bayes dan ANN untuk menganalisis opini konsumen.",
      image: "/src/images/mountains.avif",
    },
    {
      id: 2,
      category: "Deep Learning",
      title: "Cassava Maturity Classification",
      description:
        "CNN berbasis MobileNetV2 untuk klasifikasi tingkat kematangan singkong berbasis citra.",
      image: "/src/images/mountains.avif",
    },
    {
      id: 3,
      category: "Fullstack",
      title: "Fullstack Web Application",
      description:
        "Aplikasi web dengan React, Node.js, MongoDB, autentikasi JWT dan REST API.",
      image: "/src/images/mountains.avif",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="
      flex items-center justify-between
      px-6 py-3
      rounded-2xl
      backdrop-blur-lg
      bg-white/60 dark:bg-gray-900/60
      border border-white/20 dark:border-gray-700/50
      shadow-lg
      transition
    "
          >
            {/* BRAND */}
            <a
              href="#"
              className="font-semibold text-lg tracking-wide hover:opacity-80 transition"
            >
              Perdy Imam
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
              <a href="#skills" className="hover:text-blue-500 transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="
            text-sm px-3 py-1.5
            rounded-xl
            border border-gray-300 dark:border-gray-700
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition
          "
              >
                {darkMode ? "Light" : "Dark"}
              </button>

              <button
                className="md:hidden text-xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div
              className="
        mt-3
        rounded-2xl
        backdrop-blur-lg
        bg-white/70 dark:bg-gray-900/70
        border border-white/20 dark:border-gray-700/50
        shadow-lg
        p-6
        flex flex-col gap-4
        md:hidden
      "
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-40 relative overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          {/* FOTO */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="/src/images/sample.png"
                alt="Perdy Imam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Perdy Imam Samudra
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            AI & Fullstack Developer yang berfokus pada Artificial Intelligence,
            Deep Learning, dan Web Development modern.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-lg"
            >
              Lihat Project
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-3xl font-bold mb-6">About Me</h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
              Mahasiswa Informatika dengan fokus pada Artificial Intelligence
              dan Data Science. Berpengalaman membangun model Machine Learning,
              Deep Learning, serta aplikasi Fullstack modern berbasis React,
              Node.js, dan MongoDB. Saya tertarik mengembangkan solusi berbasis
              AI yang scalable dan berdampak nyata.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LOCATION CARD */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Indonesia
                </p>
              </div>

              {/* EDUCATION CARD */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  3 Years in Informatics
                </p>
              </div>

              {/* FOCUS CARD */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold mb-2">Focus</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Coding & AI Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-900 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center font-medium flex flex-col items-center gap-4"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>

        {selectedProject === null ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-200 dark:border-gray-800"
              >
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-white px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold mt-4 mb-3">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 hover:underline"
                >
                  Detail →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="mb-8 text-blue-600 hover:underline"
            >
              ← Kembali
            </button>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-2xl shadow-lg"
              />

              <div>
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>

                <h4 className="text-3xl font-bold mt-4 mb-6">
                  {selectedProject.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Contact</h3>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT CARD - CONTACT INFO */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-6">Let's Work Together</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Tertarik bekerja sama, kolaborasi, atau diskusi seputar AI dan
                pengembangan web? Silakan hubungi saya melalui email atau sosial
                media berikut.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=perdyimam49@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                  <FiMail /> perdyimam49@gmail.com
                </a>

                <a
                  href="https://github.com/perdy49"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                  <FiGithub /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/perdy-imam-502b3b387/"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {/* CV CARD */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-4">Curriculum Vitae</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Unduh CV lengkap saya untuk melihat pengalaman dan detail teknis
                lebih lanjut.
              </p>
              <a
                href="/src/document/CV-Perdy.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            {/* AVAILABILITY CARD */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-4">Availability</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Saat ini terbuka untuk internship, freelance project, dan
                kolaborasi riset AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-bold text-lg">Perdy Imam Samudra</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI & Fullstack Developer
            </p>
          </div>

          <div className="flex gap-6 text-lg">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:emailanda@gmail.com"
              className="hover:text-blue-600 transition"
            >
              <FiMail />
            </a>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Perdy Imam Samudra. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
