//css
import "./App.css";

//import
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Detection from "./pages/Detection/Detection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Detection" element={<Detection />} />
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
}
export default App;
