import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentDocument,
  changeDocumentContent,
} from "../../features/currentDocument/currentDocumentSlice";
import { selectFormatStatus } from "../../features/formatStatus/formatStatusSlice";
import { selectDayModToggle } from "../../features/dayModToggle/dayModToggleSlice";
import ReactMarkdown from "react-markdown";
import "./DocumentBody.css";

const DocumentBody = () => {
  const currentDocument = useSelector(selectCurrentDocument);
  const formatStatus = useSelector(selectFormatStatus);
  const dayMode = useSelector(selectDayModToggle);
  const textAreaRef = useRef(null);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(
      changeDocumentContent({
        value,
      })
    );
  };

  const handleResize = () => {
    setIsTablet(window.innerWidth >= 768);
  };

  const handleTextareaHeight = () => {
    if (formatStatus) {
      textAreaRef.current.style.height = "calc(100% - 1px)";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  };

  useEffect(() => {
    handleTextareaHeight();
  }, [currentDocument.content, formatStatus]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleTextareaHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleTextareaHeight);
    };
  });

  const plainBody = (
    <div
      className={
        dayMode
          ? "document-body__plain"
          : "document-body__plain document-body__plain--night"
      }
    >
      <textarea
        ref={textAreaRef}
        className={"document-body__plain-area"}
        type="text"
        value={currentDocument.content}
        onChange={(e) => handleInput(e)}
      ></textarea>
    </div>
  );

  const parsedBody = (
    <div
      className={
        dayMode
          ? "document-body__parsed"
          : "document-body__parsed document-body__parsed--night"
      }
    >
      <ReactMarkdown>{currentDocument.content}</ReactMarkdown>
    </div>
  );

  const plainAndParsedBody = (
    <>
      <div
        className={
          dayMode
            ? "document-body__plain"
            : "document-body__plain document-body__plain--night"
        }
      >
        <textarea
          ref={textAreaRef}
          className="document-body__plain-area"
          type="text"
          value={currentDocument.content}
          onChange={(e) => handleInput(e)}
          onClick={(e) => e.preventDefault()}
        ></textarea>
      </div>
      <div
        className={
          dayMode
            ? "document-body__parsed"
            : "document-body__parsed document-body__parsed--night"
        }
      >
        <ReactMarkdown>{currentDocument.content}</ReactMarkdown>
      </div>
    </>
  );

  return (
    <div
      className={
        dayMode ? "document-body" : "document-body document-body--night"
      }
    >
      {formatStatus && isTablet
        ? plainAndParsedBody
        : formatStatus && !isTablet
        ? plainBody
        : parsedBody}
    </div>
  );
};

export default DocumentBody;
