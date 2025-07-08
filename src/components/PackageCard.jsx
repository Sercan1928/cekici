import React from "react";

const PackageCard = ({ name, description, price, onBuy }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center border-t-4 border-primary">
    <h2 className="text-xl font-bold text-primary mb-1">{name}</h2>
    <p className="text-gray-500 mb-3">{description}</p>
    <div className="text-2xl font-extrabold text-secondary mb-3">{price}₺</div>
    <button
      className="bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-all"
      onClick={onBuy}
    >
      Satın Al
    </button>
  </div>
);

export default PackageCard;
