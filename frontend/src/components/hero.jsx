import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-10 text-center max-w-4xl mx-auto"
    >
      {/* Avatar section */}
      <div className="relative mb-8">
        {/* Animated glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        {/* Rotating exterior ring */}
        <div
          className="absolute -inset-2 rounded-full animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 opacity-20"
          style={{ animationDuration: "3s" }}
        ></div>
        {/* Profile photo */}
        <div className="relative">
          <img
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Anlu"
            alt="AnluCodes"
            className="relative w-36 h-36 rounded-full border border-purple-500/50 bg-black shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Name & Title */}
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hey, I'm <span className="text-white">Angel</span>
        </h1>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
            Full Stack Engineer
          </span>
        </h2>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
        Software Engineering student at{" "}
        <span className="text-white font-medium">Macromedia University</span> in
        Berlin.
      </p>

      {/* Location & Socials */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {/* Location Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300 hover:border-white/20 trnasition-all no-select">
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
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 text-sm text-green-400 font-medium hover:bg-green-500/20 hover:border-green-500/30 transition-all no-select">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open to Work
        </div>
      </div>

      {/* Social Icons Row */}
      <div className="flex gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/AnluYaens"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/angel-ja%C3%A9n-910389332/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        {/* Email */}
        <a
          href="https://outlook.live.com/mail/0/deeplink/compose?to=anlucodes@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition-all transform hover:scale-110 hover:-translate-y-1"
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
    </section>
  );
};

export default Hero;
