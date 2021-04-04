import React,{ useState } from "react";
import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CarouselPrevArrow,CarouselNextArrow} from "./../Arrow";
import FirstCarousel from "./../../Asset/Carousel__img/an-quy.png";

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
                <img src={FirstCarousel} alt="FirstCarousel"/>
                <img src={FirstCarousel} alt="FirstCarousel"/>
                <img src={FirstCarousel} alt="FirstCarousel"/>
                <img src={FirstCarousel} alt="FirstCarousel"/>
                <img src={FirstCarousel} alt="FirstCarousel"/>
            </Slider>
        </section>
    );
  }

export default memo(Carousel);

