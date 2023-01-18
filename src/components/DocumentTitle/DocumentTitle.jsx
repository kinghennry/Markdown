import "./DocumentTitle.css";
import iconDocument from "../../assets/icon-document.svg";
import { useDispatch } from "react-redux";
import { monthsOfYear } from "../../features/helperFunctions";
import { pickDocument } from "../../features/currentDocument/currentDocumentSlice";
import { changeStatus } from "../../features/formatStatus/formatStatusSlice";
import { hideSidebar } from "../../features/sidebarVisibility/sidebarVisibilitySlice";

function DocumentTitle({ document }) {
  const dispatch = useDispatch();

  const date = new Date(document.createdAt.replace("-", "/"));
  const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
  const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
  const year = date.getFullYear().toString().replace("-", "");

  const handleClick = () => {
    dispatch(pickDocument(document));
    dispatch(changeStatus(false));
    dispatch(hideSidebar());
  };
  return (
    <div className="document-tile" onClick={handleClick}>
      <img
        src={iconDocument}
        alt="document icon"
        className="document-tile__icon"
      />
      <div className="document-tile__list">
        <p className="document-tile__document-date">
          {day + " " + monthsOfYear[Number(month)] + " " + year}
        </p>
        <p className="document-tile__document-name">{document.name}</p>
      </div>
    </div>
  );
}

export default DocumentTitle;
