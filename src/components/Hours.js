export default function Hours() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 items-start gap-12">
      {/* Coluna esquerda - Texto */}
      <div>
        <h2 className="text-4xl font-serif font-bold mb-10 text-center md:text-left">
          Horário de funcionamento
        </h2>

        <dl className="space-y-4 text-lg text-gray-800 font-sans">
          <div className="flex justify-between md:justify-start md:gap-8">
            <dt className="font-medium">Segunda:</dt>
            <dd className="text-gray-600">Fechado</dd>
          </div>
          <div className="flex justify-between md:justify-start md:gap-8">
            <dt className="font-medium">Ter - Qui:</dt>
            <dd className="text-gray-600">17:00 – 23:00</dd>
          </div>
          <div className="flex justify-between md:justify-start md:gap-8">
            <dt className="font-medium">Sex - Sáb:</dt>
            <dd className="text-gray-600">17:00 – 00:00</dd>
          </div>
          <div className="flex justify-between md:justify-start md:gap-8">
            <dt className="font-medium">Domingo:</dt>
            <dd className="text-gray-600">12:00 – 23:00</dd>
          </div>
        </dl>

        <p className="mt-8 text-gray-700 text-base md:text-lg leading-relaxed">
          A cozinha funciona até às 22:00.
          <br />
          Domingo 12:00-16:00: Almoço
        </p>
      </div>

      {/* Coluna direita - Mapa */}
      <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.296363495342!2d-43.182522739425686!3d-22.902437212913384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd8b428c9a1%3A0xbf3ed09295158ad3!2sAv.%20Pres.%20Vargas%2C%20590!5e0!3m2!1spt-BR!2sde!4v1756539283262!5m2!1spt-BR!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
