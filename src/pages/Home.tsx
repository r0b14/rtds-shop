import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export function Home() {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [dailyDeals, setDailyDeals] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()

        setProducts(data.products.slice(0, 8)) // Lista geral
        setDailyDeals(data.products.slice(9, 13)) // Ofertas do dia
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* Banner Principal */}
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/1200x400/FFD700/000000?text=Oferta+Especial+MercadoClone"
          alt="Banner Promo"
          className="w-full rounded-md shadow-md"
        />
      </div>

      {/* Ofertas do Dia */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">🔥 Ofertas do Dia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dailyDeals.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow border">
              <ProductCard
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
              <button
                className="bg-yellow-500 text-white px-3 py-1 mt-2 w-full rounded-md hover:bg-yellow-600 transition"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mais Vendidos */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">🏆 Mais Vendidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow border">
              <ProductCard
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
              <button
                className="bg-yellow-500 text-white px-3 py-1 mt-2 w-full rounded-md hover:bg-yellow-600 transition"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
