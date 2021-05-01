import { data } from 'jquery';
import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { actShowTimeApi } from '../ShowTimes/modules/action';
import {Link } from "react-router-dom"

function DetailTabPaneItemShowTimeMobile(props) {

    useEffect(() => {
        const { maCumRap, maPhim, nameCinema ,danhSachRap } = props;
        console.log(maPhim)
        props.fetchShowTimeMobile(nameCinema);
        return () => {
        }
    }, [])

    const { data } = props;

    const renderListDetailShowTimeMobile = () =>{
        return data && data.map((item, index)=>{
            return (item.lstCumRap.map((itemCR) => {
                if (itemCR.maCumRap === props.maCumRap) {
                    // console.log(itemCR)
                    return (itemCR.danhSachPhim.map((itemDS) => {
                        // console.log(itemDS)
                        if (itemDS.maPhim === props.maPhim)
                            console.log(itemDS)
                            return (itemDS.lstLichChieuTheoPhim.map((itemP) => {
                                console.log(itemP)
                                return (
                                    <div className="theater__sessionsMobile" key={itemP.maLichChieu}>
                                    <Link to={`/checkout/${itemDS.maPhim}`} className="sessions__btnMobile">
                                        <span className="sessions__spanMobile">{itemP.ngayChieuGioChieu.slice(11, 16)}</span>~ 16:45
                                    </Link>
                                </div>   
                                )
                            }))
                        
                    }))
                }

            }))
        })
    }

    return (
        <>
            <div className="theaterItem__headerMobile">2D Digital</div>
            <div className="theater__sessionsContainerMobile">
                {renderListDetailShowTimeMobile()}
                {/* <div className="theater__sessionsMobile">
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
                </div> */}
            </div>
        </>
    )
}
const mapStateToProps = (state) =>{
    return {
        data: state.ShowTimeReducer.data,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        fetchShowTimeMobile : (ma)=>{
            dispatch(actShowTimeApi(ma, "&maNhom=GP1"))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailTabPaneItemShowTimeMobile)