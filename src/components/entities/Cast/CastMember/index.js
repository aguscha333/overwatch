import React from 'react';
import { string } from 'prop-types';
import { View } from 'react-native';
import imagePathGen from 'utils/imagePathGen';

import Image from 'react-native-scalable-image';
import { Icon, Text, useStyleSheet, useTheme } from '@ui-kitten/components';

import themedStyles from './styles';

const CastMember = ({ name, profilePath }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profilePath ? (
          <Image style={styles.profile} width={100} source={imagePathGen(profilePath)} />
        ) : (
          <Icon name="star" width={32} height={32} fill={theme['color-primary-600']} />
        )}
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

CastMember.propTypes = { name: string.isRequired, profilePath: string.isRequired };

export default CastMember;
