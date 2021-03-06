export const listSuccess = (state, { payload: { page, totalPages, totalResults, results } }) => {
  state.page = page;
  state.totalPages = totalPages;
  state.totalResults = totalResults;
  state.list = state.list.concat(results);
};

export const detailSuccess = (state, { payload }) => {
  state.detail = payload;
};

export const detailReset = state => {
  state.detail = {};
};

export const creditsSuccess = (state, { payload }) => {
  state.credits = payload;
};

export const creditsReset = state => {
  state.credits = {};
};

export const similarSuccess = (state, { payload }) => {
  state.similar = payload;
};

export const similarReset = state => {
  state.similar = {};
};
