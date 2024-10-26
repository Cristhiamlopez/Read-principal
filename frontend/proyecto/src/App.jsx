import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./assets/Login";
import Home from "./Home";
import Carta from "./Carta";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Register from "./Register";


function App() {
  return (
    <BrowserRouter>

      <Navbar /> 

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carta" element={<Carta />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Register" element={<Register />} />
        
        
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}


export default App;