const reviews = [
  { id: 1, user: 'Samantha D.', text: "I absolutely love this t-shirt! It's unique and the fabric feels so comfortable.", rating: 5, date: 'August 14, 2023' },
  { id: 2, user: 'Alex M.', text: "Exceeded my expectations! The colors are vibrant and the print quality is top-notch.", rating: 5, date: 'August 15, 2023' },
  { id: 3, user: 'Ethan R.', text: "A must-have for anyone who appreciates good design.", rating: 5, date: 'August 16, 2023' },
]

export default function ReviewsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-bold">{review.user}</h3>
            <p className="text-gray-600">{review.text}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
