import { createThunk } from '@rootstrap/redux-tools';
import discoverService from 'services/discoverService';
import parseError from 'utils/parseError';

export const discoverMovies = createThunk('DISCOVER_MOVIES', async () => {
  try {
    const { data } = await discoverService.discoverMovies();
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: discoverMoviesSuccess } = discoverMovies;
