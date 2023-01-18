import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectCurrentDocument } from "../../features/currentDocument/currentDocumentSlice";
import { showSidebar } from "../../features/sidebarVisibility/sidebarVisibilitySlice";
import { updateExistingDocument } from "../../features/allDocuments/allDocumentsSlice";
import ModalDelete from "../ModalDelete/ModalDelete";

import "./Header.css";

//icons
import iconMenu from "../../assets/icon-menu.svg";
import iconDocument from "../../assets/icon-document.svg";
import iconSave from "../../assets/icon-save.svg";
import IconDelete from "../Icons/IconDelete/IconDelete";

function Header() {
  const dispatch = useDispatch();
  const document = useSelector(selectCurrentDocument);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [documentName, setDocumentName] = useState(document.name);

  //   show sidebar
  const handleShowSidebar = (e) => {
    e.stopPropagation();
    dispatch(showSidebar());
  };

  // if there is at least one document availble u can delete.
  const handleShowModalDelete = () => {
    if (Object.keys(document).length > 0) {
      setShowModalDelete(true);
    }
  };

  // if there is at least one document availble u can edit.
  const handleUpdateDocument = () => {
    if (Object.keys(document).length > 0) {
      dispatch(
        updateExistingDocument({
          ...document,
          name: documentName,
        })
      );
    }
  };

  // if doc name changes ...
  useEffect(() => {
    setDocumentName(document.name || "");
  }, [document.name]);

  return (
    <>
      <header className="header">
        <button
          className="header__menu-button"
          onClick={(e) => handleShowSidebar(e)}
        >
          <img className="header__menu-icon" src={iconMenu} alt="icon menu" />
        </button>
        <h1 className="header__title">Markdown</h1>
        <div className="header__document-info">
          <img
            className="header__document-icon"
            src={iconDocument}
            alt="icon document"
          />
          <div className="header__document-title">
            <p className="header__document-title-desc">Document Name</p>
            <input
              className="header__document-title-input"
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </div>
        </div>

        <div className="header__action-buttons">
          <button
            className="header__delete-button"
            onClick={handleShowModalDelete}
          >
            <IconDelete />
          </button>

          <button
            className="header__save-button"
            onClick={handleUpdateDocument}
          >
            <img src={iconSave} alt="save icon" className="header__save-icon" />
            <p className="header__save-text">Save Changes</p>
          </button>
        </div>
      </header>

      {showModalDelete && (
        <ModalDelete
          setShowModalDelete={setShowModalDelete}
          document={document}
        />
      )}
    </>
  );
}

export default Header;
