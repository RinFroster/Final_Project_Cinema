import React from "react";
import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CarouselPrevArrow,CarouselNextArrow} from "./../Arrow";
import FirstCarousel from "./../../Asset/Carousel__img/an-quy.png";
import {actListMovieCarousel} from "./modules/action";
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

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
                <Popup trigger={<img src={FirstCarousel} alt="FirstCarousel"/>} position="center" className="carousel__popup">
                    <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
                <Popup trigger={<img src={FirstCarousel} alt="FirstCarousel"/>} position="center" className="carousel__popup">
                    <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
                <Popup trigger={<img src={FirstCarousel} alt="FirstCarousel"/>} position="center" className="carousel__popup">
                    <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
                <Popup trigger={<img src={FirstCarousel} alt="FirstCarousel"/>} position="center" className="carousel__popup">
                    <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
                <Popup trigger={<img src={FirstCarousel} alt="FirstCarousel"/>} position="center" className="carousel__popup">
                    <div><iframe className="carousel__popup__video" src="https://www.youtube.com/embed/98W8bv_8Kz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
            </Slider>
        </section>
    );
  }

export default memo(Carousel);

