import MOVIES_TYPES from "../types/movieTypes";

const initialState = {
  submitting: false,
  error: null,
  movieList: [],
  movieData: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_TYPES.RESET_STATE:
      return {
        ...state,
        submitting: false,
        error: null,
      };

    case MOVIES_TYPES.GET_ALL_MOVIES_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
      };

    case MOVIES_TYPES.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
        submitting: false,
        error: null,
      };

    case MOVIES_TYPES.GET_ALL_MOVIES_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case MOVIES_TYPES.GET_MOVIES_BY_ID_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
      };

    case MOVIES_TYPES.GET_MOVIES_BY_ID_SUCCESS:
      return {
        ...state,
        movieData: action.payload,
        submitting: false,
        error: null,
      };

    case MOVIES_TYPES.GET_MOVIES_BY_ID_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}
