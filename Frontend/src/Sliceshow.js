import { useState } from 'react';
//một mảng các đường dẫn ảnh
const images = [
  'https://via.placeholder.com/500x250?text=Image+1',
  'https://via.placeholder.com/500x250?text=Image+2',
  'https://via.placeholder.com/500x250?text=Image+3',
  // Thêm các đường dẫn ảnh khác nếu cần
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Slideshow;
