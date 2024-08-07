import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { About } from "./assets/page/About";
// import { Register } from "./assets/page/Register";
// import { Login } from "./assets/page/Login";
// import "./App.css";

import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import About from "./pages/About";
import DetailArtikel from "./components/DetailArtikel";
import Fundamental from "./pages/Fundamental";
import Teori from "./pages/Teori";
import Praktik from "./pages/Praktik";
import Pembayaran from "./pages/Pembayaran";
import { Provider } from "react-redux";
import store from "./redux/store";
import Kelas_Offline from "./pages/Kelas_Offline";

import CourseDetails from "./pages/CourseDetails";
import AllCourse from "./pages/allCourse";
import MyCourse from "./pages/myCourse";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<AllCourse />} />
            <Route path="/my-course" element={<MyCourse />} />
            <Route path="/program-offline/:id" element={<Kelas_Offline />} />
            <Route path="/program-online" element="#" />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="/fundamental-seni" element={<Fundamental />} />
            <Route path="/teori-seni" element={<Teori />} />
            <Route path="/praktik-seni" element={<Praktik />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/artikel/:id" element={<DetailArtikel />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
