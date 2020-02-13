import api from 'api';
import { applyQueryParams } from 'utils/helpers';

class MovieService {
  discoverMovies(page) {
    return api.get(applyQueryParams('/discover/movie', { page }));
  }
}

export default new MovieService();
