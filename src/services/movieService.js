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
}

export default new MovieService();
