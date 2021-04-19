import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { connect } from "react-redux";
import { actShowTimeApi } from "./modules/action";

function ShowTimes(props) {
    const [open, setOpen] = useState(false);


    console.log(props);
    useEffect(()=>{
        const ma = props.cinema;
        props.fetchShowTime(ma);
    })
    // const renderShowTime = () =>{
    //   return data && data.map((item, index)=>{
    //     return 
    //   })
    // }
    return (
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
        <Collapse in={!open}>
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
 
    )
}

const mapStateToProps = (state) =>{
  return {
    data: state.ShowTimeReducer.data,
  }
  
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchShowTime: (ma)=>{
      dispatch(actShowTimeApi(ma))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowTimes)


