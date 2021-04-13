import React, { useState , useEffect } from "react";
import TheaterItem from "../TheaterItem";
import { useSelector, useDispatch } from "react-redux";
import { actListCinemaApi, actListTheaterApi } from "./modules/action";
import { Link } from "react-router-dom"

export default function Theater(props) {
  const [open, setOpen] = useState(false);
  const [cinema, setcinema] = useState({indexCinema : 0});
  const dispatch = useDispatch();

  let { data } = useSelector(state => state.ListCinemaReducer);
  
  const fetchListCinema = () =>{
    dispatch(actListCinemaApi())
  }
  useEffect(()=>{
    fetchListCinema();
    return () =>{
    }
  }, []);


  // const fetchListTheater = (ma) =>{
  //   dispatch(actListTheaterApi(ma));
  // }

  const renderListCinema = () =>{
    // console.log(data)
    return (data && data.map((item, index)=>{
      if(index == 0){
      return (
        <a
        key={item.biDanh}
        className= "nav-link active"
        id= {item.maHeThongRap}
        data-toggle="pill"
        href={"#" + item.biDanh}
        role="tab"
        aria-controls={item.maHeThongRap}
        onClick={()=>{setcinema({indexCinema : index})}}
        aria-selected="true"
      >
        <img
          src={item.logo}
        />
      </a>
      )
      }
      else {
        return (
          <a
          key={item.biDanh}
          className="nav-link "
          id= {item.maHeThongRap}
          data-toggle="pill"
          href={"#" + item.biDanh}
          role="tab"
          aria-controls={item.maHeThongRap}
          onClick={()=>{setcinema({indexCinema : index})}}
          aria-selected="false"
        >
          <img
            src={item.logo}
          />
        </a>
        )
      }
    })
    )}
    const renderListCinemaSystem = () =>{
        return (
          data && (
            <div 
                className="tab-pane fade show active"
                id={data[cinema.indexCinema].biDanh}
                role="tabpanel"
                aria-labelledby= {data[cinema.indexCinema].maHeThongRap}
              >
               <TheaterItem key={data[cinema.indexCinema].biDanh}  cinema = {data[cinema.indexCinema].maHeThongRap}/>
              
              </div>
          )
        )
        
      }
  return (
    <section className="container theater">
      <div className="row">
        <div className="col-sm-1 col-md-2" style={{ padding: 0 }}>
          <div className="theater__content">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {renderListCinema()}
            </div>
          </div>
        </div>
        <div className="col-sm-11 col-md-10">
          <div className="tab-content" id="v-pills-tabContent">
            {renderListCinemaSystem()}
          </div>
        </div>
      </div>
    </section>
  );
  
}



 {/* <a
                className="nav-link active"
                id="BHD"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <img
                  src={data[0].logo}
                />
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <img
                  src={
                    require("./../../Asset/img/theater/f32670fd0eb083c9c4c804f0f3a252ed.png")
                      .default
                  }
                />
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <img
                  src={require("./../../Asset/img/theater/DDC.png").default}
                />
              </a>
              <a
                className="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <img
                  src={require("./../../Asset/img/theater/Mage.png").default}
                />
              </a> */}