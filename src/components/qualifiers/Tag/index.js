import React from 'react';
import { node, object } from 'prop-types';
import { View } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

import themedStyles from './styles';

const Label = ({ children, style, textStyle }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]} category="label">
        {children}
      </Text>
    </View>
  );
};

Label.propTypes = {
  children: node,
  style: object,
  textStyle: object,
};

export default Label;
