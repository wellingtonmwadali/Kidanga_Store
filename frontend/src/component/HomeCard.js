import React from "react";

const HomeCard = ({ name, image, category, price }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded-md">
      <div className="w-40 min-h-[150px]">
        <img src={image} className="w-full h-full" />
      </div>
      <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
      <p className="text-sm text-center capitalize">{category}</p>
      <p className="font-bold text-sm text-red-400 text-center">{price}</p>
    </div>
  );
};

export default HomeCard;
