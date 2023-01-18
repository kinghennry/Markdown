import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.css";
import { selectDayModToggle } from "../../features/dayModToggle/dayModToggleSlice";
import { selectSidebarVisibility } from "../../features/sidebarVisibility/sidebarVisibilitySlice";
import { addNewDocument } from "../../features/allDocuments/allDocumentsSlice";
import { hideSidebar } from "../../features/sidebarVisibility/sidebarVisibilitySlice";
import { pickDocument } from "../../features/currentDocument/currentDocumentSlice";
import { changeStatus } from "../../features/formatStatus/formatStatusSlice";
import { newId } from "../../features/helperFunctions";
import { getName } from "../../features/helperFunctions";

import AllDocuments from "../../features/allDocuments/AllDocuments";
import DayModToggle from "../../features/dayModToggle/DayModToggle";
import LightModeIcon from "../Icons/LightModeIcon/LightModeIcon";
import DarkModeIcon from "../Icons/DarkModeIcon/DarkModeIcon";

function Sidebar() {
  const toggleStatus = useSelector(selectDayModToggle);
  const sidebarVisibility = useSelector(selectSidebarVisibility);
  const dispatch = useDispatch();

  const handleAddNewDocument = () => {
    const today = new Date();
    const [month, day, year] = [
      today.getMonth() + 1,
      today.getDate(),
      today.getFullYear(),
    ];
    const newDocument = {
      createdAt:
        (month.toString().length > 1
          ? month.toString()
          : "0" + month.toString()) +
        "-" +
        (day.toString().length > 1 ? day.toString() : "0" + day.toString()) +
        "-" +
        year.toString(),
      name: getName(),
      content: "",
      id: newId(),
    };
    dispatch(addNewDocument(newDocument));
    dispatch(pickDocument(newDocument));
    dispatch(changeStatus(true));
    dispatch(hideSidebar());
  };

  return (
    <div
      className={
        sidebarVisibility
          ? "sidebar-container sidebar-container--active"
          : "sidebar-container"
      }
      onClick={() => dispatch(hideSidebar())}
    >
      <div
        className={sidebarVisibility ? "sidebar sidebar--active" : "sidebar"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar__wrapper">
          <h1 className="sidebar__title">MARKDOWN</h1>
          <h2 className="sidebar__my-documents">MY DOCUMENTS</h2>
          <input
            className="sidebar__button"
            type="button"
            value="+ New Document"
            onClick={handleAddNewDocument}
          />
          <AllDocuments />
          <div className="sidebar__toggle-block">
            <DarkModeIcon toggleStatus={toggleStatus} />
            <DayModToggle />
            <LightModeIcon toggleStatus={toggleStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
