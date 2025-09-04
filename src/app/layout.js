import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizzaria Olivetto | Pizza artesanal no Rio de Janeiro",
  description: "Um pedaço da Itália no centro do Rio de Janeiro.",
  keywords: [
    "pizzaria no Rio de Janeiro",
    "pizza artesanal RJ",
    "forno a lenha Rio de Janeiro",
    "restaurante italiano RJ",
    "melhor pizza do Rio",
    "reservar mesa pizzaria",
  ],
  authors: [{ name: "Pizzaria Olivetto", url: "https://pizzariaolivetto.com" }],
  openGraph: {
    title: "Pizzaria Olivetto | Pizza artesanal no Rio de Janeiro",
    description:
      "Descubra a verdadeira pizza italiana na Pizzaria Olivetto. Forno a lenha, ingredientes frescos e um ambiente acolhedor no coração do Rio.",
    url: "https://pizzariaolivetto.com",
    siteName: "Pizzaria Olivetto",
    images: [
      {
        url: "/og-image.jpg", // Open Graph
        width: 1200,
        height: 630,
        alt: "Pizza artesanal da Pizzaria Olivetto",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzaria Olivetto | Pizza artesanal no Rio de Janeiro",
    description:
      "Um pedaço da Itália no centro do Rio de Janeiro. Experimente nossas pizzas artesanais no forno a lenha.",
    creator: "@pizzariaolivetto",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://pizzariaolivetto.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}