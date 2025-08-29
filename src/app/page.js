import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Menu from "@/components/Menu";
import Drinks from "@/components/Drinks";
import Hours from "@/components/Hours";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="pt-20">
        <Hero />
        <Welcome />
        <Menu />
        <Drinks />
        <Hours />
        <FAQ />
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
