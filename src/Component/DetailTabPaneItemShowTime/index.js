import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { actShowTimeApi } from '../ShowTimes/modules/action';

function DetailTabPaneItemShowTime(props) {
    useEffect(() => {
        const { maCumRap, danhSachRap, nameCinema, maPhim } = props;
        props.fetchListDetailShowTime(nameCinema);
        return () => {
        }
    }, [])

    const rennderBtn = () => {

    }

    const renderListDetailShowTime = () => {
        const { data } = props;
        return (data && data.map((item) => {
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
                                       <div className="theater__sessions">
                                        <a className="sessions__btn">
                                            <span className="sessions__span">{itemP.ngayChieuGioChieu.slice(11,16)}</span>~ 16:45
                                        </a>
                                    </div>      
                                )
                            }))
                    }))
                }

            }))


        }))
    }
    return (
        <>
            <div className="theaterItem__header">2D Digital</div>
            <div className="theater__sessionsContainer">
                {renderListDetailShowTime()}
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.ShowTimeReducer.data,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListDetailShowTime: (ma) => {
            dispatch(actShowTimeApi(ma, "&maNhom=GP1"))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTabPaneItemShowTime)
