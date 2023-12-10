import { useState } from 'react';

const Suggestions = () => {
  // Sử dụng useState để lưu trữ giá trị của input
  const [inputValue, setInputValue] = useState('');
  // Danh sách các đề xuất
  const suggestions = ['JavaScript', 'Python', 'HTML', 'CSS', 'Tailwind CSS', 'React', 'Vue.js'];

  // Lọc danh sách đề xuất dựa trên giá trị của input
  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  // Xử lý sự kiện thay đổi giá trị của input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Chọn một đề xuất từ danh sách
  const selectSuggestion = (value) => {
    setInputValue(value);
  };

  return (
    <div className="relative">
      {/* Input để nhập giá trị */}
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-64 border border-gray-300 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
        autoComplete="off"
      />
      {/* Hiển thị danh sách đề xuất */}
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 left-0 mt-1 w-64 bg-white border border-gray-300 rounded-md shadow-md">
          {filteredSuggestions.map((suggestion, index) => (
            // Mỗi phần tử trong danh sách đề xuất
            <li
              key={index}
              className="py-1 px-3 cursor-pointer hover:bg-gray-100 transition duration-300"
              onClick={() => selectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;
