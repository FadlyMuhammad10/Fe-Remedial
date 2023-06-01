import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Layanan Kami</h4>
                    <ul>
                      <li>
                        <IoChevronForward /> <a href="#">Beranda</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Tentang kami</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Program</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Seni</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Artikel</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Lainnya</h4>
                    <ul>
                      <li>
                        <IoChevronForward /> <a href="#">Fundamental Seni</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Teori Seni</a>
                      </li>
                      <li>
                        <IoChevronForward /> <a href="#">Praktik Seni</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p /> Jl.Merdeka Raya No.19 <br /> DKI Jakarta, 13410
                    <br /> Indonesia <br />
                    <br />
                    <strong>Phone:</strong> 081387448516
                    <br />
                    <strong>Email:</strong> remedialserrum@gmail.com
                    <br />
                  </div>

                  <div className="col-lg-3 col-md-6 footer-info">
                    <a href="" className="logo d-flex align-items-center">
                      <img src="src/assets/img/logo.png" alt="" />
                      <span></span>
                    </a>
                    <p>
                      Remedial merupakan kegiatan yang akan Serrum lakukan
                      selama 1 tahun di 2019.Dengan metode saling silang
                      informasi yang menghasilkan pengetahuan dan pendekatan
                      seni dan literasi.
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter">
                        <AiOutlineTwitter target="_blank" />
                      </a>
                      <a href="#" className="facebook">
                        <AiFillFacebook target="_blank" />
                      </a>
                      <a
                        href="https://www.instagram.com/remedial_s/"
                        className="instagram"
                      >
                        <AiFillInstagram target="_blank" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>remedial.id</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
}
