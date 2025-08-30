import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white pt-16">
      
      {/* Imagem de fundo */}
      <Image
        src="/hero.jpg"
        alt="Banner do restaurante"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Sobreposição escura para contraste do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          PIZZERIA OLIVETTO
        </h1>

        <h3 className="text-lg md:text-2xl mb-6 font-medium">
          O melhor da culinária italiana, com pratos preparados com amor
        </h3>

        <button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
          Reserve uma mesa
        </button>

        <p className="mt-4 text-xs md:text-base text-white/90">
          Processamos os pedidos de reserva o mais rápido possível – sua reserva se torna vinculativa assim que você receber nossa confirmação.
        </p>
      </div>
    </section>
  );
}