export const listSuccess = (state, { payload: { page, totalPages, totalResults, results } }) => {
  state.page = page;
  state.totalPages = totalPages;
  state.totalResults = totalResults;
  state.list = state.list.concat(results);
};

export const detailSuccess = (state, { payload }) => {
  state.detail = payload;
};
