import { combineReducers } from "redux";
import listMovieReducerNS from "./../../Component/MovieItem/modules/reducer";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";
import listMovieCarouselReducer from "./../../Component/Carousel/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
    listMovieCarouselReducer,
});

export default rootReducer;