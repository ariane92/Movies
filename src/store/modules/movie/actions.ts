import { IMoviesList, IMovieState, IIMDBState } from "./types";

export function listOfMovies(movies: IMoviesList) {
  return {
    type: 'LIST_OF_MOVIES',
    payload: {
      movies
    }
  }
}

export function selectedMovies(imdbID: String) {
  return {
    type: 'SELECTED_MOVIE',
    payload: {
      imdbID
    }
  }
}


