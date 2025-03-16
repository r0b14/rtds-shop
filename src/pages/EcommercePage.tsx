import React from 'react'

export default function EcommercePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Barra de promo (topo em fundo preto) */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{' '}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      
      {/* Breadcrumb */}
      <div className="px-8 py-2 text-sm text-gray-500">
        Home &gt; <span className="text-black">Casual</span>
      </div>

      {/* Container principal */}
      <div className="flex px-8 pb-8 space-x-6">
        {/* Sidebar de filtros */}
        <aside className="w-64 hidden lg:block">
          <div className="border rounded p-4 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* Categorias */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <input type="checkbox" id="tshirts" className="mr-2" />
                  <label htmlFor="tshirts">T-shirts</label>
                </li>
                <li>
                  <input type="checkbox" id="shorts" className="mr-2" />
                  <label htmlFor="shorts">Shorts</label>
                </li>
                <li>
                  <input type="checkbox" id="shirts" className="mr-2" />
                  <label htmlFor="shirts">Shirts</label>
                </li>
                <li>
                  <input type="checkbox" id="hoodie" className="mr-2" />
                  <label htmlFor="hoodie">Hoodie</label>
                </li>
                <li>
                  <input type="checkbox" id="jeans" className="mr-2" />
                  <label htmlFor="jeans">Jeans</label>
                </li>
              </ul>
            </div>

            {/* Preço */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price</h3>
              <div>
                {/* Placeholder para slider */}
                <input type="range" min="50" max="200" className="w-full" />
                <div className="flex justify-between text-sm mt-1">
                  <span>$50</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            {/* Cores */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {/* Exemplo de “bolinhas” de cor */}
                {['black', 'white', 'red', 'blue', 'green', 'yellow', 'pink'].map((color) => (
                  <div
                    key={color}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Tamanhos */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="border px-2 py-1 rounded hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Dress Style</h3>
              <ul className="space-y-1 text-sm">
                <li>Casual</li>
                <li>Formal</li>
                <li>Party</li>
                <li>Gym</li>
              </ul>
            </div>

            {/* Botão Apply Filter */}
            <button className="bg-black text-white px-4 py-2 w-full rounded">
              Apply Filter
            </button>
          </div>
        </aside>

        {/* Seção principal de produtos */}
        <div className="flex-1">
          {/* Header: Título e ordenação */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Casual</h1>
            <div className="text-sm text-gray-500">
              Showing 1-10 of 100 Products &nbsp; | &nbsp; Sort by:{' '}
              <span className="font-semibold text-gray-700">Most Popular</span>
            </div>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card de produto (placeholder) */}
            {mockProducts.map((prod) => (
              <div
                key={prod.id}
                className="border rounded p-4 hover:shadow-md transition"
              >
                {/* Imagem */}
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-60 object-cover mb-3"
                />
                {/* Título */}
                <h3 className="font-semibold mb-1">{prod.title}</h3>
                {/* Avaliação */}
                <div className="text-yellow-500 text-sm mb-1">
                  {'★'.repeat(prod.rating)}{'☆'.repeat(5 - prod.rating)}
                  <span className="text-gray-500 ml-2 text-xs">({prod.rating}.0/5)</span>
                </div>
                {/* Preço */}
                <div className="text-lg mb-1">
                  <span className="font-bold text-gray-800">${prod.price}</span>
                  {prod.oldPrice && (
                    <>
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${prod.oldPrice}
                      </span>
                      <span className="text-sm text-red-500 ml-2">
                        {prod.discount}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex items-center justify-center mt-6 space-x-2 text-sm">
            <button className="border px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">
              Previous
            </button>
            <button className="px-2 py-1 font-semibold text-black">1</button>
            <button className="px-2 py-1 text-gray-600 hover:underline">2</button>
            <button className="px-2 py-1 text-gray-600 hover:underline">3</button>
            <span>...</span>
            <button className="px-2 py-1 text-gray-600 hover:underline">10</button>
            <button className="border px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exemplo de array mockado de produtos
const mockProducts = [
  {
    id: 1,
    img: 'https://via.placeholder.com/300x400?text=T-Shirt+Colorida',
    title: 'Gradient Graphic T-shirt',
    rating: 3,
    price: 145,
    oldPrice: null,
    discount: null,
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/300x400?text=Polo+Tipping+Details',
    title: 'Polo with Tipping Details',
    rating: 4,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/300x400?text=Black+Striped+T-shirt',
    title: 'Black Striped T-shirt',
    rating: 5,
    price: 120,
    oldPrice: 150,
    discount: 30,
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/300x400?text=Skinny+Fit+Jeans',
    title: 'Skinny Fit Jeans',
    rating: 3,
    price: 240,
    oldPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/300x400?text=Checkered+Shirt',
    title: 'Checkered Shirt',
    rating: 4,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 6,
    img: 'https://via.placeholder.com/300x400?text=Sleeve+Striped+T-shirt',
    title: 'Sleeve Striped T-shirt',
    rating: 4,
    price: 130,
    oldPrice: 160,
    discount: 30,
  },
  {
    id: 7,
    img: 'https://via.placeholder.com/300x400?text=Vertical+Striped+Shirt',
    title: 'Vertical Striped Shirt',
    rating: 5,
    price: 212,
    oldPrice: 232,
    discount: 20,
  },
  {
    id: 8,
    img: 'https://via.placeholder.com/300x400?text=Courage+Graphic+T-shirt',
    title: 'Courage Graphic T-shirt',
    rating: 4,
    price: 145,
    oldPrice: null,
    discount: null,
  },
  {
    id: 9,
    img: 'https://via.placeholder.com/300x400?text=Loose+Fit+Bermuda+Shorts',
    title: 'Loose Fit Bermuda Shorts',
    rating: 3,
    price: 80,
    oldPrice: null,
    discount: null,
  },
]
