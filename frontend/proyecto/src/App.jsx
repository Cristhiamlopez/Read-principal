import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import Carta from "./Carta";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar /> 

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carta" element={<Carta />} />
        
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}


export default App;