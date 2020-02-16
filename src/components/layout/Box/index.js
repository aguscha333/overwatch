import React from 'react';
import { array, bool, node, object, oneOfType } from 'prop-types';
import { View } from 'react-native';

import { GUTTER } from 'styles/spacings';

const Box = ({ style, children, withGutters }) => (
  <View style={[{ alignSelf: 'stretch' }, withGutters && { paddingHorizontal: GUTTER }, style]}>
    {children}
  </View>
);

Box.propTypes = {
  style: object,
  children: oneOfType([array, node]).isRequired,
  withGutters: bool,
};

Box.defaultProps = {
  withGutters: false,
};
export default Box;
