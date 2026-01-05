import React from "react";

const ProjectsGrid = ({ projects }) => {
  return (
    <section id="projects" className="max-w-6xl mx-auto">
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
    </section>
  );
};

export default ProjectsGrid;
