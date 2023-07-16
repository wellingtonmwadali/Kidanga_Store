import React from 'react'
import { CiForkAndKnife } from "react-icons/ci";

//This file filter categories in the homepage

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl rounded-full p-4 cursor-pointer ${
          isActive ? "bg-orange-500 " : "bg-yellow-500"
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium capitalize my-1">{category}</p>
    </div>
  );
};

export default FilterProduct;