import { createSlice } from "@reduxjs/toolkit";
//products from redux store
const initialState = {
  productList: [],
  cartList: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      console.log(action);
      state.productList = [...action.payload];
    },
    addCartItems: (state, action)=>{
      console.log(action);

    },
    deleteCartItems: (state, action)=>{

    }
  },
});
export const { setDataProduct, addCartItems, deleteCartItems } = productSlice.actions;
export default productSlice.reducer;
