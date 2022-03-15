import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Navbar/Nav";
import Wheel from "./components/Wheel"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wheel" element={<Wheel />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
