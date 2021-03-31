import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import MovieItem from "./../MovieItem";
// import { actListMovieApi } from "./modules/action";
// import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoviePrevArrow, MovieNextArrow } from "./../Arrow";

function MovieList() {
  // componentDidMount() {
  //   this.props.fetchListMovie();
  // }

  // renderHTML = () => {
  //   const {data} = this.props;
  //   return (data&&data.map((item) => {
  //     return <MovieItem key={index} movie={item}/>
  //   }))
  // }
  const settings = {
    className: "slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    dots: true,
    centerMode: false,
    focusOnSelect: false,
    autoplay: false,
    prevArrow: <MoviePrevArrow />,
    nextArrow: <MovieNextArrow />,
    autoplaySpeed: 10000,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 767,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
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
          centerMode: false,
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
          centerMode: false,
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
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
            </Slider>
          </div>
          <div
            className="tab-pane fade"
            id="upComingFilm"
            role="tabpanel"
            aria-labelledby="upComingFilm"
          >
            <Slider {...settings}>
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
            </Slider>
          </div>
        </div>
      </div>
    </section>
    
    // <div className="container">
    //   {this.renderHTML()}
    // </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     loading: state.listMovieReducer.loading,
//     data: state.listMovieReducer.data,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchListMovie: () => {
//       dispatch(actListMovieApi());
//     },
//   };
// };
export default memo(MovieList);
