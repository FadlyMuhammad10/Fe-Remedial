import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

import React, { useEffect, useState } from "react";

import axios from "axios";
import CardMyCourse from "../components/MyCourse/CardMyCourse";
import { BASE_URL } from "../config";

export default function MyCourse() {
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/api/v1/my-course/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token dalam header
        },
      })
      .then((res) => {
        console.log(res);
        setKelas(res.data.data.kelas_id);
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
              <h2>Pembelajaran Saya</h2>
              <h3>
                Remedial<span>Course</span>
              </h3>
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
                      <CardMyCourse c key={itemKelas._id} items={itemKelas} />
                    </div>
                  );
                })}
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
