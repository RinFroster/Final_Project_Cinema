import React,{useState} from 'react';
import Collapse from "react-bootstrap/Collapse";

export default function DetailTabPaneItemMobile() {
    const [openDetailCollapse, setOpenDetailCollapse] = useState(false);
    return (
        <div className="tabPaneItem__showTime__containerMobile tab-content" id="v-pills-tabContentMobile">
                <div className="tab-pane fade show active" id="v-pills-t2Mobile" role="tabpanel" aria-labelledby="v-pills-t2-tabMobile">
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade show" id="v-pills-t3Mobile" role="tabpanel" aria-labelledby="v-pills-t3-tabMobile">
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Cresent Mall
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade show" id="v-pills-t4Mobile" role="tabpanel" aria-labelledby="v-pills-t4-tabMobile">
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Phạm Hùng
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade show" id="v-pills-t5Mobile" role="tabpanel" aria-labelledby="v-pills-t5-tabMobile">
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Vincom Quang Trung
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTimeMobile">
                        <div className="tabPaneItem__movieMobile" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpanMobile">
                                <span className="tabPaneItem__cinemaMobile">
                                    <span className="tabPaneItem__colorCinemaMobile">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinemaMobile">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__locationMobile">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2DMobile" id="collapse-text1">
                                <div className="theaterItem__headerMobile">2D Digital</div>
                                <div className="theater__sessionsContainerMobile">
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                    <div className="theater__sessionsMobile">
                                        <a className="sessions__btnMobile">
                                            <span className="sessions__spanMobile">15:05</span>~ 16:45
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
        </div>
    )
}
