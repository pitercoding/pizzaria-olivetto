# 🍕 Pizzaria Olivetto

Este é um projeto pessoal desenvolvido para **portfólio**.

O objetivo foi **aprender na prática** como estruturar um site moderno, responsivo e elegante usando **Next.js**, **TailwindCSS** e **Vercel**, simulando a presença digital de uma pizzaria fictícia.

Foi um processo de bastante **aprendizado e esforço**, pois muitas ferramentas utilizadas eram novas para mim. Além de codar, precisei pensar em **UX**, **regras de negócio**, **imagens**, **estrutura de conteúdo** e **deploy**.

## 🚀 Tecnologias utilizadas

- **Next.js (React)** → frontend dinâmico, rotas simples e SEO otimizado.
- **TailwindCSS** → estilização rápida, responsiva e profissional.
- **Formspree** → gerenciamento inicial de reservas online (1 a 10 pessoas).
- **Vercel** → hospedagem gratuita, CI/CD e deploy automático.

## 📂 Estrutura do Projeto

Cada seção foi construída como um **componente React independente** para manter a organização e facilitar a manutenção:

- `Header.js` → Navbar fixa com logo, links e redes sociais.
- `Hero.js` → Capa inicial com imagem de fundo e botão de reserva.
- `Welcome.js` → Seção de boas-vindas com texto e imagem em grid.
- `Menu.js` → Botão de acesso ao cardápio em PDF.
- `Drinks.js` → Seção exclusiva para bebidas (layout semelhante ao Menu).
- `Hours.js` → Horário de funcionamento + mapa.
- `FAQ.js` → Perguntas frequentes em acordeão.
- `Footer.js` → Endereço, links rápidos e redes sociais.

Rotas principais:

- `/` → Página inicial
- `/gallery` → Galeria de fotos
- `/reservas` → Formulário de reservas (Formspree)
- `/contact` → Página de contato

## 🎨 Estilo e Design (TailwindCSS)

- **Layout**: Grid + Flexbox para disposição de texto e imagens.
- **Tipografia**: Fontes serifadas para títulos, sans-serif para corpo.
- **Responsividade**: mobile-first com classes `md:` e `lg:`.
- **Botões**: bordas arredondadas (`rounded-xl`) e animações suaves (`hover:scale-105`).
- **Hero/Menu**: seções em tela cheia (`h-screen`) com imagens de fundo (`object-cover`).

Exemplo de estilização (botão do Menu):
``` jsx
<button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
  Acesse agora
</button>
```

## 📑 Cardápio

O **cardápio** foi disponibilizado em **PDF**, colocado dentro da pasta `/public/`.
Isso permite **download ou visualização no navegador**, mantendo o layout original.
``` jsx
<a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
  Ver Cardápio
</a>
```
📌 **Prós**: rápido de implementar, ideal para impressão, mantém design original.
📌 **Contras**: não amigável para SEO, menos responsivo em mobile.

## 📅 Reservas Online

Foi criado um formulário simples com integração ao **Formspree**, que envia os dados por e-mail. Escolhi esse método por pensar no desafio de um restaurante pequeno que não tem como investir muito ainda.

**Campos principais**:

- Nome completo
- Telefone
- E-mail
- Data da reserva (Validado para um período do dia atual até no máximo 2 meses a frente)
- Horário (pré-definido: 18h, 19h30, 21h)
- Número de pessoas (1 a 10)

Fluxo:
1. Cliente preenche o formulário.
2. Solicitação é enviada via Formspree.
3. Restaurante responde manualmente para confirmar.

``` jsx
  const today = new Date().toISOString().split("T")[0]; // Data de hoje
  const twoMonthsLater = new Date();
  twoMonthsLater.setMonth(twoMonthsLater.getMonth() + 2);
  const maxDate = twoMonthsLater.toISOString().split("T")[0];
```

``` jsx
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
```

## 🧑‍💻 Exemplo de Código — Header
``` jsx
"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: "/", label: "Início" },
    { href: "/gallery", label: "Galeria" },
    { href: "/menu.pdf", label: "Menu", isPdf: true },
    { href: "/bebidas.pdf", label: "Bebidas", isPdf: true },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Nome do restaurante */}
        <div className="text-2xl font-bold font-serif-footer">
          Pizzaria Olivetto
        </div>

        {/* Menu desktop */}
        <nav className="space-x-6 hidden md:flex font-sans-footer">
          {menuLinks.map((link) =>
            link.isPdf ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:translate-x-1 transition-transform duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:translate-x-1 transition-transform duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
```

## 📌 Regras de Negócio

- **Reservas limitadas a 10 pessoas**.
- **PDFs** separados para **Menu** e **Bebidas**.
- **Links rápidos no footer** para acesso rápido a menu, bebidas e contato.
- **Header fixo** → Nome do restaurante sempre visível + menu responsivo (**hambúrguer em mobile**).
- **SEO otimizado** → uso de imagem `og-image.jpg (1200x630px)` para compartilhamento.

## 🎯 Aprendizados

- Como estruturar um site profissional com **Next.js** + **Tailwind**.
- Importância de pensar em **experiência do usuário** (menu simples, botões claros, responsividade).
- Configuração de formulários com **Formspree**.
- Deploy automatizado na **Vercel** → push no GitHub já atualiza o site em produção.
- Desafios de **escolha de imagens**, **identidade visual** e **integração de PDFs**.

## 🌍 Deploy

O site foi publicado na Vercel:
👉 <https://pizzaria-olivetto.vercel.app/>

Deploy é automático a cada `git push` para a branch principal.

## Conclusão

Esse projeto foi um **marco no meu aprendizado**. Não foi apenas sobre escrever código, mas também sobre **tomar decisões de design, pensar na experiência do cliente, estruturar regras de negócio e usar ferramentas novas**.

O resultado é um **site elegante, funcional e responsivo**, que serviu como **laboratório e vitrine** para meu portfólio.

## ✨ Próximos passos
- Implementar banco de dados;
- Painel de administração;
- Reservas automáticas.

## 🤝 Contribuições

Este projeto está **aberto para contribuições**!  
Se você também está aprendendo ou quer ajudar com **ideias e melhorias**, sinta-se à vontade para abrir um **Pull Request** ou **Issue**.

## 👨‍💻 Autor

Projeto desenvolvido por um **estudante de CiÇencias da Compuração** com fins educacionais e de aprendizado pessoal.  
Se quiser trocar ideia ou colaborar, é só chamar!

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e compartilhar.


