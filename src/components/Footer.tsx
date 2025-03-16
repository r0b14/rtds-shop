import { FaFacebookF, FaInstagram, FaPinterest, FaRegEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      {/* Newsletter */}
      <div className="bg-black text-white py-10 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-extrabold mb-4">
          FIQUE POR DENTRO DAS NOSSAS ÚLTIMAS OFERTAS
        </h2>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full w-full max-w-md">
          <FaRegEnvelope className="text-gray-500" />
          <input
            type="email"
            placeholder="Digite seu endereço de e-mail"
            className="flex-1 bg-transparent focus:outline-none text-gray-800"
          />
        </div>
        <button className="bg-white text-black px-6 py-2 mt-4 rounded-full hover:bg-gray-200 transition">
          Inscreva-se na Newsletter
        </button>
      </div>

      {/* Informações e Links */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e redes sociais */}
        <div>
          <h3 className="text-2xl font-bold">SHOP.CO</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Temos roupas que combinam com o seu estilo e que você se orgulha de usar. De mulheres a homens.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-gray-600 hover:text-black transition cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-black transition cursor-pointer" />
            <FaPinterest className="text-gray-600 hover:text-black transition cursor-pointer" />
          </div>
        </div>

        {/* Links úteis */}
        <div>
          <h4 className="text-lg font-semibold mb-4">EMPRESA</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Sobre</a></li>
            <li><a href="#" className="hover:text-black">Recursos</a></li>
            <li><a href="#" className="hover:text-black">Como Funciona</a></li>
            <li><a href="#" className="hover:text-black">Carreira</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">AJUDA</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Suporte ao Cliente</a></li>
            <li><a href="#" className="hover:text-black">Detalhes de Entrega</a></li>
            <li><a href="#" className="hover:text-black">Termos e Condições</a></li>
            <li><a href="#" className="hover:text-black">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">FAQ</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Conta</a></li>
            <li><a href="#" className="hover:text-black">Gerenciar Entregas</a></li>
            <li><a href="#" className="hover:text-black">Pedidos</a></li>
            <li><a href="#" className="hover:text-black">Pagamentos</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 max-w-7xl mx-auto px-6">
        <p>Shop.co © 2000-2023. Todos os Direitos Reservados</p>
      </div>
    </footer>
  )
}
