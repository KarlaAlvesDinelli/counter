import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center bg-white p-12 rounded-lg shadow-md">
        <h1 className="text-2x1 font-bold mb-12">Meu Contador: {count}</h1>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            onClick={increment}
          >
            +1
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            onClick={decrement}
            disabled={count === 0}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
