import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
