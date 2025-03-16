import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition transform hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      </Link>
      <Link to={`/product/${product.id}`} className="block mt-2">
        <h2 className="text-lg font-semibold text-gray-800 hover:underline">{product.title}</h2>
      </Link>
      <p className="text-gray-700 text-lg font-bold">${product.price}</p>
      <button
        className="bg-black text-white px-4 py-2 mt-2 w-full rounded-md hover:bg-gray-800 transition"
        onClick={() => addToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
