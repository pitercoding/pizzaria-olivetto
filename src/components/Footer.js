"use client";

import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold mb-2">Pizzaria Olivetto</h3>
          <p>Av. Pres. Vargas, 590, Rio de Janeirio, Brasil</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Links Rápidos</h3>
          <ul className="space-y-1">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#bebidas">Bebidas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Redes Sociais</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
