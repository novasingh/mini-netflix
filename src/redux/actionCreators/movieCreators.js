import {
  getAllMoviesBegain,
  getAllMoviesSuccess,
  getAllMoviesFailure,
  getMovieByIdBegain,
  getMovieByIdSuccess,
  getMovieByIdFailure,
} from "../actions/movieActions";
import { resetSnack } from "../actions/alertActions";

import ENDPOINTS from "../../services/requests";
import { BASE_URL } from "../../services/constants";

export function performAllMovies() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getAllMoviesBegain());
    try {
      const result = await fetch(BASE_URL+ENDPOINTS.GET_MOVIES);
      const jsonData = await result.json();
      dispatch(getAllMoviesSuccess(jsonData));
      return true;
    } catch (error) {
      dispatch(getAllMoviesFailure());
      return false;
    }
  };
}

export function performGetMovieById(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getMovieByIdBegain());
    try {
      const result = await fetch(BASE_URL+ENDPOINTS.GET_MOVIE_BY_ID(id));
      const jsonData = await result.json();
      dispatch(getMovieByIdSuccess(jsonData));
      return true;
    } catch (error) {
      dispatch(getMovieByIdFailure());
      return false;
    }
  };
}

