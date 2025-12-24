import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-2xl text-blue-600">
              Anlu<span className="text-gray-600">Dev</span>
            </a>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About Me
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
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
