import { createSlice, findNonSerializableValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

//This file manipulate products from redux store that is add,delete, increase n decrease quantity
const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItems: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast("Item already added in cart");
      } else {
        toast("Successfully added item to cart");
        console.log(action);
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCartItems: (state, action) => {
      console.log(action.payload);
      toast("Item removed from cart");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = parseInt(state.cartItem[index].qty);
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = parseFloat(state.cartItem[index].price);
      const total = price * qtyInc;
      state.cartItem[index].total = total;
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = parseInt(state.cartItem[index].qty);
      const qtyDec = --qty;
      if (qty > 1) {
        state.cartItem[index].qty = qtyDec;
      }
      const price = parseFloat(state.cartItem[index].price);
      const total = price * qtyDec;
      state.cartItem[index].total = total;
    },
  },
});
export const {
  setDataProduct,
  addCartItems,
  deleteCartItems,
  increaseQty,
  decreaseQty,
} = productSlice.actions;
export default productSlice.reducer;
