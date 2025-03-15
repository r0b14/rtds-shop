import { Product } from '../types/product'

const STORAGE_KEY = 'rtds_products'

// Dados iniciais para evitar lista vazia
const initialProducts: Product[] = [
  {
    id: 1,
    title: 'Camiseta Preta',
    description: 'Camiseta de algodão confortável',
    price: 79.90,
    brand: 'Nike',
    category: 'Roupas',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Tênis Esportivo',
    description: 'Ideal para corrida e atividades físicas',
    price: 299.99,
    brand: 'Adidas',
    category: 'Calçados',
    thumbnail: 'https://via.placeholder.com/150',
  }
]

// Lê os produtos do localStorage ou inicializa com os produtos padrão
function getProductsFromLocalStorage(): Product[] {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts))
    return initialProducts
  }
}

function saveProductsToLocalStorage(products: Product[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export function getAllProductsLocal(): Product[] {
  return getProductsFromLocalStorage()
}

export function addProductLocal(data: Omit<Product, 'id'>): Product {
  const products = getProductsFromLocalStorage()
  const maxId = products.length ? Math.max(...products.map((p) => p.id)) : 0
  const newProduct: Product = { id: maxId + 1, ...data }
  products.push(newProduct)
  saveProductsToLocalStorage(products)
  return newProduct
}

export function updateProductLocal(id: number, partialData: Partial<Product>): Product | null {
  const products = getProductsFromLocalStorage()
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return null

  products[index] = { ...products[index], ...partialData }
  saveProductsToLocalStorage(products)
  return products[index]
}

export function deleteProductLocal(id: number): Product | null {
  const products = getProductsFromLocalStorage()
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return null

  const deleted = products.splice(index, 1)[0]
  saveProductsToLocalStorage(products)
  return deleted
}
