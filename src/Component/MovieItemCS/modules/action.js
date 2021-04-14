import * as ActionType from "./constant";
import Axios from "axios";

export const actListMovieApiComingSoon = () => {
  return (dispatch) => {
    dispatch(actListMovieCSRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieCSSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieCSFailed(err));
      });
  };
};

const actListMovieCSRequest = () => {
  return {
    type: ActionType.LIST_MOVIECS_REQUEST,
  };
};

const actListMovieCSSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIECS_SUCCESS,
    payload: data,
  };
};

const actListMovieCSFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIECS_FAILED,
    payload: err,
  };
};
