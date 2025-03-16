import ProductCard from './ProductCard'

interface ProductGridProps {
  title: string
  products: any[]
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
