import { createReducer } from '@rootstrap/redux-tools';
import { discoverMoviesSuccess } from 'actions/movieActions';

const initialState = {
  page: 1,
  totalResults: null,
  totalPages: null,
  list: [],
  detail: {},
};

const handleDiscoverMoviesSuccess = (
  state,
  { payload: { page, totalPages, totalResults, results } },
) => {
  state.page = page;
  state.totalPages = totalPages;
  state.totalResults = totalResults;
  state.list = state.list.concat(results);
};

export default createReducer(initialState, {
  [discoverMoviesSuccess]: handleDiscoverMoviesSuccess,
});
