import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p>count: {count}</p>
      <div className="flex-row m-1 p-2 ">
        <button
          className="m-1 p-2 bg-green-700 text-white rounded-lg "
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          className="m-1 p-2 bg-red-700 text-white rounded-lg "
          onClick={handleDecrement}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};
