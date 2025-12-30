import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  // 1. State to store the project list
  const [projects, setProjects] = useState([]);

  // 2. useEffect: Runs once when the page loads
  useEffect(() => {
    // Fetch data from YOUR Backend (Python)
    fetch("http://127.0.0.1:8000/projects/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Store data in 'projects' state
      })
      .catch((error) => console.error("Error connecting to backend:", error));
  }, []);

  return (
    // CAMBIO: Fondo negro puro (bg-black) y overflow-hidden para las luces
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden font-sans">
      {/* AMBIENT BACKGROUND LIGHTS */}
      {/* Luz Superior */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Luz Inferior */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />
      {/* Agregamos pt-24 porque el Navbar ahora es 'fixed' y tapa el contenido */}
      <main className="p-8 flex-grow pt-32 relative z-10">
        {/*Hero Section*/}
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
          {/* Avatar Circle with Glow Effect */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 animate-pulse"></div>
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Anlu"
              alt="Avatar"
              className="relative w-28 h-28 rounded-full border border-white/10 bg-black"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Anlu
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            Building digital experiences with{" "}
            <span className="text-white font-semibold">FastAPI</span> &{" "}
            <span className="text-white font-semibold">React</span>. Focused on
            clean code and modern UI.
          </p>

          {/* NEW MINIMALIST BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Botón Principal (Estilo 'Glow') */}
            <a
              href="#contact"
              className="group relative px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>

            {/* Botón Secundario (Outline transparente) */}
            <a
              href="#projects"
              className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-full text-gray-300 hover:text-white transition-all backdrop-blur-sm"
            >
              View Projects
            </a>

            {/* Icono Github (Ejemplo) */}
            <a
              href="#"
              className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          id="projects"
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Map through project list and create a card for each */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>

              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-blue-200 text-xs font-medium px-3 py-1 rounded-full border border-white/5"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                {/* Link Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.link_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.link_demo && (
                    <a
                      href={project.link_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message if no projects found */}
        {projects.length === 0 && (
          <div className="text-center mt-20">
            <p className="text-gray-500">Loading projects...</p>
            <p className="text-sm text-gray-400">
              (Make sure the backend is running on port 8000)
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
