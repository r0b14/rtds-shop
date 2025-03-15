import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) throw new Error('Erro ao buscar produtos')
        const data = await response.json()
        setProducts(data.products) // API retorna { products: [...] }
      } catch (err) {
        setError('Falha ao carregar produtos.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
