import React from 'react';
import { string } from 'prop-types';
import { View } from 'react-native';
import imagePathGen from 'utils/imagePathGen';

import Image from 'react-native-scalable-image';
import { Icon, useStyleSheet, useTheme } from '@ui-kitten/components';

import themedStyles from './styles';

const SimilarMovie = ({ posterPath }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {posterPath ? (
        <Image style={styles.profile} width={100} source={imagePathGen(posterPath)} />
      ) : (
        <Icon name="film" width={32} height={32} fill={theme['color-primary-600']} />
      )}
    </View>
  );
};

SimilarMovie.propTypes = { posterPath: string.isRequired };

export default SimilarMovie;
