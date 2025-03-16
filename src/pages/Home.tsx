import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
import ProductGrid from "../components/ProductGrid";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Carregando produtos...</p>
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandSection />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <ProductGrid title="New Arrivals" products={products.slice(0, 4)} />
        <ProductGrid title="Top Selling" products={products.slice(4, 8)} />

        <div className="flex justify-center mt-12">
          <button
            className="bg-black text-white px-4 py-2 mt-2 w-full rounded-md hover:bg-gray-800 transition"
            onClick={() => navigate("/products")}
          >
            Explorar Mais Produtos
          </button>
        </div>
      </main>
    </>
  );
}
