import React, { memo, useRef } from "react";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavbarHome(){
    return (
      <section className="navbar__container">
        <nav className="navbar navbar-expand-md">
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {/* Brand */}
          <div className="left">
            <div className="logo">CINEMA</div>
          </div>
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
          </ul>
          <div className="right">
            <div className="user__account">
              <FontAwesomeIcon icon={faUserCircle} className="user__avatar"/>
              <div className="user__account__name">Trương Vĩ Hào</div>
            </div> 
            <div className="select__location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="map__icon"/>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle btn__location"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hồ Chí Minh
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                  Hồ Chí Minh
                  </button>
                  <button className="dropdown-item" type="button">
                    Hà Nội
                  </button>
                  <button className="dropdown-item" type="button">
                    Đà Nẵng
                  </button>
                  <button className="dropdown-item" type="button">
                    Hải Phòng
                  </button>
                  <button className="dropdown-item" type="button">
                    Biên Hoà
                  </button>
                  <button className="dropdown-item" type="button">
                    Nha Trang
                  </button>
                  <button className="dropdown-item" type="button">
                    Bình Dương
                  </button>
                  <button className="dropdown-item" type="button">
                    Phan Thiết
                  </button>
                  <button className="dropdown-item" type="button">
                    Hạ Long
                  </button>
                  <button className="dropdown-item" type="button">
                    Cần Thơ
                  </button>
                  <button className="dropdown-item" type="button">
                    Vũng Tàu
                  </button>
                  <button className="dropdown-item" type="button">
                    Quy Nhơn
                  </button>
                  <button className="dropdown-item" type="button">
                    Huế
                  </button>
                  <button className="dropdown-item" type="button">
                    Long Xuyên
                  </button>
                  <button className="dropdown-item" type="button">
                    Thái Nguyên
                  </button>
                  <button className="dropdown-item" type="button">
                    Buôn Ma Thuôt
                  </button>
                  <button className="dropdown-item" type="button">
                    Bắc Giang
                  </button>
                  <button className="dropdown-item" type="button">
                    Bến Tre
                  </button>
                  <button className="dropdown-item" type="button">
                    Việt Trì
                  </button>
                  <button className="dropdown-item" type="button">
                    Ninh Bình
                  </button>
                  <button className="dropdown-item" type="button">
                    Thái Bình
                  </button>
                  <button className="dropdown-item" type="button">
                    Vinh
                  </button>
                  <button className="dropdown-item" type="button">
                    Bảo Lộc
                  </button>
                  <button className="dropdown-item" type="button">
                    Đà Lạt
                  </button>
                  <button className="dropdown-item" type="button">
                    Trà Vinh
                  </button>
                  <button className="dropdown-item" type="button">
                    Yên Bái
                  </button>
                  <button className="dropdown-item" type="button">
                    Kiên Giang
                  </button>
                  <button className="dropdown-item" type="button">
                    Vĩnh Long
                  </button>
                  <button className="dropdown-item" type="button">
                    Cà Mau
                  </button>
                  <button className="dropdown-item" type="button">
                    Hậu Giang
                  </button>
                  <button className="dropdown-item" type="button">
                    Tây Ninh
                  </button>
                  <button className="dropdown-item" type="button">
                    Tuyên Quang
                  </button>
                  <button className="dropdown-item" type="button">
                    Thanh Hoá
                  </button>
                  <button className="dropdown-item" type="button">
                    Nam Định
                  </button>
                  <button className="dropdown-item" type="button">
                    Hải Dương
                  </button>
                  <button className="dropdown-item" type="button">
                    Gia Lai
                  </button>
                  <button className="dropdown-item" type="button">
                    Hà Tĩnh
                  </button>
                  <button className="dropdown-item" type="button">
                    Phú Yên
                  </button>
                  <button className="dropdown-item" type="button">
                    Bạc Liêu
                  </button>
                  <button className="dropdown-item" type="button">
                    Long An
                  </button>
                  <button className="dropdown-item" type="button">
                    Đồng Hới
                  </button>
                  <button className="dropdown-item" type="button">
                    Hà Nam
                  </button>
                  <button className="dropdown-item" type="button">
                    Bắc Ninh
                  </button>
                  <button className="dropdown-item" type="button">
                    Quảng Trị
                  </button>
                  <button className="dropdown-item" type="button">
                    Kon Tum
                  </button>
                  <button className="dropdown-item" type="button">
                    Sóc Trăng
                  </button>
                  <button className="dropdown-item" type="button">
                    Sơn La
                  </button>
                  <button className="dropdown-item" type="button">
                    Lạng Sơn
                  </button>
                  <button className="dropdown-item" type="button">
                    Quảng Ngãi
                  </button>
                  <button className="dropdown-item" type="button">
                    Mỹ Tho
                  </button>
                  <button className="dropdown-item" type="button">
                    Đồng Tháp
                  </button>
                  <button className="dropdown-item" type="button">
                    Hưng Yên
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </section>
    );
}
export default memo(NavbarHome);
