import * as ActionType from "./constant";
import Axios from "axios";

const actListMovieRequest = () => {
    return {
      type: ActionType.LIST_MOVIE_REQUEST,
    };
  };
  
  const actListMovieSuccess = (data) => {
    return {
      type: ActionType.LIST_MOVIE_SUCCESS,
      payload: data,
    };
  };
  
  const actListMovieFailed = (err) => {
    return {
      type: ActionType.LIST_MOVIE_FAILED,
      payload: err,
    };
  };