import React from "react";

const Footer = () => {
  return (
    // We use 'py-6' for a balanced but thin vertical padding
    <footer className="w-full bg-black border-t border-white/10 py-6 relative z-50">
      {/* Flex Container: Aligns everything horizontally 'justify-between' on desktop */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* LEFT SIDE: Name and Role in a single line */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wide">Angel</span>
          <span className="text-gray-600 hidden md:block">|</span>
          <span className="text-gray-500">
            Full Stack Engineer based in Berlin
          </span>
        </div>

        {/* RIGHT SIDE: Links and Copyright aligned */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Social Links */}
          <div className="flex gap-4 text-gray-400 font-medium">
            <a
              href="https://www.linkedin.com/in/angel-ja%C3%A9n-910389332/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AnluYaens"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=anlucodes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <span className="text-gray-600 text-xs">
            © Anlucodes{new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
