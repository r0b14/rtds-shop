import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useUser } from "../contexts/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    if (user) {
      if (window.confirm("Deseja deslogar?")) {
        logout();
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          RTDS SHOP
        </Link>

        {/* Ícones */}
        <div className="flex items-center space-x-4">
          <FaUser
            className="text-2xl text-gray-700 hover:text-black transition cursor-pointer"
            onClick={handleUserIconClick}
          />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-black transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
