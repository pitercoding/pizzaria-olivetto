import Image from "next/image";

export default function Welcome() {
  const paragraphs = [
    "A Pizzaria Olivetto é uma autêntica cozinha italiana caseira com ingredientes de alta qualidade da Itália.",
    "Em nossa cozinha aberta, preparamos cuidadosamente massas frescas e pizzas assadas em forno a lenha.",
    "Espere encontrar um ambiente moderno e aconchegante com toques mediterrâneos.",
    "Para uma experiência agradável – como na Itália.",
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        {/* Título */}
        <h2 className="text-[40px] font-serif font-bold mb-6">
          Benvenuti alla Pizzeria Olivetto!
        </h2>

        {/* Parágrafos */}
        <div className="space-y-4">
          {paragraphs.map((text, index) => (
            <p key={index} className="text-[20px] text-gray-700 font-sans">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="relative w-full h-80">
        <Image
          src="/prato.jpg"
          alt="Prato delicioso"
          fill
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}
