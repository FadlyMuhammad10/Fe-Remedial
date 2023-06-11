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
import DetailArtikel from "./components/DetailArtikel";
import Fundamental from "./pages/Fundamental";
import Teori from "./pages/Teori";
import Praktik from "./pages/Praktik";
import Program_Offline from "./pages/Kelas-Offline";
import Pembayaran from "./pages/Pembayaran";
import StatusBayar from "./pages/StatusBayar";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  const isLoggedIn = true;
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program-offline" element={<Program_Offline />} />
            <Route path="/program-online" element="#" />
            <Route path="/fundamental-seni" element={<Fundamental />} />
            <Route path="/teori-seni" element={<Teori />} />
            <Route path="/praktik-seni" element={<Praktik />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detailartikel" element={<DetailArtikel />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
