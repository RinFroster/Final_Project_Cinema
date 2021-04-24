import React,{useState, useEffect} from 'react';
import Collapse from "react-bootstrap/Collapse";
import { connect } from "react-redux"
import DetailTabPaneItemShowTime from '../DetailTabPaneItemShowTime';
import { actListTheaterApi } from '../TheaterItem/modules/action';

function DetailTabPaneItem(props) {
    const [showTime, setShowTime] = useState({indexShow: 0})

    useEffect(() => {
        const id = props.cinameDestop;
        props.fetchListDetailItem(id);
        return () => {
        }
    }, [])

    const { data ,maPhim } = props;
    const renderTheaterItem = ()=> {
        return (data && data.map((item,index)=>{
            return (    
                <div className="tabPaneItem__movie" key={item.maCumRap}  id={ "cinema" + data.maCumRap} href={"#Cinema" + item.maCumRap}   aria-controls = {item.maCumRap}  onClick ={()=>setShowTime({indexShow: index})} >
                <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
                <div className="tabPaneItem__movieSpan" onClick={() =>setOpenDetailCollapse(!openDetailCollapse)} aria-expanded={!openDetailCollapse}>
                    <span className="tabPaneItem__cinema">
                        <span className="tabPaneItem__colorCinema">{item.tenCumRap}</span>
                    </span>
                    <span className="tabPaneItem__infoCinema">
                        {" "}
                        {item.diaChi}
                    </span>
                    <span className="tabPaneItem__infoCinema__location">
                        <a>[Bản Đồ]</a>
                    </span>
                </div>
            </div>
            )
        }))
        
    }
    const renderShowTime = () =>{ 
        return (
            data && (
            <div className="tabPaneItem__2D" id="collapse-text1"  id= { "Cinema" + data[showTime.indexShow].maCumRap}  aria-labelledby = {"cinema" + data[showTime.indexShow].maCumRap}>
                  <DetailTabPaneItemShowTime 
                  key ={data[showTime.indexShow].maCumRap} maCumRap = {data[showTime.indexShow].maCumRap}
                    nameCinema = {props.cinameDestop} maPhim = {props.maPhim} danhSachRap = {data[showTime.indexShow].danhSachRap}
                  />  
            </div>
    
            )
        )
    }
    const [openDetailCollapse, setOpenDetailCollapse] = useState(false);
    return (
        <div className="tabPaneItem__container">
            <div className="tabPaneItem__showTime__container tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-t2" role="tabpanel" aria-labelledby="v-pills-t2-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        {renderTheaterItem()}
                        <Collapse in={!openDetailCollapse}>
                           {renderShowTime()}
                        </Collapse>
                  </div>
                  </div>
                <div className="tab-pane fade" id="v-pills-t3" role="tabpanel" aria-labelledby="v-pills-t3-tab">
                    <div className="col-lg-12 tabPaneItem__showTime">
                        <div className="tabPaneItem__movie" onClick={() => setOpenDetailCollapse(!openDetailCollapse)} aria-controls="collapse-text1" aria-expanded={!openDetailCollapse}>
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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
                            <img src={require("./../../Asset/img/theater/bhd-star-pham-hung-16105959230642.png").default} alt=""/>
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

const mapStateToProps = (state) => {
    return {
        data: state.ListTheaterReducer.data,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchListDetailItem: (id)=>{
            dispatch(actListTheaterApi(id));
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailTabPaneItem)