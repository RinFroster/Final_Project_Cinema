import React from 'react'
import TheaterItem from './TheaterItem'

export default function Theater() {
    return (
      <section className="theater">
          <div className="theater__container">
            <div className="theater__box">
              <div className="nav flex-column nav-pills col-lg-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="BHD" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <img src={require("./../../Asset/img/theater/BHD.png").default} alt="" className="theater__icon"/>
                  </a>
                  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/f32670fd0eb083c9c4c804f0f3a252ed.png").default} alt="" className="theater__icon"/>
                  </a>
                  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/DDC.png").default} alt="" className="theater__icon"/>
                  </a>
                  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/Mage.png").default} alt="" className="theater__icon"/>
                  </a>
                  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#d-cine" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/dcine-ben-thanh.png").default} alt="" className="theater__icon"/>
                  </a>
                  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#lotte" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img src={require("./../../Asset/img/theater/lotte.png").default} alt="" className="theater__icon"/>
                  </a>
              </div>
              <div className=" col-md-10 tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="BHD">
                    <TheaterItem />
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <TheaterItem />
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <TheaterItem />
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <TheaterItem />
                  </div>
                  <div className="tab-pane fade" id="d-cine" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <TheaterItem />
                  </div>
                  <div className="tab-pane fade" id="lotte" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <TheaterItem />
                  </div>
                </div>
            </div>
          </div>
      </section>
    )
}
