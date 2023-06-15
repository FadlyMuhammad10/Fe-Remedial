import React from "react";
import CardArtikel from "../components/CardArtikel";
import { Link } from "react-router-dom";

export default function ArtikelList({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <Link to={"/artikel/"+item._id} key={item._id}>
          <CardArtikel item={item} />
        </Link>
      ))}
    </div>
  );
}
