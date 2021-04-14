import React,{useEffect} from 'react';
import Footer from "./../../../Component/Footer";
import {actDetailMovieApi} from "./Modules/Action";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { NavItem } from 'react-bootstrap';

function MovieDetail(props) {
    useEffect(() => {
        const id = props.match.params.id;
        props.fetchDetailMovie(id);
    }, [])
    const {data} = props;
    return (
      <section className="detail__section">
          <div className="detail__movie__container">
              <div className="detail__movie__img">
                  <img className="img-fluid" src={data && data.hinhAnh} alt=""/>
              </div>
              <div className="detail__movie__textArea">
                <div className="detail__movie__date">02.04.2021</div>
                  <div className="detail__movie__info">
                      <div className="detail__movie__ageType">C18</div>
                      <div className="detail__movie__name">{data && data.tenPhim}</div>
                  </div>
                  <div className="detail__movie__time">130 phút - 8.1 IMDB - 2D/Digital</div>
                  <Link><button className="btn btn-secondary buyTicket__btn">Mua Vé</button></Link>
              </div>
          </div>
      </section>
    )
}

const mapStateToProps = (state) => {
    return {
    //   loading: state.detailMovieReducer.loading,
      data: state.detailMovieReducer.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchDetailMovie: (id) => {
        dispatch(actDetailMovieApi(id));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
