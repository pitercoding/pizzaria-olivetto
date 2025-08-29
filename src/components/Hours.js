export default function Hours() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-4xl font-serif font-bold mb-4">Horário de Funcionamento</h2>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>Segunda a Sexta: 18h - 23h</li>
          <li>Sábado: 12h - 23h</li>
          <li>Domingo: 12h - 22h</li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
