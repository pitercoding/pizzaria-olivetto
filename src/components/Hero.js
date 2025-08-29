export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <h1 className="text-6xl font-serif font-bold mb-4">Pizzaria Olivetto</h1>
      <p className="text-xl mb-6">O melhor da culinária italiana</p>
      <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-300">
        Reservar uma mesa
      </button>
      <p className="mt-2 text-sm">Sua reserva será confirmada por e-mail</p>
    </section>
  );
}
