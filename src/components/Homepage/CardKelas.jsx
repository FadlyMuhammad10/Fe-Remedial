import React from "react";
import { BsStarFill, BsFillFilePersonFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardKelas = ({ items }) => {
  console.log(items);
  // parameter "items" sesuai dengan di bagian home.jsx
  return (
    <div className="package-card">
      <div className="package-card-top">
        <div className="package-product-label">
          <p>{items.judul}</p>
        </div>
      </div>
      <div className="package-card-bottom">
        <div id="price-information-wrapper-variant-b">
          <div className="package-price-information">
            <div className="package-price-information-bottom">
              <span className="finalPrice">Rp&nbsp;{items.harga}</span>
            </div>
          </div>
        </div>

        <Link to={"/course-details/" + items._id} className="btn-package">
          Beli Paket
        </Link>
        <ul id="package-productReviews">
          <li>
            <div className="package-preview-icon">
              <BsStarFill></BsStarFill>
            </div>
            <p>
              <strong>4.8</strong>/5 rating kelas
            </p>
          </li>
          <li>
            <div className="package-preview-icon">
              <BsFillFilePersonFill></BsFillFilePersonFill>
            </div>
            <p>{items.instructor}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardKelas;
