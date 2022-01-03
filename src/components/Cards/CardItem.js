import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";
function CardItem({ id, img, alt, title, info }) {
  return (
    <>
      <div className="grid-item">
        <div className="card">
          <img className="card-img" src={img} alt={alt} />
          <div className="card-content">
            <h1 className="card-header">{title}</h1>
            <p className="card-text">{info}</p>
            <Link to={`/course/${id}`} className="-btn -bg -txt">
              More Details <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
