import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../helperFunctions";

//change the theme with redux toolkit

const dayModToggle = createSlice({
  name: "dayModToggle",
  initialState: localStorage.getItem("dayModToggle")
    ? JSON.parse(localStorage.getItem("dayModToggle"))
    : true,
  reducers: {
    toggle: (state) => {
      state = !state;
      updateLocalStorage("dayModToggle", state);
      return state;
    },
  },
});

export const { toggle } = dayModToggle.actions;

export const selectDayModToggle = (state) => state.dayModToggle;

export default dayModToggle.reducer;
