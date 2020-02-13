import { createReducer } from '@rootstrap/redux-tools';

import { discoverMoviesSuccess, getMovieSuccess } from 'actions/movieActions';
import { detailSuccess, listSuccess } from './common';

const initialState = {
  page: 1,
  totalResults: null,
  totalPages: null,
  list: [],
  detail: {},
};

export default createReducer(initialState, {
  [discoverMoviesSuccess]: listSuccess,
  [getMovieSuccess]: detailSuccess,
});