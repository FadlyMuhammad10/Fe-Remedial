import React from "react";


export default function Header() {
    return (
      <>
           {/* ======= Header ======= */}
 <header id="header" className="fixed-top header-inner-pages">
     <div className="container d-flex align-items-center justify-content-between">
         {/* Uncomment below if you prefer to use an image logo */}
         <a href="index.html" className="logo">
             <img src="src/assets/img/logo.png" alt="" className="img-fluid" />
         </a>

         <nav id="navbar" className="navbar">
             <ul>
                 <li>
                     <a className="nav-link scrollto active" href="index.html">
                         Beranda
                     </a>
                 </li>
                 <li>
                     <a className="nav-link scrollto" href="about.html">
                         Tentang Kami
                     </a>
                 </li>
                 <li className="dropdown">
                     <a href="#program">
                         <span>Program</span> <i className="bi bi-chevron-down"></i>
                     </a>
                     <ul>
                         <li>
                             <a href="program_ofline.html">Kelas Ofline</a>
                         </li>
                         <li>
                             <a href="program_online.html">Kelas Online</a>
                         </li>
                     </ul>
                 </li>
                 <li className="dropdown">
                     <a href="#seni">
                         <span>Seni</span> <i className="bi bi-chevron-down"></i>
                     </a>
                     <ul>
                         <li>
                             <a href="fundamental.html">Fundamental Seni</a>
                         </li>
                         <li>
                             <a href="teori.html">Teori Seni</a>
                         </li>
                         <li>
                             <a href="praktik.html">Praktik Seni</a>
                         </li>
                     </ul>
                 </li>
                 <li>
                     <a className="nav-link scrollto" href="artikel.html">
                         Semua Artikel
                     </a>
                 </li>
                 <li>
                     <a href="#!">
                         <i className="bi bi-search"></i>
                     </a>
                 </li>
                 <li>
                     <a href="register.html" className="btn-daftar animated fadeInUp scrollto">
                         Daftar
                     </a>
                 </li>
                 <li>
                     <a href="login.html" className="btn-get-started animated fadeInUp scrollto">
                         Masuk
                     </a>
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