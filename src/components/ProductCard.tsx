import React from 'react'

interface ProductCardProps {
  title: string
  price: number
  thumbnail: string
}

function ProductCard({ title, price, thumbnail }: ProductCardProps) {
  return (
    <div className="border rounded p-3 shadow-sm flex flex-col items-center">
      <img src={thumbnail} alt={title} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-semibold">{title}</h3>
      <p>R${price}</p>
    </div>
  )
}

export default ProductCard
