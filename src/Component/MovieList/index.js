import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import MovieItem from "./../MovieItem";
// import { actListMovieApi } from "./modules/action";
// import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoviePrevArrow, MovieNextArrow } from "./../Arrow";

function MovieList() {
  // const elements = document.getElementsByClassName("slick-slide");
  // const requireClass = document.getElementsByClassName("slick-current");
  // const removeClass = document.getElementsByClassName("movie__description");
  // const removeClassNotActive = () => {
  //   if(elements.classList.contains(requireClass)){
  //     removeClass.classList.remove("-hover");
  //   }
  // };
  const [slideIndex,setState] = useState(0);
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
    slideToShow: 3,
    slideToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 300,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    prevArrow: <MoviePrevArrow />,
    nextArrow: <MovieNextArrow />,
    autoplaySpeed: 10000,
    afterChange: () => 
      setState( () => 
        (slideIndex + 1 )),
  };
  return (
    <section className="movie" name="homeMovie">
      <p>Total updates: {slideIndex} </p>
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
