import React from "react";

const BentoGrid = () => {
  return (
    <section className="max-w-6xl mx-auto mt-16 mb-20">
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
            <span className="text-blue-400">Python</span> and clean, responsive
            frontends with <span className="text-cyan-400">React</span>. I value
            code readability and performance.
          </p>
        </div>

        {/* Learning Status (Right Half) */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
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
    </section>
  );
};

export default BentoGrid;
