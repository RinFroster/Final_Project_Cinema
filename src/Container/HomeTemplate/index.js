import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../Component/NavbarHome";
import Footer from "../../Component/Footer";
<<<<<<< HEAD
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
=======
import BackToTopButton from "./../../Component/BackToTopButton";
>>>>>>> 5b40912329ed30ccdc78ce9a310b9b989ed63d1c


function HomeLayout(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
      <Footer />
      <BackToTopButton/>
    </>
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
