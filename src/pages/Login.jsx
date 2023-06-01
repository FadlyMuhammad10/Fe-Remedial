import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="h-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-11 col-lg-7 col-xl-5">
                <div className="card bg-dark shadow-4-strong card-registration">
                  <div className="card-body mt-2 pt-md-4 px-5 mx-3">
                    <div className="d-flex justify-content-center text-center">
                      <h3 className="fw-bold text-white mb-2 text-uppercase">Selamat Datang di Remedial.id</h3>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <p className="text-white-50 mb-3">Please enter your email and password!</p>
                    </div>

                    <div className="form-outline form-white mb-4 text-start">
                      <label className="form-label text-white" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input type="email" id="emailLogin" className="form-control form-control-md" />
                    </div>

                    <div className="form-outline form-white mb-2 text-start">
                      <label className="form-label text-white" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input type="password" id="passwordLogin" className="form-control form-control-md" />
                    </div>

                    <p className="small d-flex text-start mb-3 pb-lg-2">
                      <a className="link-danger" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        // onclick="login()"
                        className="btn btn-danger btn-md px-5 mb-3"
                        type="submit"
                      >
                        Daftar
                      </button>
                    </div>
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
