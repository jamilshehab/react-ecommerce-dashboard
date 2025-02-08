import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
