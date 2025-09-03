"use client";

import { FaInstagram, FaTiktok, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Coluna 1 - Nome e endereço */}
        <div>
          <h3 className="text-[18px] font-sans font-bold mb-2">
            Pizzaria Olivetto
          </h3>
          <p className="text-[14px] font-sans">
            Av. Pres. Vargas, 590, Rio de Janeiro, Brasil
          </p>
        </div>

        {/* Coluna 2 - Links rápidos */}
        <div>
          <h3 className="text-[18px] font-sans font-bold mb-2">Links Rápidos</h3>
          <ul className="text-[14px] space-y-1 font-sans">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#bebidas">Bebidas</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Redes sociais */}
        <div>
          <h3 className="text-[18px] font-sans font-bold mb-2">Redes Sociais</h3>
          <div className="flex space-x-4 text-2xl font-sans-footer">
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

      {/* Linha de créditos */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-400 font-sans">
          Desenvolvido por <span className="font-semibold">Piter Gomes</span>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/pitercoding"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/piter-gomes-4a39281a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}