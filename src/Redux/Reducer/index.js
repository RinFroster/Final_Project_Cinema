import { combineReducers } from "redux";
import listMovieReducer from "./../../Component/MovieList/modules/reducer";
import LoaderReducer from "./../../Component/Loader/modules/LoaderReducer"
import ListCinemaReducer from "./../../Component/Theater/modules/ListCinemaReducer"
import ListTheaterReducer from "./../../Component/TheaterItem/modules/ListTheaterReducer"

const rootReducer = combineReducers({
    listMovieReducer,
    LoaderReducer,
    ListCinemaReducer,
    ListTheaterReducer,
});

export default rootReducer;