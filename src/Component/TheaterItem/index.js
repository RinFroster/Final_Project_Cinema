import React, { useState, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListTheaterApi, actShowTimeApi } from "./modules/action";
import { connect } from "react-redux";
import ShowTimes from "../ShowTimes";

function TheaterItem(props) {
  
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(null);
  const [showTime, setShowTime] = useState({ indexShow: 0 });
  const [DSRap, setDSRap] = useState({
    listShowTime: [],
  });


  let { data } = props;

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
    // console.log(props)
    const { data } = props;
    if(data) {
      const [ lstCumRap ] = data;
      return lstCumRap.lstCumRap && lstCumRap.lstCumRap.map((item, index)=>{
        // console.log(item)
        if(index === 0) {
          return (
            <div
              key={item.maCumRap}
              className="theaterItem__content active"
              id={item.maCumRap}
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
        else {
          return (
            <div
              key={item.maCumRap}
              className="theaterItem__content"
              id={item.maCumRap}
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
    }
  };
  const renderShowTime = () => {
    // const { data } = props;
    // console.log(data)
    // if(data){
    //   const datalisst = [...data.lstCumRap ]
    // }
    
      // return (
      //   data.lstCumRap && (
      //     <div
      //      className = "show active"
      //     id= {data.lstCumRap.maCumRap}
      //     aria-labelledby = {data.lstCumRap[showTime.indexShow].maCumRap}
      //   >
      //       <ShowTimes key = {data.lstCumRap.maCumRap} show = {data.lstCumRap[showTime.indexShow].danhSachPhim} />  
      //       </div>
      //   )
      //   )
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
