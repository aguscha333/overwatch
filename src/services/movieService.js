import api from 'api';
import { applyQueryParams } from 'utils/helpers';

class MovieService {
  discoverMovies(page) {
    return api.get(applyQueryParams('/discover/movie', { page }));
  }

  getMovie(id) {
    return api.get(applyQueryParams(`/movie/${id}`));
  }

  getMovieCredits(id) {
    return api.get(applyQueryParams(`/movie/${id}/credits`));
  }

  getSimilarMovies(id) {
    return api.get(applyQueryParams(`/movie/${id}/similar`));
  }
}

export default new MovieService();
