import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Lado esquerdo (Imagem) */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <img
          src="https://via.placeholder.com/600x500?text=Product+Image"
          alt="Cadeira elegante"
          className="max-w-md"
        />
      </div>

      {/* Lado direito (Formulário) */}
      <div className="flex-1 flex items-center justify-center bg-white px-8">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            3legant.
          </h1>

          {/* Título */}
          <h2 className="text-3xl font-semibold">Sign up</h2>
          <p className="mt-2 text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Sign in
            </Link>
          </p>

          {/* Formulário */}
          <form className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-600"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree with{' '}
                <span className="font-semibold text-gray-900">Privacy Policy</span> and{' '}
                <span className="font-semibold text-gray-900">Terms of Use</span>
              </label>
            </div>

            {/* Botão */}
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
