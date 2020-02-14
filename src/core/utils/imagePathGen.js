import Config from 'react-native-config';

export const IMAGE_SIZE = {
  ORIGINAL: 'original',
  W500: 'w500',
  W780: 'w780',
};

const imageSourceBuilder = (path, size = IMAGE_SIZE.W500) => ({
  uri: `${Config.IMAGE_URL}/${size}${path}`,
});

export default imageSourceBuilder;
