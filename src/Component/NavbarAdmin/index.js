import React,{useState} from 'react';
import logo from './../../Asset/img/Logo.png';
import {Link} from "react-router-dom";

function NavbarAdmin() {
  const [addShowClassDropdownNav, setShowClassDropdownNav] = useState(false);
  const handleOnClickCollapseBtn = () => {
    if(addShowClassDropdownNav === false){
      setShowClassDropdownNav(true);
    }else if(addShowClassDropdownNav === true){
      setShowClassDropdownNav(false);
    }
  };
  return (
      <nav className="navbar navbar-expand-lg navbar-light navbarAdmin">
        <div className="container-fluid navbarAdmin__container">
          <div className="navbar-brand navbarAdmin__brand">
            <div className="navbarAdmin__logo">
              <Link to="/"><img src={logo} alt="Logo"/></Link>
            </div>
          </div>
          <button className="navbar-toggler navbarAdmin__toggler" onClick={handleOnClickCollapseBtn} id="adminCollapseBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbarAdmin__icon" />
          </button>
          <div className={`collapse navbar-collapse navbarAdmin__collapse ${addShowClassDropdownNav ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav navbarAdmin__nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown navbarAdmin__dropdown">
                <a className="nav-link dropdown-toggle navbarAdmin__dropdownToggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  quản lý phim
                </a>
                <ul className="dropdown-menu navbarAdmin__dropdownMenu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">thêm phim</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">xoá phim</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">cập nhật phim</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">cập nhật hình phim</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown navbarAdmin__dropdown">
                <a className="nav-link dropdown-toggle navbarAdmin__dropdownToggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-expanded="false">
                  quản lý người dùng
                </a>
                <ul className="dropdown-menu navbarAdmin__dropdownMenu" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">thêm người dùng</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">xoá người dùng</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">cập nhật người dùng</a></li>
                </ul>
              </li>
  
              <li className="nav-item dropdown navbarAdmin__dropdown">
                <a className="nav-link dropdown-toggle navbarAdmin__dropdownToggle" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-expanded="false">
                  quản lý lịch chiếu phim
                </a>
                <ul className="dropdown-menu navbarAdmin__dropdownMenu" aria-labelledby="navbarDropdown2">
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">thêm lịch chiếu</a></li>
                  <li><a className="dropdown-item navbarAdmin__dropdownItem">xoá lịch chiếu</a></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
          <div className="navbarAdmin__user">
            <div className="navbarAdmin__logo">
              <img src={require("./../../Asset/img/photo.png").default} alt=""/>
            </div>
            <div className="navbarAdmin__userName">Trương Vĩ Hào</div>
          </div>
        </div>
      </nav>


  )
}
export default NavbarAdmin
