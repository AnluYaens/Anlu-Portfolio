import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand and Copyright*/}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="tex-xl font-bold">AnluDev</h3>
            <p className="text-gray-400 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links (Placeholders for now) */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
