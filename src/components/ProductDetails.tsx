import { useState } from "react";
import { useCart } from "../context/CartContext";
import { updateCart } from "../services/api"; // Importar a função updateCart

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  quantity?: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0] : ""
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      await updateCart(1, {
        merge: true,
        products: [
          {
            id: product.id,
            quantity,
          },
        ],
      });
      addToCart({
        ...product,
        quantity,
        thumbnail: "",
      });
      alert("Product added to cart successfully!");
      window.location.href = "/cart";
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      {/* <ProductImage image={product.images[0]} /> */}
      {/* Nome do Produto */}
      <h1 className="text-3xl font-extrabold">{product.title}</h1>

      {/* Avaliação */}
      <div className="flex items-center space-x-2">
        <span className="text-yellow-500 text-xl">⭐ {product.rating}/5</span>
        <span className="text-gray-500 text-sm">(451 Reviews)</span>
      </div>

      {/* Preço */}
      <div className="flex items-center space-x-3 text-lg">
        <span className="font-bold text-gray-900">${product.price}</span>
        {product.oldPrice && (
          <>
            <span className="line-through text-gray-500">
              ${product.oldPrice}
            </span>
            <span className="text-red-500">-{product.discount}%</span>
          </>
        )}
      </div>

      {/* Descrição */}
      <p className="text-gray-600">{product.description}</p>

      {/* Seleção de Cores */}
      <div>
        <span className="text-gray-700 font-semibold">Select Colors:</span>
        <div className="flex space-x-2 mt-2">
          {product.colors &&
            product.colors.length > 0 &&
            product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border ${
                  selectedColor === color ? "border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
        </div>
      </div>

      {/* Seleção de Tamanho */}
      <div>
        <span className="text-gray-700 font-semibold">Choose Size:</span>
        <div className="flex space-x-3 mt-2">
          {product.sizes &&
            product.sizes.length > 0 &&
            product.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
        </div>
      </div>

      {/* Seleção de Quantidade */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-semibold">Quantity:</span>
        <div className="flex items-center border px-3 py-1 rounded-md">
          <button
            className="text-gray-600 text-lg"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="text-gray-600 text-lg"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Botão "Adicionar ao Carrinho" */}
      <button
        className="bg-black text-white px-6 py-3 w-full rounded-md hover:bg-gray-800 transition"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
