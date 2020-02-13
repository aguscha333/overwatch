import React from 'react';
import { number, string } from 'prop-types';
import { Image, View } from 'react-native';

import imagePathGen from 'utils/imagePathGen';
import { SCREEN_WIDTH } from 'constants/dimensions';
import styles from './styles';

const GalleryItem = ({ posterPath, numColumns }) => {
  const width = SCREEN_WIDTH / numColumns;
  const height = (width * 17) / 11;
  return (
    <View style={[styles.itemContainer, { width, height }]}>
      <Image style={styles.item} source={imagePathGen(posterPath)} />
    </View>
  );
};

GalleryItem.propTypes = {
  posterPath: string.isRequired,
  numColumns: number.isRequired,
};

export default GalleryItem;
