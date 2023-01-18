import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDayModToggle } from "./dayModToggleSlice";
import { toggle } from "./dayModToggleSlice";
import "./DayModToggle.css";

const DayModToggle = () => {
  const dispatch = useDispatch();
  const dayMode = useSelector(selectDayModToggle);

  const handleChange = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    if (!dayMode) {
      document.querySelector(".toggle").checked = true;
    }
  }, []);

  return <input type="checkbox" className="toggle" onChange={handleChange} />;
};

export default DayModToggle;
