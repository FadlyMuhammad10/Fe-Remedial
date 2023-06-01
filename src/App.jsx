import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { About } from "./assets/page/About";
// import { Register } from "./assets/page/Register";
// import { Login } from "./assets/page/Login";
// import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      <Login />
    </>
  );
}

export default App;
