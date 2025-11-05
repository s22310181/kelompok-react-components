import React from "react";

const TypeEffect = ({ type }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-semibold text-blue-700">Type Effect</h2>
      <p className="mt-2 text-blue-600">{type}</p>
    </div>
  );
};

export default TypeEffect;
