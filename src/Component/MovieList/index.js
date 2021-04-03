import React, { useState, useEffect } from "react";
import MovieItem from "./../MovieItem";
import { actListMovieApi } from "./modules/action";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoviePrevArrow, MovieNextArrow } from "./../Arrow";

function MovieList(props) {
  useEffect(() => {
    props.fetchListMovie();
  }, [])

  const renderHTML = () => {
    const {data} = props.movie;
    return (data&&data.map((item) => {
      return <MovieItem key={item.maPhim} movie={item}/>
    }))
  }
  const settings = {
    className: "slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    dots: true,
    autoplay: false,
    prevArrow: <MoviePrevArrow />,
    nextArrow: <MovieNextArrow />,
    autoplaySpeed: 10000,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1600,
        settings:{
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1399,
        settings:{
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          focusOnSelect: false,
          swipe: true,
        }
      },
      {
        breakpoint: 1199,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          focusOnSelect: false,
          swipe: true,
        }
      },
      {
        breakpoint: 991,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          draggable: true,
          focusOnSelect: false,
          swipe: true,
        }
      },
      {
        breakpoint: 767,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        }
      },
      {
        breakpoint: 575,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        }
      },
      {
        breakpoint: 479,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          focusOnSelect: false,
          swipe: true,
        }
      },
    ]
  };
  return (
    <section className="movie" name="homeMovie">
      <div className="movie__card__container">
      {renderHTML}
        <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#nowShowingFilm"
              role="tab"
              aria-controls="nowShowingFilm"
              aria-selected="true"
            >
              Phim Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#upComingFilm"
              role="tab"
              aria-controls="upComingFilm"
              aria-selected="false"
            >
              Phim Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="nowShowingFilm"
            role="tabpanel"
            aria-labelledby="nowShowingFilm"
          >
            <Slider {...settings}>
            {renderHTML}
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="upComingFilm"
            role="tabpanel"
            aria-labelledby="upComingFilm"
          >
            <Slider {...settings}>
            {renderHTML}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    // loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi());
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
