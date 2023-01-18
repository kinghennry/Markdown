import React from "react";
import "./ModalDelete.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteExistingDocument } from "../../features/allDocuments/allDocumentsSlice";
import { changeStatus } from "../../features/formatStatus/formatStatusSlice";
import { selectDayModToggle } from "../../features/dayModToggle/dayModToggleSlice";
import { pickDocument } from "../../features/currentDocument/currentDocumentSlice";

function ModalDelete({ setShowModalDelete, document }) {
  const dispatch = useDispatch();
  const dayMode = useSelector(selectDayModToggle);

  const handleDelete = () => {
    dispatch(changeStatus(false));
    dispatch(deleteExistingDocument({ document }));
    dispatch(pickDocument({}));
    setShowModalDelete(false);
  };
  return (
    <div
      className={dayMode ? "modal-delete" : "modal-delete modal-delete--night"}
      onClick={() => setShowModalDelete(false)}
    >
      <div
        className="modal-delete__window"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="modal-delete__header">Delete this document?</h3>
        <p className="modal-delete__text">
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button className="modal-delete__button" onClick={handleDelete}>
          Confirm & Delete
        </button>
      </div>
    </div>
  );
}

export default ModalDelete;
