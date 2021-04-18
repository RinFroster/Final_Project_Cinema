import Collapse from "react-bootstrap/Collapse";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListTheaterApi, actShowTimeApi } from "./modules/action";
import { connect } from "react-redux";

function TheaterItem(props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(null);
  const [showTime, setShowTime] = useState({ indexShow: 1 });
  const [DSRap, setDSRap] = useState({
    listShowTime: [],
  });

  const handleClick = (e) => {
    const otherTheater = document.getElementsByClassName(
      "theaterItem__content active"
    )[0];
    const chosenTheater = document.getElementById(e.target.id);
    const theater = e.target.id;
    setActive(theater);
    otherTheater.classList.remove("active");
    if (theater) {
      chosenTheater.classList.add("active");
    }
  };

  const handleShow = (e) => {
    const movie = e.target.id;
    setShow(movie);
  };

  let { data } = props;

  useEffect(() => {
    const id = props.cinema;
    props.fetchListTheater(id);
    props.fetchShowTime(id);
  }, []);
  const renderTheaterItem = () => {
    const { data } = props;
    return (data && data.map((item,index) => {
      if(index === 0){
        return (
          <div key={item.maCumRap} className="theaterItem__content active" id={item.maCumRap} onClick={handleClick}>
            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=" "/>
            <div className="theaterItem__span">
              <span className="cinema">
                <span className="colorcinema">{item.tenCumRap}</span>
              </span>
              <span className="infoCinema">{item.diaChi}</span>
              <span className="infoCinema__Detail">
                <a>[chi tiết]</a>
              </span>
            </div>
          </div>
        );
      }else{
        return (
          <div key={item.maCumRap} className="theaterItem__content" id={item.maCumRap} onClick={handleClick}>
            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=" "/>
            <div className="theaterItem__span">
              <span className="cinema">
                <span className="colorcinema">{item.tenCumRap}</span>
              </span>
              <span className="infoCinema">{item.diaChi}</span>
              <span className="infoCinema__Detail">
                <a>[chi tiết]</a>
              </span>
            </div>
          </div>
        );
      }
      })
    );
  };
  const renderShowTime = () => {
    DSRap.listShowTime = props.data;
    console.log(DSRap.listShowTime);
  };

  return (
    <div className="row theater__item">
      <div className="col-lg-4 theaterItem__column">
        {renderTheaterItem()}
      </div>
      <div className="col-lg-8 theater__wrapMovie">
        <div className="theaterItem__item">
          <div
            className="theaterItem__movie"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text1"
            aria-expanded={open}
          >
            <img
              src={
                require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                  .default
              }
            />
            <div className="theaterItem__moviespan">
              <span className="cinema__movie">
                <span className="btnCinema">C13</span>
                Godzilla vs. Kong
              </span>
              <span className="movie__span">100 phút - TIX 8.7 - IMDb 7.4</span>
            </div>
          </div>
          <Collapse in={open}>
            <div className="theater__2D" id="example-collapse-text1">
              <div className="theaterItem__header">2D Digital</div>
              <div className="theater__sessionsContainer">
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              <div className="theater__sessions">
                <a className="sessions__btn">
                  <span className="sessions__span">15:05</span>~ 16:45
                </a>
              </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.ListTheaterReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListTheater: (id) => {
      dispatch(actListTheaterApi(id));
    },
    fetchShowTime: (ma) => {
      dispatch(actShowTimeApi(ma));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheaterItem);
