// src/pages/ProductDetails.tsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductById } from '../hooks/useProductById'
import { useCart } from '../context/CartContext'

export function ProductDetails() {
  const { id } = useParams()
  const productId = id ? parseInt(id) : undefined
  const { product, loading, error } = useProductById(productId)
  const { addToCart } = useCart()

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>Preço: R${product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 mt-4"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
