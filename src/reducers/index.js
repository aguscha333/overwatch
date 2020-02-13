import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';
import movie from './movieReducer';
import tv from './tvReducer';

const AppReducer = combineReducers({
  movie,
  tv,
  actionStatus: statusReducer,
});

export default AppReducer;
