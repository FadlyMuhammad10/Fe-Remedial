import React from "react";
import { BsStarFill, BsFillFilePersonFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardMyCourse = ({ items }) => {
  // console.log(items);
  const styleCard = {
    backgroundImage: `url(${items.image_url.name})`,
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    height: "240px",
    padding: "12px",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  // parameter "items" sesuai dengan di bagian home.jsx
  return (
    <div className="package-card">
      <div className="package-card-top" style={styleCard}>
        <div className="package-product-label">
          <p>{items.judul}</p>
        </div>
      </div>
      <div className="package-card-bottom">
        <div id="price-information-wrapper-variant-b">
          <div className="package-price-information">
            <div className="package-price-information-bottom">
              {/* <span className="finalPrice">Rp.&nbsp;{items.harga}</span> */}
            </div>
          </div>
        </div>

        <Link to={"/course-details/" + items._id} className="btn-package">
          Lihat Course
        </Link>
        <ul id="package-productReviews">
          <li>
            <div className="course_tag">
              <span>{items.kategori.nama_kategori}</span>
            </div>
          </li>
          <li>
            {/* <div className="package-preview-icon">
              <BsStarFill></BsStarFill>
            </div>
            <p>
              <strong>4.8</strong>/5 rating kelas
            </p> */}
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

export default CardMyCourse;
