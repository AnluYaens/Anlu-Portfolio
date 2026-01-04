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
    // FIX: change 'overflow-hidden' for 'overflow-x-hidden'
    <div className="min-h-screen w-full bg-black text-white flex flex-col relative font-sans">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>
      <Navbar />
      {/* NOTE: Added pt-32 to push content down below fixed Navbar, and z-10 to stay above background lights */}
      <main className="flex-grow pt-32 pb-20 relative z-10 px-6">
        {/*Hero Section*/}
        <div className="flex flex-col items-center justify-center py-10 text-center max-w-4xl mx-auto">
          {/* Avatar Section*/}
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 animate-pulse"></div>
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Anlu"
              alt="Avatar"
              className="relative w-32 h-32 rounded-full border border-white/10 bg-black"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Angel
            </span>
          </h1>
          <h2 className="text-2xl text-gray-200 font-semibold mb-4">
            Full Stack Engineer
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Software Engineering student at{" "}
            <span className="text-white font-medium">
              Macromedia University
            </span>{" "}
            in Berlin. Building seamless digital experiences
          </p>

          {/* Location & Socials */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Location Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Berlin, Germany</span>
            </div>

            {/* Open to Work Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/10 rounded-full border border-green-500/20 text-sm text-green-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-6">
              {/* GitHub */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:contact@angel.dev"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid (skills and about)
            Note: max-w-6xl used here to widen the container */}

        <div className="max-w-6xl mx-auto mt-16 mb-20">
          <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-purple-500">
            My Arsenal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tech Stack (Full Width Bar) - Spans 2 columns */}
            <div className="md:col-span-2 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Languages & Frameworks
              </h4>
              {/* Horizontal Tech List */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "React",
                  "FastAPI",
                  "JavaScript",
                  "Tailwind CSS",
                  "SQL",
                  "Git",
                  "Docker",
                  "HTML5",
                  "CSS3",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-200 border border-white/5 hover:bg-white/20 transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Area (Left Half) */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">My focus</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I specialize in building efficient backend with{" "}
                <span className="text-blue-400">Python</span> and clean,
                responsive frontends with{" "}
                <span className="text-cyan-400">React</span>. I value code
                readability and performance.
              </p>
            </div>

            {/* Learning Status (Right Half) */}
            <div className="bg-white/5 p-6 rounded2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Currently Learning
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Advanced Microservices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  Cloud Architecture (AWS)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Grid 
            NOTE: max-w-6xl used to align with the grid above*/}
        <div id="projects" className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 pl-2 border-l-4 border-blue-500">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className=" absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>

                <div className="relative">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

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

          {projects.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-gray-500">Loading projects...</p>
              <p className="text-sm text-gray-400">
                (Make sure the backend is running on port 8000)
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
