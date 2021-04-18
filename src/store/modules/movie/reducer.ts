import { Reducer } from "redux";
import { IMoviesList, IMovieState, IIMDBState } from "./types";

const INITIAL_STATE: IMoviesList = {
  movies: []
}

const teste: IMovieState = {
  Title: "",
  Poster: "",
  Year: 0,
  Type: "",
  imdbID: "",
}

const INITIAL_STATE_IMDB = ""

export const moviesList: Reducer<IMoviesList> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LIST_OF_MOVIES': {
      const { movies } = action.payload

      return {
        ...state,
        movies: [
          ...state.movies,
          {
            movies
          }
        ]
      }

    }
    default: {
      return state;
    }
  }
}

export const selectedMovie: Reducer<String> = (state = INITIAL_STATE_IMDB, action) => {
  switch(action.type){
    case 'SELECTED_MOVIE': {
      const { imdbID } = action.payload

      return {
        ...state, imdbID: imdbID
      }

    }
    default: {
      return state;
    }
  }
}


