import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/css/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [materiKelas, setMateriKelas] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://express-vercel-puce-sigma.vercel.app/api/v1/detailpage/" + id
      )
      .then((res) => {
        console.log(res);
        setItems(res.data.data);
        setMateriKelas(res.data.data.materi);
      });
  }, []);
  return (
    <>
      <Header />
      <main id="main">
        <section className="course-details-area" id="learn-bok">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-7">
                <div className="courses-details-wrapper mb-30">
                  <h2 className="courses-title mb-30">{items.judul}</h2>
                  <h5>Instructor {items.instructor}</h5>
                  <iframe
                    className="course-details-img mb-30"
                    src={`https://www.youtube.com/embed/egDqq3nc85k?si=0jM6m_cFnuh6A584`}
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
                        {/* {videoKelas.map((video, index) => {
                        let startIndexloop = video.Link.indexOf("&list=");
                        let newKalimatloop = video.Link.substring(
                          0,
                          startIndexloop
                        );

                        return (
                          <li
                            key={index}
                            kata={newKalimatloop}
                            onClick={() => changeVideo(newKalimatloop)}
                          >
                            <a
                              className="d-flex align-items-top justify-content-between"
                              href="#learn-bok"
                            >
                              <span className="play-video d-flex">
                                {
                                  index === 0 ? (
                                    <img
                                      src="/assets/img/icon/video-player.svg"
                                      alt="course-list"
                                      style={{ paddingRight: "10px" }}
                                    />
                                  ) : ispaid ? (
                                    <img
                                      src="/assets/img/icon/video-player.svg"
                                      alt="course-list"
                                      style={{ paddingRight: "10px" }}
                                    />
                                  ) : (
                                    <i
                                      className="fal fa-lock-alt"
                                      style={{ paddingRight: "10px" }}
                                    />
                                  )

                                  // icon(index, ispaid)
                                  // !ispaid &&
                                  //   index == 0
                                  //   ? <img src="/assets/img/icon/video-player.svg" alt="course-list" style={{ paddingRight: '10px' }} /> : <i
                                  //     className="fal fa-lock-alt"
                                  //     style={{ paddingRight: '10px' }}
                                  //   />
                                }

                                <p> {index + 1 + ". " + video.judul}</p>
                              </span>

                              <span className="time float-end">
                                {video.durasi}
                              </span>
                            </a>
                          </li>
                        );
                      })} */}
                      </ul>

                      {/* {!ispaid ? (
                      <Link
                        to={isnotLogin ? "/login" : `/checkout/${kelas.id}`}
                        className="theme_btn free_btn w-100 d-flex justify-content-center my-3"
                      >
                        Gabung Kelas
                      </Link>
                    ) : (
                      <>
                        <br />
                        <br />
                      </>
                    )} */}
                      {/* <Link></Link> */}
                    </div>
                  </div>
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
    </>
  );
};

export default CourseDetails;
