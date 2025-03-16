import React, { useEffect, useState } from "react";
import {
  getCartByUserId,
  getCartByUserIdMock,
  deleteCart,
} from "../services/api";
import { useUser } from "../contexts/UserContext";
import { Product } from "../types/product";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface CartItem extends Product {
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
}

export const CartPage = () => {
  const { user } = useUser();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(15);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const cartItems = await getCartByUserId(user.id);
        console.log("Cenário Ideal, cartItems via id usuário:", cartItems);
        const cartItemsMock = await getCartByUserIdMock(2);
        setCart(cartItemsMock.products);
        calculateTotals(cartItemsMock.products);
      }
    };
    fetchCart();
  }, [user]);

  const calculateTotals = (items: CartItem[]) => {
    let subtotal = 0;
    let discount = 0;
    items.forEach((item) => {
      subtotal += item.total;
      discount += item.total - item.discountedTotal;
    });
    setSubtotal(subtotal);
    setDiscount(discount);
    setTotal(subtotal - discount + deliveryFee);
  };

  const updateItemQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
          : item
      )
    );
  };

  const handleIncreaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + 1;
      updateItemQuantity(productId, newQuantity);
      calculateTotals(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
            : item
        )
      );
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateItemQuantity(productId, newQuantity);
      calculateTotals(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
            : item
        )
      );
    }
  };

  const removeItemFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    calculateTotals(cart.filter((item) => item.id !== productId));
  };

  const handleDeleteCart = async () => {
    if (
      window.confirm(
        "Tem certeza de que deseja excluir todos os itens do carrinho?"
      )
    ) {
      try {
        await deleteCart(user.id);
        setCart([]);
        setSubtotal(0);
        setDiscount(0);
        setTotal(0);
        alert("Carrinho excluído com sucesso!");
      } catch (error) {
        console.error("Falha ao excluir o carrinho:", error);
        alert("Falha ao excluir o carrinho. Por favor, tente novamente.");
      }
    }
  };

  if (!Array.isArray(cart)) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Carrinho", path: "/cart" },
          ]}
        />
        <h1 className="text-3xl font-extrabold mb-6">Seu Carrinho</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h2>
                        <p className="text-gray-700">Tamanho: {item.size}</p>
                        <p className="text-gray-700">Cor: {item.color}</p>
                        <p className="text-gray-700">Preço: ${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="bg-gray-200 p-2 rounded-md"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-200 p-2 rounded-md"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-red-500"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="w-full lg:w-1/3 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Desconto</span>
                <span className="text-red-500">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de Entrega</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Adicionar código promocional"
                className="w-full p-2 border rounded-md mb-2"
              />
              <button className="bg-black text-white px-4 py-2 w-full rounded-md hover:bg-gray-800 transition">
                Aplicar
              </button>
            </div>
            <button className="bg-black text-white px-4 py-2 w-full rounded-md hover:bg-gray-800 transition mt-4">
              Finalizar Compra
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 w-full rounded-md hover:bg-red-700 transition mt-4"
              onClick={handleDeleteCart}
            >
              Excluir Carrinho
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
