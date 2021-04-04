import React from "react";
import { memo } from "react";
import pic from "./../../Asset/img/gaigialamchieu.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,faPlayCircle, faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
// import MovieList from "../MovieList";

function MovieItem(props) {
  const { movie } = props;
  return (
    <div className="movie__card">
    <div className="movie__img">
      <div className="movie__age">C18</div>
      <div className="movie__overlay movie-hover">
        <div className="movie__trailer">
          <Link><FontAwesomeIcon icon={faPlayCircle} className="trailer__icon"/></Link>
          <div className="movie__service">Trailer</div>
        </div>
        <div className="movie__buyTicket">
          <Link><FontAwesomeIcon icon={faTicketAlt} className="buyTicket__icon"/></Link>
          <div className="movie__service">Mua Vé</div>
        </div>
        <div className="movie__detail">
          <Link><FontAwesomeIcon icon={faInfoCircle} className="detail__icon"/></Link>
          <div className="movie__service">Chi Tiết</div>
        </div>
      </div>
      <img src={movie.hinhAnh} alt="test" className="img-fluid"/>
    </div>
    <div className="movieInfo__container">
      <div className="movieInfo__row">
        <div className="movie__name">
          <p>{movie.tenPhim}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default memo(MovieItem);
