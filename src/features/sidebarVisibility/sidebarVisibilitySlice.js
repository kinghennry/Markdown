import { createSlice } from "@reduxjs/toolkit";

//basically toggle sidebar
const sidebarVisibility = createSlice({
  name: "sidebarVisibility",
  initialState: false,
  reducers: {
    showSidebar: (state) => true,
    hideSidebar: (state) => false,
  },
});

export const { showSidebar, hideSidebar } = sidebarVisibility.actions;

export const selectSidebarVisibility = (state) => state.sidebarVisibility;

export default sidebarVisibility.reducer;
