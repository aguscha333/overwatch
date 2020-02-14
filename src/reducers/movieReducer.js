import { createReducer } from '@rootstrap/redux-tools';

import { discoverMoviesSuccess, getMovieSuccess, getMovieReset } from 'actions/movieActions';
import { detailSuccess, detailReset, listSuccess } from './common';

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
  [getMovieReset]: detailReset,
});
