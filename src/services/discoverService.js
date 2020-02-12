import api from 'api';

class UserService {
  discoverMovies() {
    return api.get('/discover/movie');
  }

  discoverTv() {
    return api.get('/discover/tv');
  }
}

export default new UserService();
