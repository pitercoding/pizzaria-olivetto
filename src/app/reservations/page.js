"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function ReservationsPage() {
  // ID do formulário no Formspree
  const [state, handleSubmit] = useForm("xanddlzl");

  return (
    <>
      <Header />

      {/* Banner com overlay e título */}
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

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white border-1 p-8 rounded-lg shadow-lg"
        >
          {/* Nome */}
          <div>
            <label className="block text-left font-medium mb-2" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <ValidationError prefix="Nome" field="name" errors={state.errors} />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-left font-medium mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
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
            <label className="block text-left font-medium mb-2" htmlFor="phone">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
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
            <div>
              <label
                className="block text-left font-medium mb-2"
                htmlFor="date"
              >
                Data da Reserva
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                className="block text-left font-medium mb-2"
                htmlFor="time"
              >
                Hora da Reserva
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Número de pessoas */}
          <div>
            <label
              className="block text-left font-medium mb-2"
              htmlFor="guests"
            >
              Número de pessoas
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Mensagem opcional */}
          <div>
            <label
              className="block text-left font-medium mb-2"
              htmlFor="message"
            >
              Mensagem adicional (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
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
              Reserva enviada com sucesso! Aguarde nossa confirmação por E-mail dentro de até 5 horas.
            </p>
          )}
          {state.errors?.length > 0 && (
            <p className="text-red-600 mt-4 text-center">
              Ocorreu um erro. Por favor, tente novamente.
            </p>
          )}
        </form>
      </main>

      <Footer />
    </>
  );
}
