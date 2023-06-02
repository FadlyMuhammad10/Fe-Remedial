import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { About } from "./assets/page/About";
// import { Register } from "./assets/page/Register";
// import { Login } from "./assets/page/Login";
// import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Artikel from "./pages/Artikel";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program-offline" element="#" />
          <Route path="/program-online" element="#" />
          <Route path="/fundamental-seni" element="#" />
          <Route path="/teori-seni" element="#" />
          <Route path="/praktik-seni" element="#" />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
