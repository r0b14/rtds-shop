import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
}

interface Props {
  title: string
  products: Product[]
  addToCart: (product: Product) => void
}

export default function ProductSection({ title, products, addToCart }: Props) {
  return (
    <section className="my-12 px-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <ProductCard
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
            <button
              className="bg-black text-white px-4 py-2 mt-2 w-full rounded-md hover:bg-gray-800 transition"
              onClick={() => addToCart(product)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-200 transition">
          View All
        </button>
      </div>
    </section>
  )
}
