import * as ActionType from "./constant";
import Axios from "axios";

export const actFetchAdminUser = (numb) => {
    return(dispatch) => {
        dispatch(actFetchAdminUserRequest());
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${numb}&soPhanTuTrenTrang=21`,
            method:"GET",
        })
        .then((result) => {
            dispatch(actFetchAdminUserSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actFetchAdminUserFailed(err))
        })
    }
}

const actFetchAdminUserRequest = () => {
    return{
        type: ActionType.FETCH_USER_REQUEST,
    } 
}

const actFetchAdminUserSuccess = (data) => {
    return{
        type: ActionType.FETCH_USER_SUCCESS,
        payload: data,
    } 
}

const actFetchAdminUserFailed = (err) => {
    return{
        type: ActionType.FETCH_USER_FAILED,
        payload: err,
    } 
}