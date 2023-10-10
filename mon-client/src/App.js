import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./index.js";
import Navbar from "./components/navbar.js";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <Navbar></Navbar>
    // </div>
  );
}

export default App;
