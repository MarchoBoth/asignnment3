import React, { useState } from 'react';

export const EventonChange = () => {
  const [input, setInput] = useState('');
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };
  const swhoAlret = () => {
    alert(`anda mensubmit ${input}`);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <button onClick={swhoAlret} a>
        Submit
      </button>
    </div>
  );
};
