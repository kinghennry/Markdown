import { configureStore } from "@reduxjs/toolkit";
import currentDocumentReducer from "../features/currentDocument/currentDocumentSlice";
import allDocumentsReducer from "../features/allDocuments/allDocumentsSlice";
import formatStatusReducer from "../features/formatStatus/formatStatusSlice";
import dayModToggleReducer from "../features/dayModToggle/dayModToggleSlice";
import sidebarVisibilityReducer from "../features/sidebarVisibility/sidebarVisibilitySlice";

const store = configureStore({
  reducer: {
    currentDocument: currentDocumentReducer,
    allDocuments: allDocumentsReducer,
    formatStatus: formatStatusReducer,
    dayModToggle: dayModToggleReducer,
    sidebarVisibility: sidebarVisibilityReducer,
  },
});

export default store;
