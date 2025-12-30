import React from "react";

const Navbar = () => {
  return (
    // CHANGE 1: Dark background and white text
    <nav className="bg-slate-900 shadow-lg border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-2xl text-blue-500">
              Anlu<span className="text-white">Dev</span>
            </a>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              About Me
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
