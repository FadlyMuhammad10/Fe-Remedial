// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Artikel from "./pages/Artikel";
// import { About } from "./assets/page/About";
// import { Register } from "./assets/page/Register";
// import { Login } from "./assets/page/Login";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Artikel/>
      <Footer />
    </>
  );
}

export default App;
