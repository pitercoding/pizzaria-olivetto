import Image from "next/image";

export default function Welcome() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        {/* Título com Cardo */}
        <h2 className="text-4xl font-serif font-bold mb-4">
          Benvenuti alla Pizzeria Olivetto!
        </h2>

        {/* Parágrafo com Source Sans Pro */}
        <p className="text-lg text-gray-700 font-sans">
          Aqui você encontra pratos italianos preparados com ingredientes frescos e muito amor. Venha saborear nossas especialidades!
        </p>
      </div>

      <div className="relative w-full h-80"> 
        <Image
          src="/prato.jpg"
          alt="Prato delicioso"
          fill                // faz ocupar toda a div pai
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}
