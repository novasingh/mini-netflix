import MOVIES_TYPES from "../types/movieTypes";

export const resetState = () => ({
  type: MOVIES_TYPES.RESET_STATE,
});

export const getAllMoviesBegain = () => ({
  type: MOVIES_TYPES.GET_ALL_MOVIES_BEGIN,
});

export const getAllMoviesSuccess = (data) => ({
  type: MOVIES_TYPES.GET_ALL_MOVIES_SUCCESS,
  payload: data,
});

export const getAllMoviesFailure = (error) => ({
  type: MOVIES_TYPES.GET_ALL_MOVIES_FAILURE,
  payload: { error },
});

export const getMovieByIdBegain = () => ({
  type: MOVIES_TYPES.GET_MOVIES_BY_ID_BEGIN,
});

export const getMovieByIdSuccess = (data) => ({
  type: MOVIES_TYPES.GET_MOVIES_BY_ID_SUCCESS,
  payload: data,
});

export const getMovieByIdFailure = (error) => ({
  type: MOVIES_TYPES.GET_MOVIES_BY_ID_FAILURE,
  payload: { error },
});
