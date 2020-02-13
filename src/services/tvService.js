import api from 'api';
import { applyQueryParams } from 'utils/helpers';

class TvService {
  discoverSeries(page) {
    return api.get(applyQueryParams('/discover/tv', { page }));
  }

  getSeries(id) {
    return api.get(applyQueryParams(`/tv/${id}`));
  }
}

export default new TvService();
