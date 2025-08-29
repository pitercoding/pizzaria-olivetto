import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Pizzaria Olivetto</div>
        <nav className="space-x-6 hidden md:flex">
          <Link href="#galeria">Galeria</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#bebidas">Bebidas</Link>
          <Link href="#contato">Contato</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="TikTok">
            TT
          </a>
        </div>
      </div>
    </header>
  );
}
