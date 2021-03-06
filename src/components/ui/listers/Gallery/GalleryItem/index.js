import React from 'react';
import { number, string, func } from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';

import imagePathGen from 'utils/imagePathGen';
import { SCREEN_WIDTH } from 'constants/dimensions';
import styles from './styles';

const GalleryItem = ({ posterPath, numColumns, onPress }) => {
  const width = SCREEN_WIDTH / numColumns;
  const height = (width * 17) / 11;
  return (
    <TouchableOpacity style={[styles.itemContainer, { width, height }]} onPress={onPress}>
      <Image style={styles.item} source={imagePathGen(posterPath)} />
    </TouchableOpacity>
  );
};

GalleryItem.propTypes = {
  posterPath: string.isRequired,
  numColumns: number.isRequired,
  onPress: func.isRequired,
};

export default GalleryItem;
