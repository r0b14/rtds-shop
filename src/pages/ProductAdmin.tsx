import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { updateProduct, deleteProduct } from '../services/api'
import { toast } from 'react-toastify'
import { Product } from '../types/product'
import { Link } from 'react-router-dom'

export function ProductAdmin() {
  const {products, setProducts, loading, error } = useProducts()
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newTitle, setNewTitle] = useState('')
  const [newPrice, setNewPrice] = useState<number | ''>('')

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  // excluindo um produto
  async function handleDelete(id: number) {
    try {
      const deleted = await deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.id !== deleted.id))
      toast.success(`Produto "${deleted.title}" excluído!`)
    } catch {
      toast.error('Falha ao excluir produto.')
    }
  }

  // editando um produto
  function startEdit(product: Product) {
    setEditingId(product.id)
    setNewTitle(product.title)
    setNewPrice(product.price)
  }

  // editando um produto
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault()
    if (!editingId) return

    try {
      const updatedData: Partial<Product> = {
        title: newTitle,
        price: Number(newPrice),
      }
      const updated = await updateProduct(editingId, updatedData)
      setProducts((prev) => prev.map((p) => (p.id === editingId ? updated : p)))
      toast.success(`Produto ID ${updated.id} atualizado!`)
      // Reset
      setEditingId(null)
      setNewTitle('')
      setNewPrice('')
    } catch {
      toast.error('Falha ao atualizar produto.')
    }
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <nav className="mb-4 text-sm text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> &gt; 
        <span className="ml-1">Admin de Produtos</span>
      </nav>
      <h2 className="text-xl font-bold mb-4">Admin de Produtos</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-2 flex justify-between">
            <div>
              <strong>{product.title}</strong> - R${product.price}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => startEdit(product)}
                className="bg-blue-500 text-white px-2 py-1"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingId && (
        <form onSubmit={handleUpdate} className="border p-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Editando produto (ID {editingId})</h3>
          <div className="mb-2">
            <label className="block font-semibold">Novo Título</label>
            <input
              className="border border-gray-300 w-full p-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block font-semibold">Novo Preço</label>
            <input
              type="number"
              className="border border-gray-300 w-full p-2"
              value={newPrice}
              onChange={(e) =>
                setNewPrice(e.target.value ? Number(e.target.value) : '')
              }
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2">
            Atualizar
          </button>
        </form>
      )}
    </div>
  )
}
