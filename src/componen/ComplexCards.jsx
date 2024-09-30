import React from 'react';

export const ComplexCards = ({
  id,
  name,
  description,
  region,
  like,
  gambar,
}) => {
  return (
    <div className="w-[500px] mx-auto mb-3 bg-white shadow-lg  overflow-hidden border border-gray-300">
      <div className="flex items-center p-1">
        {/* Image placeholder */}
        <img
          src={gambar}
          alt="profile"
          className="w-28 h-28 border border-black"
        />{' '}
        {/* Use image path here */}
        {/* Text content */}
        <div className="ml-2">
          <h1 className="text-xl flex flex-row font-bold text-blue-500 text-left   p-1">
            {name} <p className="text-gray-500">-{region}</p>
          </h1>
          <p className="text-gray-600 text-left font-bold   p-1">
            {description}
          </p>
          <div className="flex flex-row">
            <p className="text-left text-blue-500  p-1 font-bold">
              Like - Replay
            </p>
            <p className="text-left ml-2 p-1 text-gray-400 font-bold">{like}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
