import React from 'react';

function Footer() {
  return (
    <div className="w-full py-8 bg-white-300 backdrop-filter backdrop-blur-sm bg-opacity-30 text-blue-600">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl mb-6">Vipul Singh</h1>
        <nav className="w-full max-w-2xl flex flex-wrap justify-center items-center gap-8 mb-4 text-lg">
          <a href="#about" className="text-white text-opacity-80 hover:scale-125 duration-300">
            About
          </a>
          <a href="#skills" className="text-white text-opacity-80 hover:scale-125 duration-300">
            Skills
          </a>
          <a href="#education" className="text-white text-opacity-80 hover:scale-125 duration-300">
            Education
          </a>
          <a href="#project" className="text-white text-opacity-80 hover:scale-125 duration-300">
            Projects
          </a>
          <a href="#contact" className="text-white text-opacity-80 hover:scale-125 duration-300">
            Contact
          </a>
        </nav>
        <p className="text-sm text-gray-400 my-5">&copy; 2025 Vipul Singh. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
