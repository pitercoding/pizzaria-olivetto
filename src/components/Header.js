"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#galeria", label: "Galeria" },
    { href: "#menu", label: "Menu" },
    { href: "#bebidas", label: "Bebidas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Pizzaria Olivetto</div>

        {/* Menu desktop */}
        <nav className="space-x-6 hidden md:flex">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:translate-x-1 transition-transform duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons + Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-2">
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-black hover:scale-110 transition-transform duration-300"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Hamburger animado */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-black transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="flex flex-col space-y-2 p-4 bg-white md:hidden overflow-hidden">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:translate-x-2 transition-transform duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

