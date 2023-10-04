import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Borad from "./pages/Borad";
import Write from "./pages/Write";
import FindPassword from "./pages/FindPassword";
import SetPassword from "./pages/SetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board" element={<Borad />} />
      <Route path="/write" element={<Write />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/setpw" element={<SetPassword />} />
    </Routes>
  );
}

export default App;
