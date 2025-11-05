import React from "react";

const Logo = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <img src={src} alt={alt} className="w-24 h-24 object-contain" />
    </div>
  );
};

export default Logo;
