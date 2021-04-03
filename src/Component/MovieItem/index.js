import React from "react";
import { memo } from "react";
import pic from "./../../Asset/img/gaigialamchieu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faInfoCircle,
  faMapMarkerAlt, faPlayCircle, faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

function MovieItem() {
  return (
    <div className="movie__card">
    <div className="movie__img">
      <div className="movie__age">C18</div>
      <div className="movie__overlay movie-hover">
        <div className="movie__trailer">
          <FontAwesomeIcon icon={faPlayCircle} className="trailer__icon"/>
          <p className="movie__service">Trailer</p>
        </div>
        <div className="movie__buyTicket">
          <FontAwesomeIcon icon={faTicketAlt} className="buyTicket__icon"/>
          <p className="movie__service">Mua Vé</p>
        </div>
        <div className="movie__detail">
          <FontAwesomeIcon icon={faInfoCircle} className="detail__icon"/>
          <p className="movie__service">Chi Tiết</p>
        </div>
      </div>
      <img src={pic} alt="test" className="img-fluid"/>
    </div>
    <div className="movieInfo__container">
      <div className="movieInfo__row">
        <div className="movie__name">
          <p>Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default memo(MovieItem);
