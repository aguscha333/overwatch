import { createReducer } from '@rootstrap/redux-tools';
import { discoverMoviesSuccess } from 'actions/discoverActions';

const initialState = {
  page: 1,
  totalResults: null,
  totalPages: null,
  results: [],
};

const handleDiscoverMoviesSuccess = (_, { payload }) => {
  return payload;
};

export default createReducer(initialState, {
  [discoverMoviesSuccess]: handleDiscoverMoviesSuccess,
});
