import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
