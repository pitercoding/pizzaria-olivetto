import Image from "next/image";

export default function Drinks() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white">
      {/* Imagem de fundo */}
      <Image
        src="/drinks-bg.jpg"
        alt="Fundo da seção de bebidas"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Conteúdo */}
      <h2 className="text-[90px] font-serif font-bold mb-6">Bebidas</h2>
      <button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300 font-sans">
        Descubra agora
      </button>
    </section>
  );
}
