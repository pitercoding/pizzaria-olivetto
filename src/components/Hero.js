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
        {/* Título com Cardo */}
        <h1 className="text-[60px] md:text-6xl font-serif font-bold mb-4">
          PIZZERIA OLIVETTO
        </h1>

        {/* Subtítulo com Source Sans Pro */}
        <h3 className="text-[35px] md:text-2xl mb-6 font-sans font-medium">
          Um pedaço da Itália no centro do Rio de Janeiro
        </h3>

        {/* Botão transparente */}
        <button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300 font-sans">
          Reserve uma mesa
        </button>

        {/* Parágrafo explicativo com Source Sans Pro */}
        <p className="mt-4 text-xs md:text-base text-white/90 font-sans">
          Processamos os pedidos de reserva o mais rápido possível – sua reserva é ativada assim que você receber nossa confirmação.
        </p>
      </div>
    </section>
  );
}