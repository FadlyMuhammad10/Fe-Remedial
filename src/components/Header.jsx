import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";


export default function Header() {
  const nama = localStorage.getItem("nama_lengkap");
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nama_lengkap");
    navigate("/")
  }
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Uncomment below if you prefer to use an image logo */}
          <NavLink to="/" className="logo">
            <img src="src/assets/img/logo.png" alt="" className="img-fluid" />
          </NavLink>

          <nav id="navbar" className="navbar">
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
              <li className="dropdown">
                <a href="#program">
                  <span className="me-1">Program</span> <IoIosArrowDown fontSize="1.2rem" />
                </a>
                <ul>
                  <li>
                    <NavLink to="/program-offline">Kelas Ofline</NavLink>
                  </li>
                  <li>
                    <a href="/program-online">Kelas Online</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#seni">
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
                <NavLink to="/artikel" className="nav-link scrollto">
                  Semua Artikel
                </NavLink>
              </li>
              <li>
                <a href="#!">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li className="dropdown">
                <div className="row">
                  <VscAccount className="col" fontSize="2rem" color="white"/> 
                  {nama && 
                  <div className="col align-self-center text-white">
                    {nama}
                  </div>}
                  <IoIosArrowDown className="col align-self-center"fontSize="1.2rem" color="white"/>
                </div> 
                <ul>
                  <li>
                    <div onClick={handleLogout}>
                      <p className="ps-4">Logout</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
