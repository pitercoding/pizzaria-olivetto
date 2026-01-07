<h1 align="center">🍕 Pizzaria Olivetto (EN)</h1>

<p align="center">
  🌎 <strong>Languages:</strong><br>
  <a href="README.md">🇧🇷 Portuguese</a> |
  <a href="README.en.md">🇺🇸 English</a>
</p>

This is a **personal project** developed for **portfolio purposes**.

The goal was to **learn in practice** how to structure a modern, responsive, and elegant website using **Next.js**, **TailwindCSS**, and **Vercel**, simulating the digital presence of a fictional pizzeria.

It was a process full of **learning and effort**, as many of the tools used were new to me. Beyond coding, I had to think about **UX**, **business rules**, **images**, **content structure**, and **deployment**.

[Access Here](https://pizzaria-olivetto.vercel.app/)

---

## 🚀 Technologies Used

- **Next.js (React)** → dynamic frontend, simple routing, and optimized SEO.
- **TailwindCSS** → fast, responsive, and professional styling.
- **Formspree** → initial management of online reservations (1 to 10 people).
- **Vercel** → free hosting, CI/CD, and automatic deployment.

## 📂 Project Structure

Each section was built as an **independent React component** to keep the project organized and easy to maintain:

- `Header.js` → Fixed navbar with logo, links, and social media.
- `Hero.js` → Hero section with background image and reservation button.
- `Welcome.js` → Welcome section with text and image in a grid layout.
- `Menu.js` → Button linking to the menu PDF.
- `Drinks.js` → Exclusive drinks section (layout similar to Menu).
- `Hours.js` → Opening hours + map.
- `FAQ.js` → Accordion-style frequently asked questions.
- `Footer.js` → Address, quick links, and social media.

### Main routes

- `/` → Home page  
- `/gallery` → Photo gallery  
- `/reservas` → Reservation form (Formspree)  
- `/contact` → Contact page  

## 🎨 Style and Design (TailwindCSS)

- **Layout**: Grid + Flexbox for text and image arrangement.
- **Typography**: Serif fonts for headings, sans-serif for body text.
- **Responsiveness**: mobile-first using `md:` and `lg:` classes.
- **Buttons**: rounded borders (`rounded-xl`) and smooth animations (`hover:scale-105`).
- **Hero/Menu**: full-screen sections (`h-screen`) with background images (`object-cover`).

### Example styling (Menu button)

```jsx
<button className="bg-transparent border border-white text-white py-3 px-6 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
  Access now
</button>
```

## Menu
The **menu** is provided as a **PDF**, placed inside the `/public/` folder. This allows **download** or **browser viewing**, while preserving the original layout.

```jsx
<a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
  View Menu
</a>
```

- **Pros**: quick to implement, ideal for printing, preserves original design.
- **Cons**: not SEO-friendly, less responsive on mobile.

## 📅 Online Reservations
A simple form was created with Formspree integration, which sends the data via email. This approach was chosen considering the reality of a small restaurant that cannot invest heavily at first.

**Main fields**:
- Full name
- Phone number
- Email
- Reservation date (validated from the current day up to a maximum of 2 months ahead)
- Time (predefined: 6:00 PM, 7:30 PM, 9:00 PM)
- Number of people (1 to 10)

**Flow**:
1. Customer fills out the form.
2. Request is sent via Formspree.
3. Restaurant manually responds to confirm.

```jsx
const today = new Date().toISOString().split("T")[0]; // Today's date
const twoMonthsLater = new Date();
twoMonthsLater.setMonth(twoMonthsLater.getMonth() + 2);
const maxDate = twoMonthsLater.toISOString().split("T")[0];
```

```jsx
{/* Date */}
<div>
  <label
    htmlFor="date"
    className="block text-left font-medium mb-2"
  >
    Reservation Date
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
## 🧑‍💻 Code Example — Header
```jsx
"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/menu.pdf", label: "Menu", isPdf: true },
    { href: "/bebidas.pdf", label: "Drinks", isPdf: true },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold font-serif-footer">
          Pizzaria Olivetto
        </div>
```

## 📌 Business Rules
- Reservations limited to **10 people**.
- Separate **PDFs** for **Menu** and **Drinks**
- **Quick links in the footer** for fast access.
- **Fixed header** with responsive hamburger menu on mobile.
- **SEO optimized** → using `og-image.jpg (1200x630px)`.

## 🎯 Learnings

- How to structure a professional website with **Next.js** + **Tailwind**.
- The importance of thinking about **user experience** (simple menu, clear buttons, responsiveness).
- Form configuration with **Formspree**.
- Automated deployment on **Vercel** → pushing to GitHub automatically updates the production site.
- Challenges of **image selection**, **visual identity**, and **PDF integration**.

## 📌 Conclusion

This project was a **milestone in my learning**. It wasn't just about writing code, but also about **making design decisions, thinking about the customer experience, structuring business rules, and using new tools**.

The result is an **elegant, functional, and responsive website**, which served as a **laboratory and showcase** for my portfolio.

## ✨ Next Steps
- Implement a database;
- Administration panel;
- Automatic reservations.

## 🤝 Contributing

This project is **open for contributions**! If you are also learning or want to help with **ideas and improvements**, feel free to open a **Pull Request** or **Issue**.

## 📜 **License**

This project is under the **MIT** license.

## 🧑‍💻 Author

**Piter Gomes** — Computer Science Student (5th Semester) & Full-Stack Developer

📧 [Email](mailto:piterg.bio@gmail.com) | 💼 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | 💻 [GitHub](https://github.com/pitercoding) | 🌐 [Portfolio](https://portfolio-pitergomes.vercel.app/)