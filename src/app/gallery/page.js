"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

// Thumb (para grid), full (para modal) e alt (acessibilidade)
const images = [
  { thumb: "/gallery/galeria1-thumb.webp", full: "/gallery/galeria1-large.webp", alt: "Ambiente interno 1" },
  { thumb: "/gallery/galeria2-thumb.webp", full: "/gallery/galeria2-large.webp", alt: "Ambiente interno 2" },
  { thumb: "/gallery/galeria3-thumb.webp", full: "/gallery/galeria3-large.webp", alt: "Mesa 1" },
  { thumb: "/gallery/galeria4-thumb.webp", full: "/gallery/galeria4-large.webp", alt: "Mesa 2" },
  { thumb: "/gallery/galeria5-thumb.webp", full: "/gallery/galeria5-large.webp", alt: "Prato 1" },
  { thumb: "/gallery/galeria6-thumb.webp", full: "/gallery/galeria6-large.webp", alt: "Forno" },
  { thumb: "/gallery/galeria7-thumb.webp", full: "/gallery/galeria7-large.webp", alt: "Prato especial 1" },
  { thumb: "/gallery/galeria8-thumb.webp", full: "/gallery/galeria8-large.webp", alt: "Prato especial 2" },
  { thumb: "/gallery/galeria9-thumb.webp", full: "/gallery/galeria9-large.webp", alt: "Forno a lenha" },
  { thumb: "/gallery/galeria10-thumb.webp", full: "/gallery/galeria10-large.webp", alt: "Pizza vegetariana" },
];

export default function GaleriaPage() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const showPrev = () => setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () => setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));

  // Atalhos de teclado
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <Header />

      {/* Banner full-width */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-10 flex items-center justify-center">
        <Image
          src={images[0].full}
          alt={images[0].alt}
          fill
          className="object-cover object-center rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center px-4">
            Galeria
          </h1>
        </div>
      </div>

      {/* Conteúdo centralizado */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Grid responsivo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-48 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={img.thumb}
                alt={img.alt}
                fill
                className="object-cover rounded-lg shadow-md hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Modal fullscreen */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Imagem ampliada */}
          <div className="relative max-w-4xl w-full flex justify-center">
            <Image
              src={images[currentIndex].full}
              alt={images[currentIndex].alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[80vh]"
            />
          </div>

          {/* Botões de navegação */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-4xl font-bold px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
          >
            ‹
          </button>
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-4xl font-bold px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
