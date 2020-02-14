import { createThunk } from '@rootstrap/redux-tools';
import movieService from 'services/movieService';
import parseError from 'utils/parseError';

export const discoverMovies = createThunk('DISCOVER_MOVIES', async page => {
  try {
    const { data } = await movieService.discoverMovies(page);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const getMovie = createThunk('GET_MOVIE', async id => {
  try {
    const { data } = await movieService.getMovie(id);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: discoverMoviesSuccess } = discoverMovies;
export const { success: getMovieSuccess, reset: getMovieReset } = getMovie;
