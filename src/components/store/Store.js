import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import menuReducer from "./MenuSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
   
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

export default store;
