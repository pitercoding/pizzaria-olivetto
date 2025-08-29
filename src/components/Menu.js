export default function Menu() {
  return (
    <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/menu-bg.jpg')" }}>
      <h2 className="text-5xl font-serif font-bold mb-6">Menu</h2>
      <button className="bg-red-600 hover:bg-red-700 py-3 px-6 rounded-xl transition font-bold">
        Descubra agora
      </button>
    </section>
  );
}
