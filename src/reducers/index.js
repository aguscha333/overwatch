import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';
import discover from './discoverReducer';

const AppReducer = combineReducers({
  discover,
  actionStatus: statusReducer,
});

export default AppReducer;
