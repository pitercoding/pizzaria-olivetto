"use client";

import { useState } from "react";

const faqs = [
  { question: "Como posso reservar?", answer: "Você pode reservar clicando no botão 'Reservar uma mesa' no topo ou no Hero." },
  { question: "Há pratos vegetarianos?", answer: "Sim, temos várias opções vegetarianas deliciosas." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-serif font-bold mb-8">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <h3 className="font-semibold">{faq.question}</h3>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
