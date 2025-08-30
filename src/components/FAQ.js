"use client";

import { useState } from "react";

const faqs = [
  { question: "Como posso reservar?", answer: "Você pode reservar clicando no botão 'Reserve uma mesa' no topo do nosso site." },
  { question: "Há pratos vegetarianos?", answer: "Sim, temos várias opções vegetarianas deliciosas." },
  { question: "Há lugares para sentar ao ar livre?", answer: "Sim, nosso terraço ensolarado e nosso aconchegante jardim oferecem assentos para cerca de 100 pessoas. Ideal para refeições relaxantes e deliciosas!" },
  { question: "Como posso pagar?", answer: "Totalmente flexível: PIX, dinheiro, cartão de débito ou cartão de crédito – sem problemas." },
  { question: "Cães são permitidos?", answer: "Sim. Eles são sempre bem-vindos! Temos sempre uma tigela de água esperando." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      {/* Título com Cardo */}
      <h2 className="text-4xl font-serif font-bold mb-8">
        Perguntas Frequentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {/* Pergunta com Source Sans Pro */}
            <h3 className="font-sans font-semibold">{faq.question}</h3>

            {/* Resposta com Source Sans Pro */}
            {openIndex === index && (
              <p className="mt-2 text-gray-700 font-sans">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
