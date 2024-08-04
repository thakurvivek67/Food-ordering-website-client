import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/authentication/Login";
import SignIn from "./components/authentication/Signin";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Gallary from "./components/home/Gallary";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

function App() {
  

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
