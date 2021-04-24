import React, { useState, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListTheaterApi, actShowTimeApi } from "./modules/action";
import { connect } from "react-redux";
import ShowTimes from "../ShowTimes";
import { data } from "jquery";

function TheaterItem(props) {
  
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(null);
  const [showTime, setShowTime] = useState({ indexShow: 0 });


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


  useEffect(() => {
    const id = props.cinema;
    props.fetchListTheater(id);
   
  }, []);

  const renderTheaterItem = () => {
    const { data } = props;
      return (data && data.map((item, index)=> {
          return (
            <div
              key={item.maCumRap}
              className="theaterItem__content active"
              id={ "cinema" + data.maCumRap}
              data-toggle="list"
              role= "tab"
              aria-controls="home"
              href={"#Cinema" + item.maCumRap}
              aria-controls = {item.maCumRap}
              onClick={handleClick, ()=>{
                setShowTime({indexShow: index});
              }}
              aria-selected="true"
            >
              <img
                src={
                  require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png")
                    .default
                }
                alt=" "
              />
              <div className="theaterItem__span">
                <span className="cinema">
                  <span className="colorCinema">{item.tenCumRap}</span>
                </span>
                <span className="infoCinema">{item.diaChi}</span>
                <span className="infoCinema__Detail">
                  <a>[chi tiết]</a>
                </span>
              </div>
            </div>
          );
        })
      )};
  const renderShowTime = () => {
    const { data } = props;   
      return (
        data && (
          <div
           className = "show active"
          id= { "Cinema" + data[showTime.indexShow].maCumRap}
          role="tabpanel"
          aria-labelledby = {"cinema" + data[showTime.indexShow].maCumRap}
        >
            <ShowTimes key = {data[showTime.indexShow].biDanh} maCumRap = {data[showTime.indexShow].maCumRap} 
            danhSachRap = {data[showTime.indexShow].danhSachRap} nameCinema = {props.cinema} />  
            </div>
        )
        )
  };

  return (
    <div className="row theater__item">
      <div className="col-lg-4 theaterItem__column">
        {renderTheaterItem()}
      </div>
      <div className="col-lg-8 theater__wrapMovie">
            {renderShowTime()}
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
  };
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(TheaterItem));
