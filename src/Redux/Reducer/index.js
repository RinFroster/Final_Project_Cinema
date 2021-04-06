import { combineReducers } from "redux";
import listMovieReducerNS from "./../../Component/MovieItem/modules/reducer";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
});

export default rootReducer;