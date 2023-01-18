import { useSelector } from "react-redux";
import { selectAllDocuments } from "./allDocumentsSlice";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const AllDocuments = () => {
  const allDocuments = useSelector(selectAllDocuments);

  return (
    <div className="all-documents">
      {allDocuments.map((document) => (
        <DocumentTitle key={document.id} document={document} />
      ))}
    </div>
  );
};

export default AllDocuments;
