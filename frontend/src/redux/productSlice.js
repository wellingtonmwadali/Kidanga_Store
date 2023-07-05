import { createSlice } from "@reduxjs/toolkit";
//products from redux store
const initialState = {
  productlist: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      console.log(action);
      state.productlist = [...action.payload];
    },
  },
});
export const { setDataProduct } = productSlice.actions;
export default productSlice.reducer;
