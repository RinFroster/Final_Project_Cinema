import { combineReducers } from "redux";
import listMovieReducer from "./../../Component/MovieList/modules/reducer";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";
import listMovieCarouselReducer from "./../../Component/Carousel/modules/reducer";
import detailMovieReducer from "./../../Container/HomeTemplate/Movie_Detail_Page/modules/reducer";
import LoaderReducer from "./../../Component/Loader/modules/LoaderReducer"
import ListCinemaReducer from "./../../Component/Theater/modules/ListCinemaReducer"
import ListTheaterReducer from "./../../Component/TheaterItem/modules/ListTheaterReducer"

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
    listMovieCarouselReducer,
    detailMovieReducer,
    LoaderReducer,
    ListCinemaReducer,
    ListTheaterReducer,
});

export default rootReducer;