export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const ENDPOINTS = {
  GET_MOVIES: "?apikey=b6eb46f6&s=art&type=movie&page=1&r=json",
  GET_MOVIE_BY_ID : (id) => `?apikey=b6eb46f6&i=${id}`
};
