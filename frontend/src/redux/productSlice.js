import { createSlice, findNonSerializableValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

//products from redux store
const initialState = {
  productList: [],
  cartItem: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItems: (state, action)=>{
      console.log(action)
      const total = action.payload.price
      state.cartItem = [...state.cartItem, {...action.payload, qty : 1, total : total}]

    },
    deleteCartItems: (state, action)=>{
      console.log(action.payload)
      toast("Item removed from cart")
      const index = state.cartItem.findIndex((el)=> el._id === action.payload)
      state.cartItem.splice(index,1)
      console.log(index)

    },
    increaseQty: (state,action)=>{
      const index = state.cartItem.findIndex((el)=> el._id === action.payload)
      let qty = state.cartItem[index].qty
      state.cartItem[index].qty = ++qty

    },
    decreaseQty:(state,action)=>{
      const index = state.cartItem.findIndex((el)=> el._id === action.payload)
      let qty = state.cartItem[index].qty
      state.cartItem[index].qty = --qty

    }
  },
});
export const { setDataProduct, addCartItems, deleteCartItems, increaseQty, decreaseQty } = productSlice.actions;
export default productSlice.reducer;
