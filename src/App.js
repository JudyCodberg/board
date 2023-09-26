import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Borad from "./pages/Borad";
import Write from "./pages/Write";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board" element={<Borad />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
