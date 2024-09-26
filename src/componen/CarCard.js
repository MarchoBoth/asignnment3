import React from 'react';

export const CarCard = ({ title, description, year, image }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden m-4 border border-gray-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="mt-2">
          {year > 2020 ? (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          ) : (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              Stock Sale
            </span>
          )}
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Details
        </button>
      </div>
    </div>
  );
};
