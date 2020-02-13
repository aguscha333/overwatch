import { createReducer } from '@rootstrap/redux-tools';

import { discoverSeriesSuccess, getSeriesSuccess } from 'actions/tvActions';

import { detailSuccess, listSuccess } from './common';

const initialState = {
  page: 1,
  totalResults: null,
  totalPages: null,
  list: [],
  detail: {},
};

export default createReducer(initialState, {
  [discoverSeriesSuccess]: listSuccess,
  [getSeriesSuccess]: detailSuccess,
});
