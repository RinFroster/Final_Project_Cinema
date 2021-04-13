import React from "react";
import MovieList from "./../../../Component/MovieList";
import Carousel from "./../../../Component/Carousel";
import BuyTicketTool from "./../../../Component/BuyTicketTool";
import Theater from "../../../Component/Theater";
import News from "../../../Component/News";
import MobileApp from "../../../Component/MobileApp";

function HomePage(){
  return (
    <div className="homePage">
      <Carousel/>
      <BuyTicketTool/>
      <MovieList/>
      <Theater />
      <News />
      <MobileApp />
    </div>
  );
}

export default HomePage;
