import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import menuReducer from "./MenuSlice"

const store = configureStore({
  reducer: {
   
    auth: authReducer,
    menu: menuReducer
  },
});

export default store;
