import Image from "next/image";

export default function Menu() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">
      
      {/* Imagem de fundo otimizada */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/menu-bg.jpg"  
          alt="Fundo do Menu"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Conteúdo */}
      {/* Título com Cardo */}
      <h2 className="text-5xl font-serif font-bold mb-6 z-10 relative">
        Menu
      </h2>

      {/* Botão com Source Sans Pro */}
      <button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300 z-10 relative font-sans">
        Acesse agora
      </button>
    </section>
  );
}
