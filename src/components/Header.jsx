import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
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
                <NavLink to="/" className="nav-link scrollto active">
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
                    <a href="/program-ofline">Kelas Ofline</a>
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
                    <a href="/fundamental-seni">Fundamental Seni</a>
                  </li>
                  <li>
                    <a href="/teori-seni">Teori Seni</a>
                  </li>
                  <li>
                    <a href="/praktik-seni">Praktik Seni</a>
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
              <li>
                <NavLink to="/register" className="btn-daftar animated fadeInUp scrollto">
                  Daftar
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="btn-get-started animated fadeInUp scrollto">
                  Masuk
                </NavLink>
              </li>

              {/* <li><a href="#!" className="btn-get-started animated fadeInUp scrollto">Daftar Sekarang</a></li>
               */}
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
