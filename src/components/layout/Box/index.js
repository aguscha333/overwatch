import React from 'react';
import { array, node, object, oneOfType } from 'prop-types';
import { View } from 'react-native';

const Box = ({ style, children }) => (
  <View style={[{ alignSelf: 'stretch' }, style]}>{children}</View>
);

Box.propTypes = {
  style: object,
  children: oneOfType([array, node]).isRequired,
};

export default Box;
