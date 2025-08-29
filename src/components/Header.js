"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Pizzaria Olivetto</div>

        <nav className="space-x-6 hidden md:flex">
          <Link href="#galeria">Galeria</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#bebidas">Bebidas</Link>
          <Link href="#contato">Contato</Link>
        </nav>

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
      </div>
    </header>
  );
}
