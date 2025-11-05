import React from "react";

const Evolution = ({ text }) => {
  return (
    <div className="p-4 bg-green-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-semibold text-green-700">Evolution</h2>
      <p className="mt-2 text-green-600">{text}</p>
    </div>
  );
};

export default Evolution;
