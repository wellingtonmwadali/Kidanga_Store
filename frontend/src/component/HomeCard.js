import React from "react";
import { Link } from "react-router-dom";

//This file deals with retrieving products in the menu page

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="w-40 min-h-[150px]">
              <img src={image} alt = "" className="w-full h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-sm text-center capitalize">{category}</p>
            <p className="font-bold text-sm text-red-400 text-center">
              {price}
            </p>
          </Link>
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
