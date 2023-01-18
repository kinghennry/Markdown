import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DocumentBody from "./components/DocumentBody/DocumentBody";
import FormatStatus from "./features/formatStatus/FormatStatus";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <FormatStatus />
        <DocumentBody />
      </div>
      <Sidebar />
    </>
  );
}

export default App;
