import Footer from "../components/Footer"
import Header from "../components/Header"
import "../assets/css/style.css";

export default function Fundamental() {
    return (
        <>
        <main id="main">
         {/* ======= Breadcrumbs =======  */}
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container-fluid">

                <div class="row justify-content-center">
                    <div class="col-11 col-xl-10">
                        <ol>
                            <li><a href="index.html">Beranda</a></li>
                            <li>Fundamental Seni</li>
                        </ol>
                        <h5>Kategori</h5>
                    </div>
                </div>

            </div>
        </section>
        {/* End Breadcrumbs */}

        <section class="fundamental">
            <div class="container-fluid"/>

                <div class="row justify-content-center">
                    <div class="col-11 col-xl-10">
                        <div class="row">
                            <h1><strong>Fundamental Seni</strong></h1>
                            <p>
                                Mempelajari fundamental seni adalah Dasar-dasar pemikiran yang terpetakan dari awal
                                sangatlah penting agar pemahaman kita tidak bersimpangan dengan penyumbang-penyumbang
                                pemikiran seni. Beberapa fundamental seni rupa dan desain yang penting untuk dipahami
                                meliputi: pengertian seni, pengertian seni rupa, prinsip prinsip seni rupa dan desain,
                                unsur unsur seni rupa, dan lain-lain dapat ditemukan disini.
                            </p>
                            <hr/>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                <img src="assets/img/fundamental/fe.jpg" width="100%" height="450" alt=""/>
                                <h1 class="mt-3"><strong>Fenomena Seni Rupa</strong></h1>
                                <p>Fenomena Seni Rupa dapat menyangkut banyak peristiwa, pergerakan, hingga perkembangan
                                    umum yang menyangkut seni rupa di dunia. Berbagai fenomena tersebut dapat ditelaah
                                    sebagai inspirasi hingga berbagai pertimbangan lain dalam berkarya. Tidak sedikit
                                    pula berbagai fenomena seni rupa yang dimanfaatkan untuk penelitian, baik dalam
                                    bidang seni rupa, maupun bidang lainnya seperti sejarah, arkeologi, dan bidang ilmu
                                    lainnya....

                                </p>
                                <div id="seni"></div>
                            </div>

                            <div class="col-12 col-md-4">
                                <div class="row-cols-lg-10">
                                    <h2 class="article-section-title">
                                        <span>Baca Artikel</span>
                                    </h2>
                                    <div class="col">
                                        <div class="fundamental-item d-flex">
                                            <img src="assets/img/fundamental/satu.jpg" class="fundamental-img" alt=""/>
                                            <h3><a href="#!">Seni Rupa Murni: Pengertian, Batasan, Fungsi & Contoh</a>
                                            </h3>
                                        </div>
                                        <div class="col">
                                            <div class="fundamental-item d-flex">
                                                <img src="assets/img/fundamental/patung.jpg" class="fundamental-img"
                                                    alt=""/>
                                                <h3><a href="#!">Pengertian seni patung, fungsi, teknik, alat &
                                                        bahan</a></h3>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="fundamental-item d-flex">
                                                <img src="assets/img/fundamental/empat.jpg" class="fundamental-img"
                                                    alt=""/>
                                                <h3><a href="#!">Perpaduan Warna Harmonis menggunakan Teori Warna &
                                                        Seni</a></h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
        </section>
        </main>
        </>
    )
}