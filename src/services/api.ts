import axios from "axios";
import { Product } from "../types/product";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export async function getAllProducts(): Promise<Product[]> {
  const response = await api.get("/products");
  return response.data.products;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await api.get(`/products/search?q=${query}`);
  return response.data.products;
}

export async function getCategories(): Promise<string[]> {
  const response = await api.get("/products/categories");
  return response.data;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const response = await api.get(`/products/category/${category}`);
  return response.data.products;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

export async function addProduct(data: Partial<Product>): Promise<Product> {
  const response = await api.post("/products/add", data);
  return response.data;
}

export async function updateProduct(
  id: number,
  data: Partial<Product>
): Promise<Product> {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
}

export async function deleteProduct(id: number): Promise<Product> {
  const response = await api.delete(`/products/${id}`);
  return response.data;
}

export async function addCart(data: Partial<Product>): Promise<Product> {
  const response = await api.post("/carts/add", data);
  return response.data;
}

export async function getCartByUserId(userId: number): Promise<Product[]> {
  const response = await api.get(`/carts/user/${userId}`);
  return response.data;
}
export async function getCartByUserIdMock(cartId: number): Promise<Product[]> {
  const response = await api.get(`/carts/${cartId}`);
  return response.data;
}

export async function deleteCart(id: number): Promise<Product> {
  const response = await api.delete(`/carts/${id}`);
  return response.data;
}

export async function updateCart(
  id: number,
  data: { merge: boolean; products: { id: number; quantity: number }[] }
): Promise<Product> {
  const response = await api.put(`/carts/${id}`, data);
  return response.data;
}

export async function login(data: { username: string; password: string }) {
  const response = await api.post("/auth/login", data);
  return response.data;
}

export async function register(data: {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  email: string;
  password: string;
}) {
  const response = await api.post("/users/add", data);
  return response.data;
}

export async function getProducts(
  skip: number,
  limit: number
): Promise<Product[]> {
  const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return response.data.products;
}
