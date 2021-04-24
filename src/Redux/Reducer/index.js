import { combineReducers } from "redux";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";
import listMovieReducerNS from "./../../Component/MovieItem/modules/reducer";
import listMovieCarouselReducer from "./../../Component/Carousel/modules/reducer";
import detailMovieReducer from "./../../Container/HomeTemplate/Movie_Detail_Page/modules/reducer";
import LoaderReducer from "./../../Component/Loader/modules/LoaderReducer"
import ListCinemaReducer from "./../../Component/Theater/modules/ListCinemaReducer"
import ListTheaterReducer from "./../../Component/TheaterItem/modules/ListTheaterReducer";
import ShowTimeReducer from "./../../Component/ShowTimes/modules/ShowTimeReducer";

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
    listMovieCarouselReducer,
    detailMovieReducer,
    LoaderReducer,
    ListCinemaReducer,
    ListTheaterReducer,
    ShowTimeReducer,
});

export default rootReducer;