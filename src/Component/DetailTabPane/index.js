import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState, useEffect} from 'react';
import DetailTabPaneDate from "./../DetailTabPaneDate";
import DetailTabPaneItem from "./../DetailTabPaneItem";
import DetailTabPaneItemMobile from "./../DetailTabPaneItemMobile";
import {connect} from "react-redux";
import { actListCinemaApi } from '../Theater/modules/action';

function DetailTabPane(props) {
  const [cinema, setcinema] = useState({ indexCinema: 0 });

  useEffect(() => {
    props.fetchListCinema()
    return () => {
    }
  }, [])
  
  
  // Bốc tách data từ trong props
  const {data} = props; 
    
  const renderListCinemaDesktop = ()=>{
    return (data && data.map((item, index)=>{
      if(index === 0) {
        return (
          <div key ={item.biDanh} className="nav-link detailTab__link active" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.biDanh} role="tab" aria-controls={item.maHeThongRap} onClick={()=>{setcinema({indexCinema: index})}} aria-selected="false">
          <img src={item.logo} alt="" className="detailTab__icon"/>
          <span className="detailTab__theaterName">{item.tenHeThongRap}</span>
         </div>
        )
      }
      else {
        return (
        <div key ={item.biDanh} className="nav-link detailTab__link" id={item.maHeThongRap} data-toggle="pill" href={"#" + item.biDanh} role="tab" aria-controls={item.maHeThongRap} onClick={()=>{setcinema({indexCinema: index})}} aria-selected="false">
        <img src={item.logo} alt="" className="detailTab__icon"/>
        <span className="detailTab__theaterName">{item.tenHeThongRap}</span>
       </div>
        )
      }
     
    }))
  }
  const renderListCinemaSystemDestop =()=>{
    return (
      data && (
        <div  className="tab-pane fade show active" id={data[cinema.indexCinema].maHeThongRap} role="tabpanel" aria-labelledby={data[cinema.indexCinema].maHeThongRap}>
        <DetailTabPaneDate/>
        <DetailTabPaneItem  key={data[cinema.indexCinema].biDanh}  cinameDestop = {data[cinema.indexCinema].maHeThongRap}/>
      </div>
      )
    )
  }
  // maPhim = {props.maPhim}


  // render logo mobile 
  const renderListCinemaMobile = () =>{
    return (data && data.map((item, index)=>{
      return (
        <div className="nav__link__container" key ={item.biDanh}>
          <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id={item.maHeThongRap} aria-controls={item.maHeThongRap} onClick={()=>{setcinema({indexCinema: index})}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={item.logo} alt="" className="detailTab__iconMobile"/>
            <span className="detailTab__theaterNameMobile">{item.tenHeThongRap}</span>
            <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
          </div>
          {renderListCinemaSystemMobile()}
        </div>
      )
    }))
  }

  const renderListCinemaSystemMobile = () =>{
      return (
        data && (
          <div className="dropdown-menu dropdown__menu" href={"#" + data[cinema.indexCinema].biDanh} id ={data[cinema.indexCinema].maHeThongRap} aria-labelledby={data[cinema.indexCinema].maHeThongRap}>
          <a className="dropdown-item dropdown__item">
            <DetailTabPaneItemMobile key = {data[cinema.indexCinema].biDanh} cinameMobile = {data[cinema.indexCinema].maHeThongRap} />
            </a>
            </div>
        )
      )

  }
  
    return (
        <section className="detail__tab" name="detail__tab">
          <div className="detailTab__container">
            <div className="detailTab__box">
              {/* Desktop Design */}
              <div className="nav flex-column nav-pills col-12 col-lg-3 detailTab__pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {renderListCinemaDesktop()}
              </div>
              <div className=" col-lg-9 tab-content detailTab__content" id="v-pills-tabContent">
                {renderListCinemaSystemDestop()}
              </div>

              {/* Mobile Design */}
              <div className="col-12 detailTab__pillsMobile">
                <div className="tab-content" id="v-pills-tabContentMobile">
                    <DetailTabPaneDate/>
                </div>
                  <div className="dropdown">
                    {renderListCinemaMobile()}
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
}
const mapStateToProps = (state) =>{
    return {
      data: state.ListCinemaReducer.data,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      fetchListCinema: ()=>{
        dispatch(actListCinemaApi())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTabPane);