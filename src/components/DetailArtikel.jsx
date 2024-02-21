import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function DetailArtikel() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const ubahDate = (date) => {
    const newDate = new Date(date);
    const dateStr =
      newDate.getDate() +
      "-" +
      newDate.getMonth() +
      "-" +
      newDate.getFullYear();
    return dateStr;
  };

  useEffect(() => {
    fetch(
      "https://express-vercel-puce-sigma.vercel.app/api/v1/detailpage/artikel/" +
        id
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  }, []);
  console.log(items);
  return (
    <>
      <Header />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11">
                <ol>
                  <li>
                    <Link to="/home">Beranda</Link>
                  </li>
                  <li>
                    <Link to="/artikel">Artikel</Link>
                  </li>
                  <li>Detail Artikel</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row justify-content-center">
            <div className="col-12 bg-dark d-flex justify-content-center">
              <div className="col-11">
                <div className="row justify-content-center align-items-center">
                  <div className="col-7 col-lg-9 col-xl-9 col-xxl-8 text-white">
                    <h5 className="pt-3">{items?.kategori?.nama_kategori}</h5>
                    <h1>{items?.title}</h1>
                    <div className="col d-flex">
                      <p className="ps-1">oleh {items?.author}</p>
                      <p className="ps-3">{ubahDate(items?.date)}</p>
                    </div>
                  </div>

                  <div className="col-4 col-lg-3 col-xl-3 col-xxl-4 d-flex justify-content-end">
                    <img className="img-fluid" src={items?.image_url} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-11">
              <div className="row justify-content-center">
                <div className=" col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <p className="mt-4">{items?.pengertian}</p>
                  <p>{items?.artikel_web}</p>
                  <h5 className="fw-bold">{items?.subbab1}</h5>
                  <p>{items?.artikel1}</p>
                  <h5 className="fw-bold">{items?.subbab2}</h5>
                  <p>{items?.artikel2}</p>
                  <hr />
                </div>

                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="p-3 justify-content-center">
                    <h4 className="pt-3">Baca Artikel</h4>
                  </div>
                  <div className="col">
                    <div className="fundamental">
                      <div className="fundamental-item d-flex">
                        <img
                          src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/02/14114707/bali-g0af3e717b_1280-810x456.jpg"
                          className="fundamental-img"
                          alt=""
                        />
                        <h3>
                          <a href="#!">
                            Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                            Jenis
                          </a>
                        </h3>
                      </div>
                      <div className="col">
                        <div className="fundamental-item d-flex">
                          <img
                            src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/02/14114707/bali-g0af3e717b_1280-810x456.jpg"
                            className="fundamental-img"
                            alt=""
                          />
                          <h3>
                            <a href="#!">
                              Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                              Jenis
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="col">
                        <div className="fundamental-item d-flex">
                          <img
                            src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/02/14114707/bali-g0af3e717b_1280-810x456.jpg"
                            className="fundamental-img"
                            alt=""
                          />
                          <h3>
                            <a href="#!">
                              Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                              Jenis
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="col">
                        <div className="fundamental-item d-flex">
                          <img
                            src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/02/14114707/bali-g0af3e717b_1280-810x456.jpg"
                            className="fundamental-img"
                            alt=""
                          />
                          <h3>
                            <a href="#!">
                              Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                              Jenis
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
