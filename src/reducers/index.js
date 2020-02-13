import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';
import movie from './movieReducer';

const AppReducer = combineReducers({
  movie,
  actionStatus: statusReducer,
});

export default AppReducer;
