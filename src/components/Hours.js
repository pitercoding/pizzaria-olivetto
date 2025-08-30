export default function Hours() { 
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-4xl font-serif font-bold mb-4">
          Horário de Funcionamento
        </h2>
        <ul className="text-lg text-gray-700 space-y-2 font-medium">
          <li>Segunda a Sexta: 18h - 23h</li>
          <li>Sábado: 12h - 23h</li>
          <li>Domingo: 12h - 22h</li>
        </ul>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.296363495342!2d-43.182522739425686!3d-22.902437212913384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd8b428c9a1%3A0xbf3ed09295158ad3!2sAv.%20Pres.%20Vargas%2C%20590!5e0!3m2!1spt-BR!2sde!4v1756539283262!5m2!1spt-BR!2sde"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
