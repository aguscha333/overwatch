import React from 'react';
import { bool, func, string } from 'prop-types';
import { View } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';

import BackAction from './BackAction';

import styles from './styles';

const Header = ({ title, onBackPress, transparent }) => {
  return (
    <View style={transparent ? styles.floating : {}}>
      <TopNavigation
        leftControl={onBackPress ? <BackAction onPress={onBackPress} /> : undefined}
        alignment="center"
        title={title}
        titleStyle={styles.title}
        style={transparent && { backgroundColor: 'transparent' }}
      />
    </View>
  );
};

Header.propTypes = {
  title: string,
  onBackPress: func,
  transparent: bool,
};

Header.defaultProps = {
  transparent: false,
};

export default Header;
