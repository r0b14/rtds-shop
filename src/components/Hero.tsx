export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 py-16 px-8">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="text-gray-600 mt-4">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black text-white px-6 py-3 mt-6 rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-8 lg:mt-0">
        <img
          src="https://via.placeholder.com/500x500"
          alt="Fashion models"
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  )
}
