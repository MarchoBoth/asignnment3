import React, { useState } from 'react';

export const MyForm = () => {
  const [value, setValue] = useState('Coconut');
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    alert('Your faforit flavor is: ' + value);
    //event.preventDefault(); menahan website agar tidak merefresh website
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        pick youre favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="Grapefruit">Grapefruit</option>
          <option value="Lime">Lime</option>
          <option value="Coconut">Coconut</option>
          <option value="Manggo">Manggo</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
