export interface IMovieState {
  Title: string;
  Poster: string;
  Year: number;
  imdbID: string,
  Type: string,
}

export interface IMovieInfo {
  Title: string;
  Poster: string;
  Year: number;
  Ratings: string;
  imdbID: string,
}

export interface IMoviesList {
  movies: IMovieState[]
}

