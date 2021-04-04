import React, {useRef} from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../Component/NavbarHome";
import MovieList from "./../../Component/MovieList";
import Carousel from "./../../Component/Carousel";
import BuyTicketTool from "./../../Component/BuyTicketTool";
import Theater from "../../Component/Theater";
import News from "../../Component/News";
import MobileApp from "../../Component/MobileApp";
import Footer from "../../Component/Footer";
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

// scrollToTop(){
//   scroll.scrollToTop();
// },

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      <Carousel/>
      <BuyTicketTool/>
      <MovieList/>
      <Theater />
      <News />
      <MobileApp />
      <Footer />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
