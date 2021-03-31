import React from "react";
import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CarouselPrevArrow,CarouselNextArrow} from "./../Arrow";

function Carousel(){
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        nextArrow: <CarouselNextArrow/>,
        prevArrow: <CarouselPrevArrow/>,
        className: "carousel",
        responsive: [
            {
                breakpoint: 240,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className="carousel__container">
            <Slider  {...settings}>
                <div className="carousel__item">1</div>
                <div className="carousel__item">2</div>
                <div className="carousel__item">3</div>
                <div className="carousel__item">4</div>
                <div className="carousel__item">5</div>
            </Slider>
        </section>
    );
  }

export default memo(Carousel);

