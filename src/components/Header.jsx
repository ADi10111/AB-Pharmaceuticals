// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-teal-700 text-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="AB Pharmaceuticals"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <h1 className="text-3xl font-bold tracking-wide font-[Orbitron] hover:scale-105 transition-transform duration-300">
          AB <span className="font-light italic">Pharmaceuticals</span>
        </h1>
      </div>
      <nav className="space-x-8 text-xl font-[Orbitron]">
        <a
          href="#about"
          className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        >
          About
        </a>
        <a
          href="#products"
          className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        >
          Products
        </a>
        <a
          href="#gallery"
          className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
