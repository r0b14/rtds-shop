interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Product"
          className="w-full lg:w-1/4 h-48 lg:h-64 object-cover rounded-md shadow-md"
        />
      ))}
    </div>
  );
}
