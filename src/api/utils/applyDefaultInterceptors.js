import Config from 'react-native-config';

const CLIENT_AUTH = 'Authorization';

// const UNAUTHORIZED = 401;

const defaultRequestInterceptors = () => [
  async request => {
    try {
      request.headers = {
        ...request.headers,
        [CLIENT_AUTH]: `Bearer ${Config.CLIENT_API_KEY}`,
      };
    } catch (error) {
      console.log('Failed to load session headers', error); // eslint-disable-line
    }
    return request;
  },
];

export default (store, apiService) => {
  defaultRequestInterceptors(store).forEach(interceptor =>
    apiService.requestInterceptors.use(interceptor),
  );
};
