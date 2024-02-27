import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItems,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

//This file deals with cart product checkout->increase or decrease no of products or delete products

const CartProduct = ({ id, name, image, category, price, qty, total }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-200 p-3 flex gap-4 border border-slate-400">
      <div className="bg-white p-2">
        <img src={image} alt = "" className="h-28 w-40 object-cover rounded" />
      </div>
      <div className="flex flex-col gap-1 px-3 w-full">
        <div className="flex justify-between">
          <h3 className="font-bold text-slate-600 capitalize text-lg md:text-1xl">
            {name}
          </h3>
          {/**delete product */}
          <div
            className="cursor-pointer text-lg text-slate-800 hover:text-red-400"
            onClick={() => dispatch(deleteCartItems(id))}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className="text-sm capitalize ">{category}</p>
        <p className="font-bold text-sm text-red-400 md:text-sm">{price}</p>
        <div className="flex justify-between">
          <div className=" flex gap-3 items-center">
            {/**add or reduce products */}
            <button
              className="bg-slate-300 hover:bg-yellow-600 text-white font-bold p-1"
              onClick={() => dispatch(increaseQty(id))}
            >
              <AiOutlinePlus />
            </button>
            <p>{qty}</p>
            <button
              className="bg-slate-300 hover:bg-yellow-600 text-white font-bold p-1"
              onClick={() => dispatch(decreaseQty(id))}
            >
              <AiOutlineMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <p>Total:</p>
            <p className="text-red-400">
              {total}
              <span className="text-red-500">/-</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
