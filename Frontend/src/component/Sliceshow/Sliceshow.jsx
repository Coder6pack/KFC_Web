import { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  // Sử dụng useState để lưu trữ index của ảnh đang hiển thị
  const [currentImage, setCurrentImage] = useState(0);

  // Sử dụng useEffect để tự động chuyển đổi ảnh sau một khoảng thời gian nhất định
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Thay đổi ảnh sau mỗi 5 giây

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Hiển thị ảnh hiện tại */}
      <img
        src={images[currentImage]}
        alt={`Slideshow ${currentImage + 1}`}
        className="w-full rounded-md shadow-md"
      />
      {/* Hiển thị nút chuyển ảnh */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex space-x-2">
        {/* Nút chuyển ảnh về phía trước */}
        <button
          onClick={() => setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
          className="bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Prev
        </button>
        {/* Nút chuyển ảnh về phía sau */}
        <button
          onClick={() => setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)}
          className="bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
