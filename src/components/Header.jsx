import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BsList } from "react-icons/bs";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [dropProgram, setDropProgram] = useState(false);
  const [dropSeni, setDropSeni] = useState(false);
  const [dropProfil, setDropProfil] = useState(false);

  const nama = localStorage.getItem("nama_lengkap");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nama_lengkap");
    localStorage.removeItem("email");
    localStorage.removeItem("alamat");
    navigate("/");
  };

  const handleClick = () => {
    setClicked(!clicked);
    console.log(!clicked);
  };

  const activeProgram = () => {
    setDropProgram(!dropProgram);
    console.log(!dropProgram);
  };

  const activeSeni = () => {
    setDropSeni(!dropSeni);
    console.log(!dropSeni);
  };

  const activeProfile = () => {
    setDropProfil(!dropProfil);
    console.log(!dropProfil);
  };

  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Uncomment below if you prefer to use an image logo */}
          <NavLink to="/" className="logo">
            <img src={logo} className="img-fluid" />
          </NavLink>

          <nav className={clicked ? "navbar active" : "navbar"}>
            <ul>
              <li>
                <NavLink to="/home" className="nav-link scrollto scrollto">
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link scrollto">
                  Tentang Kami
                </NavLink>
              </li>
              <li className={dropProgram ? "dropdown active" : "dropdown"}>
                <a onClick={activeProgram} style={{ color: "white" }}>
                  <span className="me-1">Program</span> <IoIosArrowDown fontSize="1.2rem" />
                </a>
                <ul>
                  <li>
                    <NavLink to="/program-offline">Kelas Ofline</NavLink>
                  </li>
                  <li>
                    <a href="">Kelas Online</a>
                  </li>
                </ul>
              </li>
              <li className={dropSeni ? "dropdown active" : "dropdown"}>
                <a onClick={activeSeni} style={{ color: "white" }}>
                  <span className="me-1">Seni</span> <IoIosArrowDown fontSize="1.2rem" />
                </a>
                <ul>
                  <li>
                    <NavLink to="/fundamental-seni" className="nav-link scrollto">
                      Fundamental Seni
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/teori-seni" className="nav-link scrollto">
                      Teori Seni
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/praktik-seni" className="nav-link scrollto">
                      Praktik Seni
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/artikel" className="nav-link scrollto me-3">
                  Semua Artikel
                </NavLink>
              </li>

              <li className={dropProfil ? "dropdown active" : "dropdown"}>
                <div className="row ms-3" onClick={activeProfile}>
                  <VscAccount className="col" fontSize="2rem" color="white" />
                  {nama && <div className="col align-self-center text-white p-0">{nama}</div>}
                  <IoIosArrowDown className="col align-self-center p-0" fontSize="1.2rem" color="white" />
                </div>
                <ul className="rounded">
                  <li>
                    <div className="logOut ms-4" onClick={handleLogout}>
                      Logout
                    </div>
                  </li>
                  <li>
                    <div className="myCourse ms-4" >
                      My Course
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <div id="mobile" className="ms-4" onClick={handleClick}>
              <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            {/* <i className="bi bi-list mobile-nav-toggle"><BsList /></i> */}
          </nav>
          {/* navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
