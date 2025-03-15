import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '../types/product'

interface CartContextData {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextData | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([])

  function addToCart(product: Product) {
    setCartItems((prev) => [...prev, product])
  }

  function removeFromCart(productId: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
