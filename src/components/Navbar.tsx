import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="bg-yellow-400 shadow-md py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          MercadoClone
        </Link>

        {/* Barra de Pesquisa */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Ícones */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-900 hover:text-black transition">
            <FaUser className="text-2xl" />
          </Link>
          <Link to="/cart" className="relative text-gray-900 hover:text-black transition">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Menu de categorias */}
      <nav className="mt-2 flex space-x-6 text-sm text-gray-800 font-semibold">
        <Link to="/electronics" className="hover:text-gray-900">Eletrônicos</Link>
        <Link to="/fashion" className="hover:text-gray-900">Moda</Link>
        <Link to="/home" className="hover:text-gray-900">Casa</Link>
        <Link to="/sports" className="hover:text-gray-900">Esportes</Link>
        <Link to="/beauty" className="hover:text-gray-900">Beleza</Link>
      </nav>
    </header>
  )
}
