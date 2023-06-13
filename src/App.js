import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="container overflow-hidden flex-grow">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
