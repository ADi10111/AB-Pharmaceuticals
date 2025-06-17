import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = (
    <>
      <a
        href="#about"
        className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        onClick={() => setIsOpen(false)}
      >
        About
      </a>
      <a
        href="#products"
        className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        onClick={() => setIsOpen(false)}
      >
        Products
      </a>
      <a
        href="#gallery"
        className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        onClick={() => setIsOpen(false)}
      >
        Gallery
      </a>
      <a
        href="#contact"
        className="text-white hover:underline hover:scale-105 inline-block transition-transform duration-200"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </a>
    </>
  );

  return (
    <header className="bg-teal-700 text-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-xl font-[Orbitron]">
          {navLinks}
        </nav>

        {/* Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 flex flex-col gap-4 text-lg font-[Orbitron] text-white bg-teal-800 rounded shadow-md">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Header;
