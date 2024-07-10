import "../assets/css/style.css";
import Header from "../components/Header";

import React, { useEffect, useState } from "react";

import axios from "axios";
import CardKelas from "../components/Homepage/CardKelas";
import { BASE_URL } from "../config";

export default function AllCourse() {
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/landingpage/`).then((res) => {
      // console.log(res);
      setKelas(res.data.data);
    });
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Header />
      {/* ======= Hero Section ======= */}

      <main id="main">
        {/*======= program Section ======= */}
        <section id="program" className="program pt-5 mt-5">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Program</h2>
              <h3>
                Remedial<span>Course</span>
              </h3>
              <p className="">
                Berbagai macam pilihan course dengan metode belajar yang cocok
                buat kamu
              </p>
            </div>
            <div
              id="packageContainer"
              className="d-flex justify-content-center"
            >
              <div className="row container h-100">
                {kelas.map((itemKelas, key) => {
                  return (
                    <div
                      key={key}
                      className="d-flex col-sm-7 col-md-6 col-lg-5 col-xl-3 h-100  justify-content-center"
                    >
                      <CardKelas c key={itemKelas._id} items={itemKelas} />
                    </div>
                  );
                })}

                {/* <div className="col-sm-7 col-md-6 col-lg-5 col-xl-6 h-100 d-flex justify-content-center">
                  <div className="package-card">
                    <div
                      className="package-card-top-1" //
                    //  style="background-image: url(src/assets/img/Rectangle\ 2974.png);"
                    >
                      <div className="package-product-label">
                        <p>Kelas Online</p>
                      </div>
                    </div>
                    <div className="package-card-bottom">
                      <div id="price-information-wrapper-variant-b">
                        <div className="package-price-information">
                          <div className="package-price-information-bottom">
                            <span className="finalPrice">Rp&nbsp;50.000</span>
                          </div>
                        </div>
                      </div>
                      {/* <div
                        className="btn-package-disable"
                        disabled
                        data-tracking-event-type="landing_page__core__item_click"
                      >
                        Coming Soon
                      </div> */}
                {/* <Link to="/program-offline" className="btn-package">
                        Beli Paket
                      </Link>
                      <ul id="package-productReviews">
                        <li>
                          <div className="package-preview-icon">
                            <BsStarFill></BsStarFill>
                          </div>
                          <p>
                            <strong>4.8</strong>/5 rating kelas
                          </p>
                        </li>
                        <li>
                          <div className="package-preview-icon">
                            <FaRegLightbulb></FaRegLightbulb>
                          </div>
                          <p>Sesi pertemuan online hingga 10x seminggu</p>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*End program Section */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
