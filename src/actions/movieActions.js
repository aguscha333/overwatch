import { createThunk } from '@rootstrap/redux-tools';
import movieService from 'services/movieService';
import parseError from 'utils/parseError';

export const DISCOVER_MOVIES = 'DISCOVER_MOVIES';
export const discoverMovies = createThunk(DISCOVER_MOVIES, async page => {
  try {
    const { data } = await movieService.discoverMovies(page);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const GET_MOVIE = 'GET_MOVIE';
export const getMovie = createThunk('GET_MOVIE', async id => {
  try {
    const { data } = await movieService.getMovie(id);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const GET_MOVIE_CREDITS = 'GET_MOVIE_CREDITS';
export const getMovieCredits = createThunk('GET_MOVIE_CREDITS', async id => {
  try {
    const { data } = await movieService.getMovieCredits(id);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: discoverMoviesSuccess } = discoverMovies;
export const { success: getMovieSuccess, reset: getMovieReset } = getMovie;
export const { success: getMovieCreditsSuccess, reset: getMovieCreditsReset } = getMovieCredits;
