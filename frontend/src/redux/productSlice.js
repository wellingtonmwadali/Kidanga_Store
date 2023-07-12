import { createSlice } from "@reduxjs/toolkit";
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

    }
  },
});
export const { setDataProduct, addCartItems, deleteCartItems } = productSlice.actions;
export default productSlice.reducer;
