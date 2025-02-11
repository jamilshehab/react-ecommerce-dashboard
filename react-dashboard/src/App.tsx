import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
