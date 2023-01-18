import { createSlice } from "@reduxjs/toolkit";
import initialState, { updateLocalStorage } from "../helperFunctions";
// localStorage.clear();

const allDocumentsSlice = createSlice({
  name: "allDocuments",
  initialState: localStorage.getItem("allDocuments")
    ? JSON.parse(localStorage.getItem("allDocuments"))
    : initialState,
  reducers: {
    addNewDocument: (state, action) => {
      state.push(action.payload);
      updateLocalStorage("allDocuments", state);
    },
    updateExistingDocument: (state, action) => {
      const foundElement = state.find(
        (element) => element.id === action.payload.id
      );
      if (foundElement) {
        foundElement.content = action.payload.content;
        foundElement.name = action.payload.name;
        updateLocalStorage("allDocuments", state);
      }
    },
    deleteExistingDocument: (state, action) => {
      const elementIndex = state.findIndex(
        (element) => element.id === action.payload.document.id
      );
      state.splice(elementIndex, 1);
      updateLocalStorage("allDocuments", state);
    },
  },
});

export const {
  addNewDocument,
  updateExistingDocument,
  deleteExistingDocument,
} = allDocumentsSlice.actions;

export const selectAllDocuments = (state) => state.allDocuments;

export default allDocumentsSlice.reducer;
