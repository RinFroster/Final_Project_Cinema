import React,{useEffect} from 'react';
import {actDetailMovieApi} from "./Modules/Action";
import {connect} from "react-redux";
import DetailTabPane from "./../../../Component/DetailTabPane";
import MovieInfo from "./../../../Component/MovieInfo";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import SecondCarousel from "./../../../Asset/img/play-button.png";

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
                <div className="detail__movie__gradient"></div>
                <img className="img-fluid" src={data && data.hinhAnh} alt=""/>
                <Popup trigger={<div className="detail__playTrailer"><img src={SecondCarousel}/></div>} position="center" className="detail__popup">
                  <div><iframe className="detail__popup__video" src={data && data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Popup>
              </div>
              <div className="detail__movie__textArea">
                <div className="detail__movie__date">02.04.2021</div>
                  <span className="detail__movie__info">
                      <span className="detail__movie__ageType">C18</span>
                      <span className="detail__movie__name">{data && data.tenPhim}</span>
                  </span>
                  <div className="detail__movie__time">130 phút - 8.1 IMDB - 2D/Digital</div>
                  <Link to="myTabContent" spy={true} duration={500}>
                    <button className="btn btn-secondary buyTicket__btn">Mua Vé</button>
                  </Link>
              </div>
          </div>
          <div className="detailPage__tab__container">
            <ul class="nav nav-tabs detailPage__tab" id="myNews" role="tablist">
                  <li class="nav-item detailPage__tab__item" role="presentation">
                      <a class="nav-link detailPage__tab__link active" id="home-tab" data-toggle="tab" href="#news__24h" role="tab" aria-controls="news__24h" aria-selected="true">Lịch Chiếu</a>
                  </li>
                  <li class="nav-item detailPage__tab__item" role="presentation">
                      <a class="nav-link detailPage__tab__link" id="profile-tab" data-toggle="tab" href="#news__review" role="tab" aria-controls="news__review" aria-selected="false">Thông Tin</a>
                  </li>
            </ul>
            <div class="tab-content detailPage__tab__content" id="myTabContent">
              <div className="tab-pane fade show active" id="news__24h" role="tabpanel" aria-labelledby="news__24h">
                <DetailTabPane/>
              </div>
              <div className="tab-pane fade" id="news__review" role="tabpanel" aria-labelledby="news__review">
                <MovieInfo/>
              </div>
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
