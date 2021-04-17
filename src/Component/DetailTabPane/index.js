import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import DetailTabPaneDate from "./../DetailTabPaneDate";
import DetailTabPaneItem from "./../DetailTabPaneItem";
import DetailTabPaneItemMobile from "./../DetailTabPaneItemMobile";

export default function DetailTabPane() {
    return (
        <section className="detail__tab" name="detail__tab">
          <div className="detailTab__container">
            <div className="detailTab__box">
              {/* Desktop Design */}
              <div className="nav flex-column nav-pills col-12 col-lg-3 detailTab__pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link detailTab__link active" id="BHD" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <img src={require("./../../Asset/img/theater/BHD.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </div>
                  <div className="nav-link detailTab__link" id="CINE" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/f32670fd0eb083c9c4c804f0f3a252ed.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">Cine Star</span>
                  </div>
                  <div className="nav-link detailTab__link" id="DDC" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/DDC.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </div>
                  <div className="nav-link detailTab__link" id="MEGAGS" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/Mage.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </div>
                  <div className="nav-link detailTab__link" id="DCINE" data-toggle="pill" href="#d-cine" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/dcine-ben-thanh.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </div>
                  <div className="nav-link detailTab__link" id="LOTTE" data-toggle="pill" href="#lotte" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/lotte.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </div>
              </div>
              <div className=" col-lg-9 tab-content detailTab__content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="BHD">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="CINE">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="DDC">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="MEGAGS">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="d-cine" role="tabpanel" aria-labelledby="DCINE">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="lotte" role="tabpanel" aria-labelledby="LOTTE">
                    <DetailTabPaneDate/>
                    <DetailTabPaneItem/>
                  </div>
              </div>

              {/* Mobile Design */}
              <div className="col-12 detailTab__pillsMobile">
                <div className="tab-content" id="v-pills-tabContentMobile">
                    <DetailTabPaneDate/>
                </div>
                  <div className="dropdown">
                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="BHD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/BHD.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">BHD Star Cineplex</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="BHD">
                        <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>

                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="CINE" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/f32670fd0eb083c9c4c804f0f3a252ed.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">Cine Star</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="CINE">
                        <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>

                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="DDC" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/DDC.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">BHD Star Cineplex</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="DDC">
                          <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>

                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="MEGAGS" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/Mage.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">BHD Star Cineplex</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="MEGAGS">
                        <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>

                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="DCINE" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/dcine-ben-thanh.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">BHD Star Cineplex</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="DCINE">
                        <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>
                    
                    <div className="nav__link__container">
                      <div className="nav-link detailTab__linkMobile dropdown-toggle dropdown__toggle" id="LOTTE" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={require("./../../Asset/img/theater/lotte.png").default} alt="" className="detailTab__iconMobile"/>
                        <span className="detailTab__theaterNameMobile">BHD Star Cineplex</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon__right"/>
                      </div>
                      <div class="dropdown-menu dropdown__menu" aria-labelledby="LOTTE">
                        <a class="dropdown-item dropdown__item" href="#"><DetailTabPaneItemMobile/></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
}
