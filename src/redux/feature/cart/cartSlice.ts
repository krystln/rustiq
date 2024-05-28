import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  productID: string[];
}

const initialState = { productID: [] } as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productID.push(action.payload.productID);
    },
    deleteFromCart: (state, action) => {
      state.productID = state.productID.filter(
        (id) => id !== action.payload.productID,
      );
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
