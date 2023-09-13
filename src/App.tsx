import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
    </Routes>
  );
}

export default App;
