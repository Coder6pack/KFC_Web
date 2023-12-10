import React from 'react';

const TailwindButton = ({ onClick, className, children }) => {
  // Sử dụng các props truyền vào để tùy chỉnh class cho button
  // Mặc định là style cho một button màu Đỏ
  const buttonClasses = `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default TailwindButton;
