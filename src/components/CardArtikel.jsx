import { Link } from "react-router-dom";

export default function CardArtikel({item}){
    const websiteUrl = item.url 

    const date = item.publishedAt 
    const formatDate = date.replace('T',' ')
    const formatTime = formatDate.replace('Z', '')
    return(
        <main>
            <a href={item.url}>
                <div className="card mb-3 text-black">
                    <div className="row g-0">
                        <div className="col-md-9">
                            <div className="card-body">
                                <div className="entry-meta d-flex align-items-center">
                                    <p className="category me-4">{item.source.name}</p>
                                    <p>{item.author}</p>
                                </div>
                                <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-body-secondary">{formatTime}</small></p>
                            </div>
                        </div>
                        <div className="col-md-3 p-2 d-flex">
                            <img src={item.urlToImage} className="img-fluid rounded float-start"/>
                        </div>
                    </div>
                </div>
            </a>
            
        </main>
    )
}