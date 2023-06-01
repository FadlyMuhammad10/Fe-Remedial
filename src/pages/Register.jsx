import "../assets/css/style.css";

export default function Register() {
  return (
    <>
      <main id="main">
        <section className="h-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-8 col-xl-6">
                <div className="card bg-dark shadow-4-strong card-registration">
                  <div className="card-body mt-2 pt-md-4 px-5 mx-3">
                    <div className="d-flex justify-content-center">
                      <h4 className="fw-bold mb-1 text-uppercase text-light">Daftar sebagai siswa</h4>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <p className="text-white-50 mb-3 fs-6">Yuk daftarkan data dirimu</p>
                    </div>

                    <form>
                      <div className="row">
                        <div className="form-outline mb-2 text-light">
                          <label className="form-label" htmlFor="form3Example1q">
                            Nama lengkap
                          </label>
                          <input type="text" id="nameRegister" className="form-control form-control-sm" />
                        </div>
                        <div className="form-outline mb-2 text-light">
                          <label className="form-label" htmlFor="form3Example1q">
                            Email
                          </label>
                          <input type="email" id="emailRegister" className="form-control form-control-sm" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2 text-light">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="firstName">
                              Password
                            </label>
                            <input type="password" id="passwordRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 text-light">
                          <label className="form-label" htmlFor="lastName">
                            Konfirmasi password
                          </label>
                          <div className="form-outline">
                            <input type="password" id="passwordRegister2" className="form-control form-control-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2 text-light">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="asalSekolah">
                              Asal Sekolah
                            </label>
                            <input type="text" id="asalSekolahRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="alasan">
                              Alasan mengikuti program
                            </label>
                            <input type="text" id="alasanRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="mb-3 pb-2">
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
                          className="btn btn-danger btn-md px-5 mb-2"
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
    </>
  );
}
