import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";
import Reviews from "../components/ReviewsSection";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProductImage";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null); // 🔹 Resetando o erro ao tentar carregar novamente

        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(
            `Erro ao carregar o produto (Status ${response.status})`
          );
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setError(
          "Não foi possível carregar o produto. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    } else {
      setError("ID do produto não encontrado.");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Carregando produto...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!product) {
    return (
      <p className="text-center text-red-500 mt-10">Produto não encontrado.</p>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto flex justify-center items-center flex-col ">
        <div className="container px-6 py-12 grid md:grid-cols-2 gap-12">
          {/* Imagens do Produto */}
          {/* <ProductImages images={product.images || []} /> */}
          <ProductImage image={product.images[0]} />
          {/* Detalhes do Produto */}
          <ProductDetails product={product} />
        </div>

        {/* Seção de Reviews */}
        <Reviews />
      </main>
    </>
  );
}
