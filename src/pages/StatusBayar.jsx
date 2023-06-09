import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function StatusBayar() {
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
                  <li>
                    <Link to="/pembayaran">Pembayaran</Link>
                  </li>
                  <li>Status Pembayaran</li>
                </ol>
                <h2>Status Pembayaran</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        <div className="row justify-content-center">
          <div className="col-11">
            <div className="card d-flex my-4 px-4 pb-4">
              <div className="batas-bayar rounded-3 d-flex flex-column mx-5 my-4 py-3">
                <h5 className="text-white mb-3 align-self-center">Batas Akhir Pembayaran</h5>
                <div className="text-danger align-self-center">Senin, 29 Mei 2023 23.59</div> {/* ubah menggunakan real-time */}
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-6 d-flex flex-column">
                  <h5 className="fw-semibold">Pembayaran</h5>

                  <div className="card p-3 mb-5">
                    <div>Pilihan Pembayaran</div>
                  </div>

                  <h6>
                    <span className="text-danger">Jangan tekan "Batalkan Pesanan"</span> apabila sudah melakukan pembayaran.
                  </h6>

                  <Link className="btn btn-outline-dark px-5 mt-2 fw-semibold align-self-center" to="#" role="button">
                    Batalkan Pesanan
                  </Link>
                </div>

                <div className="col-6 d-flex flex-column">
                  <h5 className="fw-semibold align-self-center">Panduan Pembayaran</h5>
                  <div className="card p-3">tes</div>
                  <div className="card p-3 mt-3">tes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
