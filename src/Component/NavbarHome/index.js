import React, { memo, useRef, useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

function NavbarHome() {
  const [addActiveClass, setActiveClass] = useState(false);
  const dropdownButton = useRef();
  const dropdown = useRef();

  const handleOnClick = () => {
    if(addActiveClass === false){
      setActiveClass(true);
    }else{
      setActiveClass(false);
    }
  };

  const [isVisible, setVisible] = useState(false);

  // const handleOnBlur = () => {
  //   const navbarTogglerIcon = document.getElementById("toggler__icon");
  //   const onBlurClass = document.getElementById("navbarSupportedContent");
  //   navbarTogglerIcon.classList.remove("active");
  //   onBlurClass.classList.remove("show");
  //   setActiveClass(!addActiveClass);
  //   setVisible(prevState => !prevState.isVisible);
  //   console.log("handleOnBlur running");
  // };

  useEffect(() => {
    document.addEventListener("mousedown",handleClickOutside);
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
    }
  }, []);

  const handleClickOutside = event => {
    if (dropdown.current && !dropdown.current.contains(event.target) && dropdownButton.current && !dropdownButton.current.contains(event.target)) {
      setVisible(true);
      setActiveClass(false);
      setVisible(false);
    }else{
      setVisible(false);
    }
  };
    
  const chooseLocation = () => {
    const buttonSelected = document.getElementById("dropdownMenu2");
    const itemSelected = document.getElementById("HaNoi");
    buttonSelected.innerHTML = `${itemSelected.innerHTML}`;
  }
  
  return (
    <section className="navbar__container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md">
          {/* Brand */}
          <div className="left">
            <div className="logo">CINEMA</div>
          </div>
          {/* Toggler/collapsibe Button */}
          <button
            type="button"
            onClick={handleOnClick}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={dropdownButton}
          >
            <span className={`navbar__toggler__icon ${addActiveClass ? "active" : ""}`} id="toggler__icon"/>
          </button>
          {/* Navbar links */}
          <div className={`collapse navbar-collapse ${isVisible ? "show" : ""}`} id="navbarSupportedContent"  tabIndex="0" ref={dropdown}>
              {/* {state && ( */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="homeMovie"
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Lịch Chiếu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="homeMovie"
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Cụm Rạp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="homeMovie"
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Tin Tức
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="homeMovie"
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Ứng Dụng
                    </Link>
                  </li>
                  <li className="nav-item select__location" id="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="map__icon" />
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle btn__location" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={chooseLocation}>
                        Hồ Chí Minh
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button id="HCM" className="dropdown-item" type="button" onClick={chooseLocation}>
                          Hồ Chí Minh
                        </button>
                        <button  className="dropdown-item" type="button" >
                          <div id="HaNoi" onClick={chooseLocation}>Hà Nội</div>
                        </button>
                        <button onclick="input(2)" className="dropdown-item" type="button">
                          Đà Nẵng
                        </button>
                        <button onclick="input(3)" className="dropdown-item" type="button">
                          Hải Phòng
                        </button>
                        <button onclick="input(4)" className="dropdown-item" type="button">
                          Biên Hoà
                        </button>
                        <button onclick="input(5)" className="dropdown-item" type="button">
                          Nha Trang
                        </button>
                        <button onclick="input(6)" className="dropdown-item" type="button">
                          Bình Dương
                        </button>
                        <button onclick="input(7)" className="dropdown-item" type="button">
                          Phan Thiết
                        </button>
                        <button onclick="input(8)" className="dropdown-item" type="button">
                          Hạ Long
                        </button>
                        <button onclick="input(9)" className="dropdown-item" type="button">
                          Cần Thơ
                        </button>
                        <button onclick="input(10)" className="dropdown-item" type="button">
                          Vũng Tàu
                        </button>
                        <button onclick="input(11)" className="dropdown-item" type="button">
                          Quy Nhơn
                        </button>
                        <button onclick="input(12)" className="dropdown-item" type="button">
                          Huế
                        </button>
                        <button onclick="input(13)" className="dropdown-item" type="button">
                          Long Xuyên
                        </button>
                        <button onclick="input(14)" className="dropdown-item" type="button">
                          Thái Nguyên
                        </button>
                        <button onclick="input(15)" className="dropdown-item" type="button">
                          Buôn Ma Thuôt
                        </button>
                        <button onclick="input(16)" className="dropdown-item" type="button">
                          Bắc Giang
                        </button>
                        <button onclick="input(17)" className="dropdown-item" type="button">
                          Bến Tre
                        </button>
                        <button onclick="input(18)" className="dropdown-item" type="button">
                          Việt Trì
                        </button>
                        <button onclick="input(19)" className="dropdown-item" type="button">
                          Ninh Bình
                        </button>
                        <button onclick="input(20)" className="dropdown-item" type="button">
                          Thái Bình
                        </button>
                        <button onclick="input(21)" className="dropdown-item" type="button">
                          Vinh
                        </button>
                        <button onclick="input(22)" className="dropdown-item" type="button">
                          Bảo Lộc
                        </button>
                        <button onclick="input(23)" className="dropdown-item" type="button">
                          Đà Lạt
                        </button>
                        <button onclick="input(24)" className="dropdown-item" type="button">
                          Trà Vinh
                        </button>
                        <button onclick="input(25)" className="dropdown-item" type="button">
                          Yên Bái
                        </button>
                        <button onclick="input(26)" className="dropdown-item" type="button">
                          Kiên Giang
                        </button>
                        <button onclick="input(27)" className="dropdown-item" type="button">
                          Vĩnh Long
                        </button>
                        <button onclick="input(28)" className="dropdown-item" type="button">
                          Cà Mau
                        </button>
                        <button onclick="input(29)" className="dropdown-item" type="button">
                          Hậu Giang
                        </button>
                        <button onclick="input(30)" className="dropdown-item" type="button">
                          Tây Ninh
                        </button>
                        <button onclick="input(31)" className="dropdown-item" type="button">
                          Tuyên Quang
                        </button>
                        <button onclick="input(32)" className="dropdown-item" type="button">
                          Thanh Hoá
                        </button>
                        <button onclick="input(33)" className="dropdown-item" type="button">
                          Nam Định
                        </button>
                        <button onclick="input(34)" className="dropdown-item" type="button">
                          Hải Dương
                        </button>
                        <button onclick="input(35)" className="dropdown-item" type="button">
                          Gia Lai
                        </button>
                        <button onclick="input(36)" className="dropdown-item" type="button">
                          Hà Tĩnh
                        </button>
                        <button onclick="input(37)" className="dropdown-item" type="button">
                          Phú Yên
                        </button>
                        <button onclick="input(38)" className="dropdown-item" type="button">
                          Bạc Liêu
                        </button>
                        <button onclick="input(39)" className="dropdown-item" type="button">
                          Long An
                        </button>
                        <button onclick="input(40)" className="dropdown-item" type="button">
                          Đồng Hới
                        </button>
                        <button onclick="input(41)" className="dropdown-item" type="button">
                          Hà Nam
                        </button>
                        <button onclick="input(42)" className="dropdown-item" type="button">
                          Bắc Ninh
                        </button>
                        <button onclick="input(43)" className="dropdown-item" type="button">
                          Quảng Trị
                        </button>
                        <button onclick="input(44)" className="dropdown-item" type="button">
                          Kon Tum
                        </button>
                        <button onclick="input(45)" className="dropdown-item" type="button">
                          Sóc Trăng
                        </button>
                        <button onclick="input(46)" className="dropdown-item" type="button">
                          Sơn La
                        </button>
                        <button onclick="input(47)" className="dropdown-item" type="button">
                          Lạng Sơn
                        </button>
                        <button onclick="input(48)" className="dropdown-item" type="button">
                          Quảng Ngãi
                        </button>
                        <button onclick="input(49)" className="dropdown-item" type="button">
                          Mỹ Tho
                        </button>
                        <button onclick="input(50)" className="dropdown-item" type="button">
                          Đồng Tháp
                        </button>
                        <button onclick="input(51)" className="dropdown-item" type="button">
                          Hưng Yên
                        </button>
                      </ul>
                    </div>
                  </li>
                </ul>
              {/* )} */}
          </div>
          <div className="right">
              <div className="user__account">
                <FontAwesomeIcon icon={faUserCircle} className="user__avatar" />
                <div className="user__account__name">Trương Vĩ Hào</div>
              </div>
            </div>
        </nav>
      </div>
    </section>
  );
}
export default memo(NavbarHome);
