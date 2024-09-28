import React from 'react';

export const Product = ({ id, name, price, description, image }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{image}</p>
      <p>product name : {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
    </div>
  );
};
