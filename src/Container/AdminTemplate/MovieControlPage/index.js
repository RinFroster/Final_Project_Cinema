import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {actFetchAdminMovie} from "./modules/action";
import { connect } from "react-redux";
// import Pagination from "react-js-pagination";
// import WithModal from "./with-modal";

function MovieControlPage(props) {
    // const [active,setActive] = useState({activePage:1})
    // const handlePageChange = (pageNumber) => {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    // }
    useEffect(() => {
        props.fetchAdminMovieList()
    }, [])
    const {data} = props;
    console.log(data&&data.currentPage);
    // let FormModal = WithModal(NhanVien);
    const renderAdminMovie = () => {
        return(data&&data.items.map((item) => {
            return(
                <div className="row movieShowControl__item__container p-0 col-lg-12" key={item.maPhim}>
                    <div className="col-lg-1 p-0 movieShowControl__item">               
                        <div className="movieShowControl__content movieId">{item.maPhim}</div>
                    </div>
                    <div className="col-lg-3 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieName">{item.tenPhim}</div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content moviePic">
                            <img src={item.hinhAnh}/>
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieDes">
                        {item.moTa}
                        </div>
                    </div>
                    <div className="col-lg-1 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieGroup">{item.maNhom}</div>
                    </div>
                    <div className="col-lg-2 p-0 movieShowControl__item">                    
                        <div className="movieShowControl__content movieDayPremire">{item.ngayKhoiChieu.slice(0,10)}</div>
                    </div>
                    <div className="col-lg-3 p-0 movieShowControl__item">
                        <div className="movieShowControl__content movieServices">
                            <button type="button" className="btn btn-primary adminBtn createShow" data-toggle="modal" data-target="#myModal">Tạo Lịch Chiếu</button>
                            <button type="button" className="btn btn-success adminBtn updateShow" data-toggle="modal" data-target="#myModal">Sửa</button>
                            <button type="button" className="btn btn-danger adminBtn deleteShow" data-toggle="modal" data-target="#myModal">Xoá</button>
                        </div>
                    </div>
                </div>
            )
        }))
    }
    return (
        <div className="movieControl">
            <div className="admin__services">Danh Sách Phim</div>
            <div className="movieShowControl__container p-0 col-lg-12">
                <div className="row movieShowControl__title__container p-0 col-lg-12">
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mã Phim</div>
                    </div>
                    <div className="col-lg-3 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Tên Phim</div>
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Hình Ảnh</div>                        
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mô Tả</div>                        
                    </div>
                    <div className="col-lg-1 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Mã Nhóm</div>                        
                    </div>
                    <div className="col-lg-2 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">Ngày Khởi Chiếu</div>                        
                    </div>
                    <div className="col-lg-3 movieShowControl__title">
                        <div className="movieShowControl__title__content text-primary">
                            <FontAwesomeIcon icon={faCog} className="movieShowControl__titleIcon"/>
                        </div>                        
                    </div>
                </div>
                {renderAdminMovie()}
            </div>
            {/* <Pagination activePage={active} itemsCountPerPage ={10} totalItemsCount={24} pageRangeDisplayed ={5} onChange={handlePageChange}/> */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data: state.listMovieAdminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdminMovieList: () => {
        dispatch(actFetchAdminMovie());
      },
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(MovieControlPage);
