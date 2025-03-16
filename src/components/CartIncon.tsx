import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartIcon() {
  const { cart } = useCart()

  return (
    <Link to="/cart" className="relative">
      <span className="material-icons text-2xl">shopping_cart</span>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cart.length}
        </span>
      )}
    </Link>
  )
}
