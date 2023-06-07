import CardArtikel from "../components/CardArtikel";
import CardArtikel from "../components/CardArtikel";

export default function ArtikelList({items}) {
    return(
        <div className="row">
            {items.map((item, i) => (
                <CardArtikel key={i} item={item}/>
            ))}
        </div>
    )
}
export default function ArtikelList({items}) {
    return(
        <div className="row">
            {items.map((item, i) => (
                <CardArtikel key={i} item={item}/>
            ))}
        </div>
    )
}