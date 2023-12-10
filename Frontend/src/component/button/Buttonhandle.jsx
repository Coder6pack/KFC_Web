import React from 'react';
import TailwindButton from './TailwindButton';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Sử dụng TailwindButton và truyền các props */}
      <TailwindButton onClick={handleClick} className="mt-4">
        Click me
      </TailwindButton>
    </div>
  );
};

export default App;
