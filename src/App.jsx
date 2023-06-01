import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Artikel from "./pages/Artikel";


function App() {
  return (
    <>

      <Header />
      <Artikel/>
       <Home />
      <Footer />


    </>
  );
}

export default App;
