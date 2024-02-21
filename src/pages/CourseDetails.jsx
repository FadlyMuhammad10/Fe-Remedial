import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/css/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaVideo, FaLock } from "react-icons/fa";
const CourseDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [materiKelas, setMateriKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nama = localStorage.getItem("nama_lengkap");
  const email = localStorage.getItem("email");
  
  const getMateriKelas = async () => {
    const { data } = await axios.get(
      "https://express-vercel-puce-sigma.vercel.app/api/v1/detailpage/" + id
    );

    setItems(data.data);
    setMateriKelas(data.data.materi[0].videoUrl);
    setIsLoading(false);
  };

  const setVideoMateri = (value) => {
    setMateriKelas(value);
  };

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = "SB-Mid-client-B3Bj_C3s0ZhDhuV5";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const onBuyingCourse = (harga) => {
    axios
    .post("https://express-vercel-puce-sigma.vercel.app/api/v1/payment", {
      nama_lengkap: nama,
      harga: harga,
      email: email,
    })
    .then((res) => {
      // console.log(res.data.token);
      window.snap.pay(res.data.token);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getMateriKelas();
  }, []);

  console.log(materiKelas, "materi");
  console.log(items, "items");
  return (
    <>
      <Header />
      {isLoading ? (
        "loading booss"
      ) : (
        <main id="main">
          <section className="course-details-area" id="learn-bok">
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-xl-7">
                  <div className="courses-details-wrapper mb-30">
                    <h2 className="courses-title mb-30">{items.judul}</h2>
                    <h5>
                      Instructor
                      {items.instructor}
                    </h5>
                    <iframe
                      className="course-details-img mb-30"
                      src={`https://www.youtube.com/embed/${materiKelas}`}
                    ></iframe>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5">
                  <div className="learn-area mb-30">
                    <ul className="cart-list-tag align-items-center mb-45 d-flex justify-content-end">
                      <li>
                        <div className="price-list">
                          <h5>
                            {
                              <b className="sub-title">
                                Rp.{" "}
                                {parseInt(items.harga).toLocaleString("id-ID")}
                              </b>
                            }
                          </h5>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="courses-ingredients w-100"
                      style={{ marginLeft: "0" }}
                    >
                      <div className="learn-box">
                        <h5>10 Sesi ( 3 jam 8 Menit )</h5>
                        <ul
                          className="learn-list "
                          style={{ marginRight: "0", height: "360px" }}
                        >
                          {items.materi.map((val, key) => {
                            return (
                              <li
                                className="li"
                                key={key}
                                onClick={() => setVideoMateri(val.videoUrl)}
                              >
                                <a
                                  className="d-flex align-items-top justify-content-between"
                                  href="#learn-bok"
                                >
                                  <span className="d-flex items-center">
                                    <FaVideo className="me-3" />
                                    <p>{val.judulMateri}</p>
                                  </span>

                                  <span className="time float-end">
                                    <FaLock />
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div> 
                      <button className="px-4 btn-package" onClick={() => onBuyingCourse(items.harga)}>Beli</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-7">
                  <div className="project-details mb-65">
                    <h2 className="courses-title mb-30">{items.judul}</h2>
                    <p>{items.deskripsi_kelas}</p>

                    <h5 className="mb-25">
                      <span>Instructor :</span> {items.instructor}
                    </h5>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default CourseDetails;
