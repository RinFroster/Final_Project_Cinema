import { combineReducers } from "redux";
import listMovieReducer from "./../../Component/MovieList/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
});

export default rootReducer;