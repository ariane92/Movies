import {createStore, applyMiddleware} from 'redux'
import { IMoviesList, IMovieState } from './modules/movie/types';
import rootReducer from './modules/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

export interface IState {
  movies: IMoviesList,
  selectedMovie: String,
  loader: Boolean

}

const store = createStore(rootReducer, composeWithDevTools())
export default store;
