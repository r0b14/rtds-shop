import { useEffect, useState } from 'react'
import { getProductById } from '../services/api'
import { Product } from '../types/product'

export function useProductById(productId: number | null) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (productId === null) return
    async function fetchProduct() {
      try {
        setLoading(true)
        const data = await getProductById(productId)
        setProduct(data)
      } catch (err) {
        setError('Erro ao carregar produto.')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [productId])

  return { product, loading, error }
}
