import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/authentication/Login";
import SignIn from "./components/authentication/Signin";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
