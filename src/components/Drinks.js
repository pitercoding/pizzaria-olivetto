export default function Drinks() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/drinks-bg.jpg')" }}
    >
      <h2 className="text-5xl font-serif font-bold mb-6">Bebidas</h2>
      <button className="bg-red-600 text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
        Descubra agora
      </button>
    </section>
  );
}
