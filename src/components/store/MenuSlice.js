import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
    filteredMenu: [],
  },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setFilteredMenu: (state, action) => {
      state.filteredMenu = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const menuActions = menuSlice.actions;
