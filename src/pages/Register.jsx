import "../assets/css/style.css";
import React ,{useState} from "react";
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [asalSekolah, setAsalSekolah]=useState("")
  const [alasan, setAlasan]=useState("")
  const [alamat, setAlamat]=useState("")
  const navigate=useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleKonfirmasiChange = (event) => {
    setKonfirmasi(event.target.value);
    console.log(event.target.value);
  };
  const handleAsalSekolahChange = (event) => {
    setAsalSekolah(event.target.value);
    console.log(event.target.value);
  };
  const handleAlasanChange = (event) => {
    setAlasan(event.target.value);
    console.log(event.target.value);
  };
  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
    console.log(event.target.value);
  };
  const handleSignUp = async () => {
    const data = {
      nama_lengkap: nama_lengkap,
      email: email,
      password: password,
      asal_sekolah: asal_sekolah,
      alasan_ikut_program: alasan_ikut_program,
      alamat: alamat,
    };

    console.log(data);

    dispatch(postSignUp(data));

    setTimeout(() => {
    const token =localStorage.getItem('token')
    console.log("token= ",token)
      if(token!==null && token!==undefined && token!=="undefined"){
        console.log(token)
        navigate('/login')
        localStorage.removeItem("token");
      }    }, 2000);
  };
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
                          <input type="text" value={name}
                      onChange={handleNameChange} id="nameRegister" className="form-control form-control-sm" />
                        </div>
                        <div className="form-outline mb-2 text-light">
                          <label className="form-label" htmlFor="form3Example1q">
                            Email
                          </label>
                          <input type="email"  value={email}
                      onChange={handleEmailChange} id="emailRegister" className="form-control form-control-sm" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2 text-light">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="firstName">
                              Password
                            </label>
                            <input type="password"  value={password}
                      onChange={handlePasswordChange} id="passwordRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 text-light">
                          <label className="form-label" htmlFor="lastName">
                            Konfirmasi password
                          </label>
                          <div className="form-outline">
                            <input type="password" value={password}
                      onChange={handleKonfirmasiChange} id="passwordRegister2" className="form-control form-control-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2 text-light">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="asalSekolah">
                              Asal Sekolah
                            </label>
                            <input type="text" value={asalSekolah}
                      onChange={handleAsalSekolahChange} id="asalSekolahRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="alasan">
                              Alasan mengikuti program
                            </label>
                            <input type="text" value={alasan}
                      onChange={handleAlasanChange}  id="alasanRegister" className="form-control form-control-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="mb-3 pb-2">
                          <div className="form-outline text-light">
                            <label className="form-label" htmlFor="alamat">
                              Alamat
                            </label>
                            <textarea id="alamatRegister" value={alamat}
                      onChange={handleAlamatChange} className="form-control" rows="2"></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          onClick={handleSignUp}
                          className="btn btn-danger btn-md px-5 mb-2"
                          type="submit"
                        >
                          Daftar
                        </button>
                      </div>
                      <div className="mt-2 d-flex justify-content-center text-light">
                        <div className="me-2">
                          <p>Sudah Memiliki Akun?</p>
                        </div>
                        {/* <Link to="/login" className="me-2 link-danger">
                          Masuk
                        </Link> */}
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
