import * as ActionType from "./constant";
import Axios from "axios";

export const actFetchAdminMovie = () => {
    return(dispatch) => {
        dispatch(actFetchAdminMovieRequest());
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP11&soTrang=1&soPhanTuTrenTrang=10",
            method:"GET",
        })
        .then((result) => {
            dispatch(actFetchAdminMovieSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actFetchAdminMovieFailed(err))
        })
    }
}

const actFetchAdminMovieRequest = () => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_REQUEST,
    } 
}

const actFetchAdminMovieSuccess = (data) => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_SUCCESS,
        payload: data,
    } 
}

const actFetchAdminMovieFailed = (err) => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_FAILED,
        payload: err,
    } 
}