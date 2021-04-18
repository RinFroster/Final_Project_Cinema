import * as ActionType from "./constant";
import Axios from "axios";

export const  actListTheaterApi = (id) =>{
    return async (dispatch)=>{
        dispatch(actListTheaterRequest);
        await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
            method:"GET",
        })
        .then((res)=>{
            dispatch(actListTheaterSuccess(res.data));
        })
        .catch((err)=>{
            dispatch(actListTheaterFailed(err));
        })
    }
}

export const actShowTimeApi = (ma) =>{
    return async (dispatch) =>{
        try { 
        dispatch(actListTheaterRequest);
        let { data, status, ...res } = await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${ma}&maNhom=GP01`,
            method:'GET',
        })
    }
    catch(err){

    }
        // .then(res=>{
        //     dispatch(actListTheaterSuccess(res.data))
        // })
        // .catch(err=>{
        //     dispatch(actListTheaterFailed(err))
        // })
    }
}




const actListTheaterRequest = () =>{
    return {
        type: ActionType.LIST_THEATER_SUCCESS,
    }
}
const actListTheaterSuccess = (data) =>{
    return {
        type: ActionType.LIST_THEATER_SUCCESS,
        payload: data,
    }
}
const actListTheaterFailed = (err) =>{
    return {
        type: ActionType.LIST_THEATER_FAILED,
        payload: err,
    }
}