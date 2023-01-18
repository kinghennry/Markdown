import "./FormatStatus.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFormatStatus } from "./formatStatusSlice";
import { selectDayModToggle } from "../dayModToggle/dayModToggleSlice";
import { changeStatus } from "./formatStatusSlice";
import HideIcon from "../../components//Icons/HideIcon/HideIcon";
import ShowIcon from "../../components/Icons/ShowIcon/ShowIcon";

function FormatStatus() {
  const dispatch = useDispatch();
  const formatStatus = useSelector(selectFormatStatus);
  const dayMode = useSelector(selectDayModToggle);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsTablet(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div
        className={
          dayMode ? "format-status" : "format-status format-status--night"
        }
      >
        <p className="format-status__text">
          {formatStatus === false ? "Preview" : "Markdown"}
        </p>

        {formatStatus && isTablet ? (
          <p className="format-status__tablet-text">Preview</p>
        ) : null}

        <button
          className="format-status__button"
          onClick={() => dispatch(changeStatus())}
        >
          {formatStatus ? (
            <ShowIcon dayMode={dayMode} />
          ) : (
            <HideIcon dayMode={dayMode} />
          )}
        </button>
      </div>
    </>
  );
}

export default FormatStatus;
