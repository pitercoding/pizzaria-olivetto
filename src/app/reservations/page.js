"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function ReservationsPage() {
  // ID do formulário no Formspree
  const [state, handleSubmit] = useForm("xanddlzl");

  // Datas mínimas e máximas
  const today = new Date().toISOString().split("T")[0]; // Data de hoje
  const twoMonthsLater = new Date();
  twoMonthsLater.setMonth(twoMonthsLater.getMonth() + 2);
  const maxDate = twoMonthsLater.toISOString().split("T")[0];

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-10 flex items-center justify-center">
        <Image
          src="/gallery/reservations-banner.webp"
          alt="Banner Reservas"
          fill
          className="object-cover object-center rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center px-4">
            Reservas
          </h1>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-10">
          Preencha o Formulário
        </h2>

        <p className="mt-2 text-sm md:text-base text-gray-600 font-sans text-center leading-relaxed pb-3">
          Processamos os pedidos de reserva dentro de poucas horas – sua reserva é ativada assim que você receber nossa confirmação por e-mail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white border-1 p-8 rounded-lg shadow-lg"
        >
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-left font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="[A-Za-zÀ-ÿ\s]+"
              title="Digite apenas letras"
              placeholder="Ex: João Silva"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <ValidationError prefix="Nome" field="name" errors={state.errors} />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-left font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern=".+@(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com)$"
              title="Use um email válido: gmail.com, outlook.com, hotmail.com ou yahoo.com"
              placeholder="exemplo@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-left font-medium mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="\([1-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}"
              title="Digite no formato (XX) XXXXX-XXXX"
              placeholder="(XX) XXXXX-XXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <ValidationError
              prefix="Telefone"
              field="phone"
              errors={state.errors}
            />
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data */}
            <div>
              <label
                htmlFor="date"
                className="block text-left font-medium mb-2"
              >
                Data da Reserva
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={today}
                max={maxDate}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Hora */}
            <div>
              <label
                htmlFor="time"
                className="block text-left font-medium mb-2"
              >
                Hora da Reserva
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                onChange={(e) => {
                  const dateInput = document.getElementById("date").value;
                  if (!dateInput) return;
                  const day = new Date(dateInput).getDay(); // 0=Dom, 1=Seg, ..., 6=Sáb
                  const time = e.target.value;

                  const horarios = {
                    0: ["12:00", "21:30"], // Domingo
                    1: null, // Segunda fechado
                    2: ["17:00", "21:30"], // Terça
                    3: ["17:00", "21:30"], // Quarta
                    4: ["17:00", "21:30"], // Quinta
                    5: ["17:00", "23:00"], // Sexta
                    6: ["17:00", "23:00"], // Sábado
                  };

                  if (!horarios[day]) {
                    alert("Estamos fechados neste dia. Escolha outra data.");
                    e.target.value = "";
                    return;
                  }

                  if (time < horarios[day][0] || time > horarios[day][1]) {
                    alert(
                      `O horário disponível neste dia é entre ${horarios[day][0]} e ${horarios[day][1]}`
                    );
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>

          {/* Número de pessoas */}
          <div>
            <label
              htmlFor="guests"
              className="block text-left font-medium mb-2"
            >
              Número de pessoas
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              required
              min="1"
              max="10"
              title="O número máximo de pessoas é 10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Mensagem opcional */}
          <div>
            <label
              htmlFor="message"
              className="block text-left font-medium mb-2"
            >
              Mensagem adicional (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Alguma observação para a reserva..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              {state.submitting ? "Enviando..." : "Reservar agora"}
            </button>
          </div>

          {/* Mensagens de sucesso/erro */}
          {state.succeeded && (
            <p className="text-green-600 mt-4 text-center">
              Reserva enviada com sucesso! Aguarde nossa confirmação por E-mail
              dentro de até 24 horas.
            </p>
          )}
          {state.errors?.length > 0 && (
            <p className="text-red-600 mt-4 text-center">
              Ocorreu um erro. Por favor, tente novamente.
            </p>
          )}
        </form>

        <p className="mt-2 text-sm md:text-base text-gray-600 font-sans text-center leading-relaxed pt-10 italic">
          Arrivederci! Até breve!
        </p>

      </main>

      <Footer />
    </>
  );
}
