import React, { useState } from 'react'
import { addProduct } from '../services/api'
import { Product } from '../types/product'

export function AddProductForm() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState<number | ''>('') // TypeScript: string vazia ou number
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title || !price) {
      setMessage('Preencha todos os campos!')
      return
    }

    try {
      const newProduct: Partial<Product> = {
        title,
        price: Number(price)
      }

      const result = await addProduct(newProduct) 
      setMessage(`Produto criado com id: ${result.id}`)
      // Limpe o formulário ou faça qualquer ação necessária
    } catch (error) {
      console.log(error)
      setMessage('Erro ao criar o produto.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label>
        Título:
        <input
          className="border px-2 py-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Preço:
        <input
          className="border px-2 py-1"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Adicionar Produto
      </button>

      {message && <p>{message}</p>}
    </form>
  )
}
