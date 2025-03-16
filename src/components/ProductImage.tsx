interface ProductImageProps {
  image: string;
}

export default function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={image}
        alt="Product"
        className="w-full lg:w-1/2 h-64 lg:h-96 object-cover rounded-md shadow-md"
      />
    </div>
  );
}
