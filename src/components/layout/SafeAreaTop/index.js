import React from 'react';
import { array, node, oneOfType } from 'prop-types';
import { Layout } from '@ui-kitten/components';

import { useSafeArea } from 'react-native-safe-area-context';

const SafeAreaTop = ({ children }) => {
  const insets = useSafeArea();

  return <Layout style={{ paddingTop: insets.top }}>{children}</Layout>;
};

SafeAreaTop.propTypes = {
  children: oneOfType([array, node]).isRequired,
};

export default SafeAreaTop;
