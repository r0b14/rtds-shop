import axios from 'axios'
import { Product } from '../types/product'

const api = axios.create({
  baseURL: 'https://dummyjson.com'
})

export async function getAllProducts(): Promise<Product[]> {
  const response = await api.get('/products')
  return response.data.products
}

export async function getProductById(id: number): Promise<Product> {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export async function addProduct(data: Partial<Product>): Promise<Product> {
  const response = await api.post('/products/add', data)
  return response.data
}

export async function updateProduct(
  id: number,
  data: Partial<Product>
): Promise<Product> {
  const response = await api.put(`/products/${id}`, data)
  return response.data
}

export async function deleteProduct(id: number): Promise<Product> {
  const response = await api.delete(`/products/${id}`)
  return response.data
}
