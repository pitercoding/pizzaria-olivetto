export default function Drinks() {
  return (
    <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/drinks-bg.jpg')" }}>
      <h2 className="text-5xl font-serif font-bold mb-6">Bebidas</h2>
      <button className="bg-red-600 hover:bg-red-700 py-3 px-6 rounded-xl transition font-bold">
        Descubra agora
      </button>
    </section>
  );
}
