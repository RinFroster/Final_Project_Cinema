import React from "react";
import { memo } from "react";
import pic from "./../../Asset/img/gaigialamchieu.jpg";

function MovieItem() {
  return (
    <div className="movie__card">
    <div className="movie__img">
      <div className="movie__description -hover overlay">
        <div className="ageType">C18</div>
        <button className="btn btn-secondary-white buyTicket__button">Mua Vé</button>
      </div>
      <img src={pic} alt="test" className="img-fluid"/>
    </div>
    <div className="movieInfo__container">
      <div className="movieInfo__firstRow">
        <div className="movieName">Gái Già Lắm Chiêu</div>
      </div>
      <div className="movieInfo__secondRow">
        <div className="movieTime">115 Phút</div>
      </div>
    </div>
  </div>
  );
}

export default memo(MovieItem);
