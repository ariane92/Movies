import { combineReducers } from "redux";
import {moviesList, selectedMovie} from './movie/reducer'
import loader from './loading/reducer'

export default combineReducers({
  moviesList,
  selectedMovie,
  loader
})
