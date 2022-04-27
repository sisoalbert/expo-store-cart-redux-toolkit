import { configureStore } from "@reduxjs/toolkit";
//import cartReducer
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
