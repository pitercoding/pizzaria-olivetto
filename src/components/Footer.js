export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold mb-2">Pizzaria Olivetto</h3>
          <p>Endereço, cidade, estado</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Links Rápidos</h3>
          <ul className="space-y-1">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#bebidas">Bebidas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a href="#">IG</a>
            <a href="#">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
