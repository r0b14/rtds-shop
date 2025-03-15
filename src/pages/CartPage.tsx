import React from 'react'
import { useCart } from '../context/CartContext'

export function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Carrinho</h2>
      {cartItems.length === 0 && <p>Seu carrinho está vazio.</p>}

      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between border p-2">
            <div>
              <strong>{item.title}</strong> - R${item.price}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-2 py-1"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <button
          onClick={clearCart}
          className="bg-gray-500 text-white px-4 py-2 mt-4"
        >
          Limpar Carrinho
        </button>
      )}
    </div>
  )
}
