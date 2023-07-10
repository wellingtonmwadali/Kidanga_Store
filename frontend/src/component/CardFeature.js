import React from "react";
import { Link } from "react-router-dom";

//other products(vegetables) display
//loading props
const CardFeature = ({ image, name, price, category, loading, id}) => {
  return (
    <div className="w-full  min-w-[235px] max-w-[235px] bg-white hover:shadow-lg drop-shadow-lg py-3 px-4 cursor-pointer flex flex-col">
      {image ? (
        <>
          <Link to={`menu/${id}`}>
            <div className="h-24 flex flex-col justify-center items-center">
              <img src={image} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg text-center mt-2 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-sm capitalize text-center">{category}</p>
            <p className="font-bold text-sm text-red-400 text-center">
              {price}
            </p>
            <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-1 px-2 mt-2 w-full">
              Add Cart
            </button>
          </Link>
        </>
      ) : (
        <div className="min-h-[110px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
