import React from 'react';
import { View } from 'react-native';
import { array, node, object, oneOfType } from 'prop-types';

const Row = ({ style, children }) => (
  <View style={[{ alignSelf: 'stretch', flexDirection: 'row' }, style]}>{children}</View>
);

Row.propTypes = {
  style: object,
  children: oneOfType([array, node]).isRequired,
};

export default Row;
