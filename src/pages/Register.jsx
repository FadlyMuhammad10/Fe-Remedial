import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Register() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="h-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className="card bg-dark shadow-4-strong card-registration"
                  // style="border-radius: 15px;"
                >
                  <div className="card-body p-4 p-md-5 ">
                    <div className="d-flex justify-content-center">
                      <h3 className="fw-bold mb-2 text-uppercase text-light">Daftar sebagai siswa</h3>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <p className="text-white-50 mb-5">Yuk daftarkan data dirimu</p>
                    </div>

                    <form>
                      <div className="row">
                        <div className="form-outline mb-4 text-light">
                          <label className="form-label" htmlFor="form3Example1q">
                            Nama lengkap
                          </label>
                          <input type="text" id="nameRegister" className="form-control" />
                        </div>
                        <div className="form-outline mb-4 text-light">
                          <label className="form-label" htmlFor="form3Example1q">
                            Email
                          </label>
                          <input type="email" id="emailRegister" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 text-light">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="firstName">
                                Password
                              </label>
                              <input type="password" id="passwordRegister" className="form-control form-control-lg" />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 text-light">
                            <label className="form-label" htmlFor="lastName">
                              Konfirmasi password
                            </label>
                            <div className="form-outline">
                              <input type="password" id="passwordRegister2" className="form-control form-control-lg" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="asalSekolah">
                              Asal Sekolah
                            </label>
                            <input type="text" id="asalSekolahRegister" className="form-control form-control-lg" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="alasan">
                              Alasan mengikuti program
                            </label>
                            <input type="text" id="alasanRegister" className="form-control form-control-lg" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="mb-4 pb-2">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="alamat">
                              Alamat
                            </label>
                            <textarea id="alamatRegister" className="form-control" rows="2"></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          // onclick="register()"
                          className="btn btn-danger btn-lg px-5"
                          type="submit"
                        >
                          Daftar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}

      <Footer />
    </>
  );
}
