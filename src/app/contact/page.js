"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Banner com overlay e título padronizado */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-10 flex items-center justify-center">
        <Image
          src="/gallery/contact-banner.webp"
          alt="Banner Contato"
          fill
          className="object-cover object-center rounded-lg"
          priority
        />
        {/* Overlay escuro transparente */}
        <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center px-4">
            Contato
          </h1>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Três itens de contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#1f1f1f"
              >
                <path d="m480-920 368 220q17.33 9.67 24.67 26.33Q880-657 880-640v453.33q0 27-19.83 46.84Q840.33-120 813.33-120H146.67q-27 0-46.84-19.83Q80-159.67 80-186.67V-640q0-17 7.67-33.67Q95.33-690.33 112-700l368-220Zm0 466 328-193.33L480-844 152-647.33 480-454Zm0 76L146.67-575.33v388.66h666.66v-388.66L480-378Zm0 191.33h333.33-666.66H480Z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p>Escreva para nós</p>
            <p className="font-bold">info@pizzariaolivetto.com.br</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#1f1f1f"
              >
                <path d="M770.67-484.67q-3.34-119.66-86.5-202.83Q601-770.67 481.33-774v-66.67q73 1.34 137.17 29.84 64.17 28.5 112.33 76.66Q779-686 807.5-621.83q28.5 64.16 29.83 137.16h-66.66Zm-166 0q-3.34-50-38.34-84.66-35-34.67-85-38V-674q77.67 3.33 132.17 57.5 54.5 54.17 57.83 131.83h-66.66ZM796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p>Ligue para nós</p>
            <p className="font-bold">021 1111-1111</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#1f1f1f"
              >
                <path d="M480-80q-106 0-173-31.83-67-31.84-67-81.5 0-25.34 20.17-47.84 20.16-22.5 55.5-37.5l51 47.67q-16.34 4.67-32.5 15.33Q318-205 306.67-193.33q15.66 18.66 67 32.66 51.33 14 106.33 14t106.83-14q51.84-14 67.5-32.66-11.66-12.67-29.33-23-17.67-10.34-34.33-15l51.33-48q37.33 15.33 57.67 37.83Q720-219 720-193.33q0 49.66-67 81.5Q586-80 480-80Zm1-203.33q105.67-78.34 159-158.17 53.33-79.83 53.33-152.5 0-108.67-69-164T480-813.33q-74.67 0-144 55.33t-69.33 164q0 71 53 147.83 53 76.84 161.33 162.84ZM480-200Q339.67-304 269.83-402 200-500 200-594q0-71 25.5-124.5t65.83-89.5q40.34-36 90-54Q431-880 480-880t99 18q50 18 90 54t65.5 89.5Q760-665 760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p>Visite-nos</p>
            <p className="font-bold">
              Av. Pres. Vargas, 590, Rio de Janeiro, Brasil
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.296363495342!2d-43.182522739425686!3d-22.902437212913384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd8b428c9a1%3A0xbf3ed09295158ad3!2sAv.%20Pres.%20Vargas%2C%20590!5e0!3m2!1spt-BR!2sde!4v1756539283262!5m2!1spt-BR!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <Footer />
    </>
  );
}
