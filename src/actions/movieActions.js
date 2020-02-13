import { createThunk } from '@rootstrap/redux-tools';
import discoverService from 'services/movieService';
import parseError from 'utils/parseError';

export const discoverMovies = createThunk('DISCOVER_MOVIES', async page => {
  try {
    const { data } = await discoverService.discoverMovies(page);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: discoverMoviesSuccess } = discoverMovies;
