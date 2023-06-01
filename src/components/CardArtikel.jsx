export default function CardArtikel(){
    return(
        <main>
            <div onClick={() => alert("Sudah bisa")} className="card mb-3 text-black">
                <div className="row g-0">
                    <div className="col-md-9">
                        <div className="card-body">
                            <div className="entry-meta d-flex align-items-center">
                                <p className="category me-4">Seni Musik</p>
                                <p>Nova Sriady</p>
                            </div>
                            <h5 className="card-title">Pengertian Musik Kontemporer, Ciri-Ciri, Karakteristik, dan Konsep Kreatif</h5>
                                <p className="card-text">Musik kontemporer sebenarnya adalah musik yang keberadaannya berkaitan erat dengan mengalirnya waktu. Itulah mengapa musik kontemporer sering juga disebut musik garda depan (avant-garde), karena musik tersebut selalu mengedepani sebuah era.</p>
                                <p className="card-text"><small className="text-body-secondary">02-02-2021</small></p>
                        </div>
                    </div>
                    <div className="col-md-3 p-2 d-flex">
                        <img src="https://i.ibb.co/16tMrY8/Rectangle-2985.png" className="img-fluid rounded float-start"/>
                    </div>
                </div>
            </div>
        </main>
    )
}