import React, {useEffect} from "react";
import { memo } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,faPlayCircle, faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoviePrevArrow, MovieNextArrow } from "./../Arrow";
import { actListMovieApiComingSoon } from "./modules/action";
import { connect } from "react-redux";

function MovieItemCS(props) {
  useEffect(() => {
    props.fetchListMovieCS();
    console.log(props);
  }, []);
  const renderHTMLCS = () => {
    const { data } = props ;
    console.log(data);
    return (data&&data.map((item) => {
      return (
        <div className="movie__card" key={item.maPhim}>
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
      <img src={item.hinhAnh} alt="test" className="img-fluid"/>
    </div>
    <div className="movieInfo__container">
      <div className="movieInfo__row">
        <div className="movie__name">
          <p>{item.tenPhim}</p>
        </div>
      </div>
    </div>
  </div>
      )
    }))
  }
  const settings = {
    className: "slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: false,
    prevArrow: <MoviePrevArrow />,
    nextArrow: <MovieNextArrow />,
    autoplaySpeed: 10000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        },
      },
    ],
  };
  // const { movieCS } = props;
  return (
    
  <Slider {...settings}>
    {renderHTMLCS()}
  </Slider>
  );
}

const mapStateToProps = (state) => {
  return {
    // loading: state.listMovieReducer.loading,
    data: state.listMovieReducerCS.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovieCS: () => {
      dispatch(actListMovieApiComingSoon());
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieItemCS);
