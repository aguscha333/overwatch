import { createReducer } from '@rootstrap/redux-tools';

import {
  discoverMoviesSuccess,
  getMovieSuccess,
  getMovieReset,
  getMovieCreditsSuccess,
  getMovieCreditsReset,
} from 'actions/movieActions';
import { detailSuccess, detailReset, creditsSuccess, creditsReset, listSuccess } from './common';

const initialState = {
  page: 1,
  totalResults: null,
  totalPages: null,
  list: [],
  detail: {},
  credits: {},
};

export default createReducer(initialState, {
  [discoverMoviesSuccess]: listSuccess,
  [getMovieSuccess]: detailSuccess,
  [getMovieReset]: detailReset,
  [getMovieCreditsSuccess]: creditsSuccess,
  [getMovieCreditsReset]: creditsReset,
});
