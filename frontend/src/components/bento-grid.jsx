import React from "react";

const BentoGrid = () => {
  // List of technologies with DevIcons classes.
  const technologies = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    { name: "SQL", icon: "devicon-postgresql-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto mt-16 mb-20">
      <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-purple-500">
        My Arsenal
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tech Stack (Full Width Bar) - Spans 2 columns */}
        <div className="md:col-span-2 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
          <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            Languages & Frameworks
          </h4>

          {/* Horizontal Tech list with icons */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-badge flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-200 border border-white/5 hover:bg-white/20 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <i
                  className={`${tech.icon} text-xl group-hover:scale-110 transition-transform`}
                ></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Area (Left Half) */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 no-select">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
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
          <h4 className="text-xl font-bold text-white mb-3">My focus</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            I specialize in building efficient backend with{" "}
            <span className="text-blue-400 font-medium">Python</span> and clean,
            responsive frontends with{" "}
            <span className="text-cyan-400 font-medium">React</span>. I value
            code readability and performance.
          </p>
        </div>

        {/* Learning Status (Right Half) */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 no-select">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
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
          <h4 className="text-xl font-bold text-white mb-3">
            Currently Learning
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="group-hover:text-gray-200 transition-colors">
                Advanced Microservices
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="group-hover:text-gray-200 transition-colors">
                Machine Learning
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="group-hover:text-gray-200 transition-colors">
                Cloud Architecture (AWS)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

