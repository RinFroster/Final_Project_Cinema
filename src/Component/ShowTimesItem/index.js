import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

export default function ShowTimesItem(props) {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const { danhSachPhim } = props;
  });

  // const addHour = (gio, h) => {
  //   time.hours = gio + h;
  //   setTime({
  //     hours: time,
  //   });
  // };

  const renderBtn = (lstLichChieuTheoPhim, maPhim) => {
    return lstLichChieuTheoPhim.map((item) => {
      return (
        <div key={item.maCumRap} className="theater__sessions">
          <a className="sessions__btn">
            <span className="sessions__span">
              {new Date(item.ngayChieuGioChieu).getHours() +
                ":" +
                new Date(item.ngayChieuGioChieu).getMinutes()}
            </span>
            ~
            {new Date(item.ngayChieuGioChieu).getHours() +
                ":" +
                new Date(item.ngayChieuGioChieu).getMinutes()}
          </a>
        </div>
      );
    });
  };

  const renderItem = () => {
    return props.danhSachPhim.map((item) => {
      return (
        <>
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text1"
            aria-expanded={open}
          >
            <img src={item.hinhAnh} />
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                {item.tenPhim}
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={!open}>
            <div className="theater__2D" id="example-collapse-text1">
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
                {renderBtn(item.lstLichChieuTheoPhim, item.maPhim)}
              </div>
            </div>
          </Collapse>
        </>
      );
    });
  };
  return <>{renderItem()}</>;
}
