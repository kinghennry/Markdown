import { createSlice } from "@reduxjs/toolkit";
import initialState from "../helperFunctions";

const currentDocumentSlice = createSlice({
  name: "currentDocument",
  initialState: initialState[initialState.length - 1],
  reducers: {
    pickDocument: (state, action) => action.payload,
    changeDocumentContent: (state, action) => {
      state.content = action.payload.value;
    },
  },
});

export const { pickDocument, changeDocumentContent } =
  currentDocumentSlice.actions;

export const selectCurrentDocument = (state) => state.currentDocument;

export default currentDocumentSlice.reducer;
