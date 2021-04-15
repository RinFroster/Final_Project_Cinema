import React from 'react';
import DetailTabPaneItem from "./DetailTabPaneItem";

export default function DetailTabPane() {
    return (
        <section className="detail__tab" name="detail__tab">
          <div className="detailTab__container">
            <div className="detailTab__box">
              <div className="nav flex-column nav-pills col-lg-3 detailTab__pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link detailTab__link active" id="BHD" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <img src={require("./../../Asset/img/theater/BHD.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </a>
                  <a className="nav-link detailTab__link" id="CINE" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/f32670fd0eb083c9c4c804f0f3a252ed.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">Cine Star</span>
                  </a>
                  <a className="nav-link detailTab__link" id="DDC" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/DDC.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </a>
                  <a className="nav-link detailTab__link" id="MEGAGS" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/Mage.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </a>
                  <a className="nav-link detailTab__link" id="DCINE" data-toggle="pill" href="#d-cine" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/dcine-ben-thanh.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </a>
                  <a className="nav-link detailTab__link" id="LOTTE" data-toggle="pill" href="#lotte" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/lotte.png").default} alt="" className="detailTab__icon"/>
                    <span className="detailTab__theaterName">BHD Star Cineplex</span>
                  </a>
              </div>
              <div className=" col-lg-9 tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="BHD">
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="CINE">
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="DDC">
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="MEGAGS">
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="d-cine" role="tabpanel" aria-labelledby="DCINE">
                    <DetailTabPaneItem/>
                  </div>
                  <div className="tab-pane fade" id="lotte" role="tabpanel" aria-labelledby="LOTTE">
                    <DetailTabPaneItem/>
                  </div>
                </div>
            </div>
          </div>
      </section>
    )
}
