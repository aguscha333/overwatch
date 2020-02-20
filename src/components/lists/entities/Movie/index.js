import React from 'react';
import { func, number, string } from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';

import imagePathGen from 'utils/imagePathGen';

// import Image from 'react-native-scalable-image';
import { Icon, useStyleSheet, useTheme } from '@ui-kitten/components';

import themedStyles from './styles';

const Movie = ({ id, posterPath, onPress }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(id)}>
        {posterPath ? (
          <Image style={styles.profile} source={imagePathGen(posterPath)} />
        ) : (
          <Icon name="film" width={32} height={32} fill={theme['color-primary-600']} />
        )}
      </TouchableOpacity>
    </View>
  );
};

Movie.propTypes = {
  id: number.isRequired,
  posterPath: string.isRequired,
  onPress: func.isRequired,
};

export default Movie;
