import { combineReducers } from "redux";
import listMovieReducerNS from "./../../Component/MovieItem/modules/reducer";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";
import listMovieCarouselReducer from "./../../Component/Carousel/modules/reducer";
import detailMovieReducer from "./../../Container/HomeTemplate/Movie_Detail_Page/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
    listMovieCarouselReducer,
    detailMovieReducer,
});

export default rootReducer;