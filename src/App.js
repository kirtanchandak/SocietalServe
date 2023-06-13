import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import Events from "./components/Events";
import Login from "./components/Login";

function App() {
  return (
    <div className="container overflow-hidden flex-grow">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events" element={<Events />}></Route>
      </Routes>
    </div>
  );
}

export default App;
