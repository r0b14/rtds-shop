import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart((prevCart) => [...prevCart, product]); // 🔥 Adiciona sem remover os itens antigos
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
