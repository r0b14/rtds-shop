import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/CartPage";
import { ProductAdmin } from "./pages/ProductAdmin";
import { AddProductForm } from "./pages/AddProductForm";
import ProductPage from "./pages/ProductPage";
import Login from "./components/Login";
import Signup from "./pages/SignUp";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<ProductAdmin />} />
          <Route path="/create" element={<AddProductForm />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
