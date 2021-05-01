import * as ActionType from "./constant";
import Axios from "axios";

export const actCheckoutMovie = (id) => {
    return(dispatch) => {
        dispatch(actCheckoutMovieRequest());
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method:"GET",
        })
        .then((result) => {
            dispatch(actCheckoutMovieSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actCheckoutMovieFailed(err))
        })
    }
}

const actCheckoutMovieRequest = () => {
    return{
        type: ActionType.FETCH_CHECKOUT_REQUEST,
    } 
}

const actCheckoutMovieSuccess = (data) => {
    return{
        type: ActionType.FETCH_CHECKOUT_SUCCESS,
        payload: data,
    } 
}

const actCheckoutMovieFailed = (err) => {
    return{
        type: ActionType.FETCH_CHECKOUT_FAILED,
        payload: err,
    } 
}