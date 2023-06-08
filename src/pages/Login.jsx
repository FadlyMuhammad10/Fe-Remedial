import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../redux/action";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(postLogin(data));
  };

  const test = () => {
    let data = localStorage?.getItem("token");
    console.log("TEGIJBFJWBOIFHWJP", data);  
  }

  return (
    <main id="main">
      <section className="h-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-11 col-lg-7 col-xl-5">
              <div className="card bg-dark shadow-4-strong card-registration">
                <div className="card-body mt-2 pt-md-4 px-5 mx-3">
                  <div className="d-flex justify-content-center text-center">
                    <h3 className="fw-bold text-white mb-2 text-uppercase">
                      Selamat Datang di Remedial.id
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <p className="text-white-50 mb-3">
                      Please enter your email and password!
                    </p>
                  </div>

                  <div className="form-outline form-white mb-4 text-start">
                    <label
                      className="form-label text-white"
                      htmlFor="emailLogin"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      id="emailLogin"
                      className="form-control form-control-md"
                    />
                  </div>

                  <div className="form-outline form-white mb-2 text-start">
                    <label
                      className="form-label text-white"
                      htmlFor="passwordLogin"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      id="passwordLogin"
                      className="form-control form-control-md"
                    />
                  </div>

                  <p className="small d-flex text-start mb-3 pb-lg-2">
                    <a className="link-danger" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={handleLogin}
                      className="btn btn-danger btn-md px-5 mb-3"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
