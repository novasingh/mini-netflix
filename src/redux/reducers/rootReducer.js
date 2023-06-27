import { combineReducers } from 'redux';

import alertReducer from './alertReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  movie: movieReducer,
  alert: alertReducer,
});
