// In CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.uniqueId === action.payload.uniqueId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.uniqueId === action.payload.uniqueId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.uniqueId === action.payload.uniqueId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.uniqueId !== action.payload.uniqueId);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.uniqueId !== action.payload.uniqueId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
