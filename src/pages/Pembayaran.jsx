import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";

export default function Pembayaran() {
  return (
    <>
      <main id="main">
        {/*======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <ol>
                  <li>
                    <Link to="/">Beranda</Link>
                  </li>
                  <li>
                    <Link to="/program-offline">Kelas Offline</Link>
                  </li>
                  <li>Pembayaran</li>
                </ol>
                <h2>Pembayaran</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        <div className="container px-5 pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card d-flex my-4 px-4 py-3">
                <h2 className="fs-4 fw-bold">
                  Deskripsi <hr />
                </h2>
                <div className="total-harga bg-dark rounded-3 d-flex text-white justify-content-around pt-3 mb-4">
                  <div className="d-flex">
                    <ImPriceTag fontSize="2rem" color="yellow" border="1px solid black" />
                    <p className="ms-3 fs-5">Total Harga</p>
                  </div>
                  <p className="fs-5">Rp 25.000,00</p>
                </div>

                <h6>Metode Pembayaran</h6>
                <div className="col-10 d-flex align-self-center">
                  <select className="form-select bg-secondary bg-opacity-25" aria-label="Default select example">
                    <option select="true">Pilih Metode Pembayaran</option>
                    <option defaultValue="1">BCA</option>
                    <option defaultValue="2">BNI</option>
                    <option defaultValue="3">E-Wallet</option>
                    <option defaultValue="4">Lainnya</option>
                  </select>
                </div>

                <div className="form-check my-4 ">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label fs-6" htmlFor="flexCheckDefault">
                    Saya telah membaca dan menyetujui <span className="fw-semibold">Syarat dan Ketentuan</span>
                  </label>
                </div>

                <div className="d-flex justify-content-center my-4">
                  <Link className="btn btn-danger px-5" to="/pembayaran" role="button">
                    Bayar
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Profil Pelajar */}
            <div className="col-6">
              <div className="card d-flex my-4 px-4 py-3">
                <h2 className="fs-4 fw-bold">Informasi Kelas</h2>
                <div className="card d-flex my-1 p-4">
                  <h5 className="text-center fw-bold">Paket Remedial</h5>
                  <h6 className="text-center">
                    Kelas Seni
                    <hr />
                  </h6>

                  <div className="profil-pelajar d-flex">
                    <div className="col-4">
                      <img src="src/assets/img/pengajar/pengajar3.png" className="rounded-circle" width="auto" height="90" alt="" />
                    </div>
                    <div className="col-8">
                      <div className="my-3">
                        <h5 className="fw-semibold">Nova Sriadi Kurniawan</h5>
                        <h6>Pelajar</h6>
                      </div>
                    </div>
                  </div>

                  <ul className="info-kelas list-unstyled mt-5">
                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Topik</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3">Seni Tari Kecak</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Metode Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3">Offline</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Durasi Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3">2 Jam/Hari</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Lokasi Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3 text-uppercase">SMA 35 Jakarta</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Waktu Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3">08.00 - 10.00 WIB</div>
                    </li>

                    <li className="d-flex pb-1">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6>Lama Pembelajaran</h6>
                          <h6>:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3">6 Bulan</div>
                    </li>

                    <hr />

                    <li className="d-flex pt-4">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-semibold">Harga Paket</h6>
                          <h6 className="fw-semibold">:</h6>
                        </div>
                      </div>
                      <div className="col-7 ps-3 fw-semibold">Rp 25.000,00</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
