import { Reducer } from "redux";
import { IMovieState } from "./types";

const INITIAL_STATE: IMovieState = {
  title: "",
  poster: "",
  ratings: 0,
  average: 0
}
const movie: Reducer<IMovieState> = () => {
  return INITIAL_STATE;
}

export default movie;
