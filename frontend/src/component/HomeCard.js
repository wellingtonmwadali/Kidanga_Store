import React from "react";
// retrieved products style
const HomeCard = ({ name, image, category, price, loading }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
      <div className="w-40 min-h-[150px]">
        <img src={image} className="w-full h-full" />
      </div>
      <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
      <p className="text-sm text-center capitalize">{category}</p>
      <p className="font-bold text-sm text-red-400 text-center">{price}</p>
      </>
      ) : (
        <div className="flex justify-center items-center h-full">
      <p>{loading}</p>
      </div>
      )}
      </div>
  );
};

export default HomeCard;
