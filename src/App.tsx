import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { ProductAdmin } from './pages/ProductAdmin'
import { AddProductForm } from './pages/AddProductForm'
import Navbar from './components/Navbar'
import EcommercePage from './pages/EcommercePage'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<ProductAdmin />} />
        <Route path="/create" element={<AddProductForm />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
