import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-black/30 backdrop-blur-md">
      <div className="w-full px-6 md:px-12 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 tracking-wide no-select">
              Anlucodes
            </div>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#top"
              className="text-gray-400 hover:text-purple-400 font-medium transition duration-300 text-sm"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-purple-400 font-medium transition duration-300 text-sm"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-purple-400 font-medium transition duration-300 text-sm"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-purple-400 font-medium transition duration-300 text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button (Se mantiene igual por ahora) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none">
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
