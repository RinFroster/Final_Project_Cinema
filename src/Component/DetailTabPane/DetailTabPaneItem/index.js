import React,{useState} from 'react';
import Collapse from "react-bootstrap/Collapse";

export default function DetailTabPaneItem() {
    const [openDetailCollapse, setOpenDetailCollapse] = useState(false);
    return (
        <div className="tabPaneItem">
            <div className="tabPaneItem__date__container" role="tablist" aria-orientation="vertical">
                <div className="tabPaneItem__dateOfWeek nav nav-pills">
                    <a className="nav-link active tabPaneItem__date" id="v-pills-t2-tab" data-toggle="pill" href="#v-pills-t2" role="tab" aria-controls="v-pills-t2" aria-selected="true">
                        <p className="date__firstRow">Thứ 2</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-t3-tab" data-toggle="pill" href="#v-pills-t3" role="tab" aria-controls="v-pills-t3" aria-selected="false">
                        <p className="date__firstRow">Thứ 3</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-t4-tab" data-toggle="pill" href="#v-pills-t4" role="tab" aria-controls="v-pills-t4" aria-selected="false">
                        <p className="date__firstRow">Thứ 4</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-t5-tab" data-toggle="pill" href="#v-pills-t5" role="tab" aria-controls="v-pills-t5" aria-selected="false">
                        <p className="date__firstRow">Thứ 5</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-t6-tab" data-toggle="pill" href="#v-pills-t6" role="tab" aria-controls="v-pills-t6" aria-selected="false">
                        <p className="date__firstRow">Thứ 6</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-t7-tab" data-toggle="pill" href="#v-pills-t7" role="tab" aria-controls="v-pills-t7" aria-selected="false">
                        <p className="date__firstRow">Thứ 7</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date" id="v-pills-cn-tab" data-toggle="pill" href="#v-pills-cn" role="tab" aria-controls="v-pills-cn" aria-selected="false">
                        <p className="date__firstRow">CN</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date">
                        <p className="date__firstRow">Thứ 2</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date">
                        <p className="date__firstRow">Thứ 2</p>
                        <p className="date__secondRow">1</p>
                    </a>
                    <a className="nav-link tabPaneItem__date">
                        <p className="date__firstRow">Thứ 2</p>
                        <p className="date__secondRow">1</p>
                    </a>
                </div>
            </div>
            <div className="tabPaneItem__showTime__container tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-t2" role="tabpanel" aria-labelledby="v-pills-t2-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-t3" role="tabpanel" aria-labelledby="v-pills-t3-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Cresent Mall
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-t4" role="tabpanel" aria-labelledby="v-pills-t4-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Phạm Hùng
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-t5" role="tabpanel" aria-labelledby="v-pills-t5-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Vincom Thảo Điền
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                            <div className="tabPaneItem__movieSpan">
                                <span className="tabPaneItem__cinema">
                                    <span className="tabPaneItem__colorCinema">BHD Star</span>- Bitexco
                                </span>
                                <span className="tabPaneItem__infoCinema">
                                    {" "}
                                    L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                                </span>
                                <span className="tabPaneItem__infoCinema__location">
                                    <a>[Bản Đồ]</a>
                                </span>
                            </div>
                        </div>
                        <Collapse in={!openDetailCollapse}>
                            <div className="tabPaneItem__2D" id="collapse-text1">
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
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
