import Footer from "../components/Footer"
import Header from "../components/Header"
import "../assets/css/style.css";
import CardArtikel from "../components/CardArtikel";

export default function Artikel() {
    return (
        <>
            <main>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        <div className="col-11 col-xl-10">
                            <ol>
                            <li><a href="index.html">Beranda</a></li>
                            <li>Artikel</li>
                            </ol>
                        </div>
                        </div>

                    </div>
                </section>
                <div className="container-fluid-1">
                    <div className="row justify-content-center">
                        <div className="col-11 col-xl-10">
                        <h2 className="mt-3">Artikel</h2>
                        <h6 className="">Kami menyediakan informasi atau laporan mengenai suatu kejadian, isu, atau <br/>peristiwa yang berkaitan dengan seni dan literasi</h6>
                        <hr/>
                        <br/>
                            <CardArtikel/>
                            <CardArtikel/>
                            <CardArtikel/>
                            <CardArtikel/>
                        </div>    
                    </div>
                </div>
            </main>
        </>
    )
}