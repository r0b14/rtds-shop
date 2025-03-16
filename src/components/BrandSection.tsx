const brands = ["Gucci", "Zara", "Versace", "Prada", "Calvin Klein"]

export default function BrandSection() {
  return (
    <section className="bg-black py-6 flex justify-center space-x-8">
      {brands.map((brand) => (
        <span key={brand} className="text-white text-xl font-bold uppercase">{brand}</span>
      ))}
    </section>
  )
}
