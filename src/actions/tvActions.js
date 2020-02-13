import { createThunk } from '@rootstrap/redux-tools';
import tvService from 'services/tvService';
import parseError from 'utils/parseError';

export const discoverSeries = createThunk('DISCOVER_SERIES', async page => {
  try {
    const { data } = await tvService.discoverSeries(page);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const getSeries = createThunk('GET_SERIES', async page => {
  try {
    const { data } = await tvService.getSeries(page);
    return data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: discoverSeriesSuccess } = discoverSeries;
export const { success: getSeriesSuccess } = getSeries;
