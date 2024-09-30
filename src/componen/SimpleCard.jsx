import React from 'react';

export const SimpleCard = () => {
  return (
    <div className="max-w-sm mx-auto mb-3 bg-white shadow-lg  overflow-hidden border border-gray-300">
      <div className="flex items-center p-1">
        {/* Image placeholder */}
        <div className="w-24 h-24 bg-yellow-200 text-yellow-600 font-bold flex justify-center items-center  border border-yellow-700">
          IMG
        </div>
        {/* Text content */}
        <div className="ml-2">
          <h1 className="text-xl font-bold text-orange-500 text-left border border-yellow-700  p-1">
            A Title
          </h1>
          <p className="text-gray-600 text-left border border-yellow-700  p-1">
            Lorem, ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
};
