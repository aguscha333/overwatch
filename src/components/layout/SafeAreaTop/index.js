import React from 'react';
import { array, bool, node, oneOfType } from 'prop-types';
import { Layout } from '@ui-kitten/components';

import { useSafeArea } from 'react-native-safe-area-context';

const SafeAreaTop = ({ transparent, children }) => {
  const insets = useSafeArea();

  return (
    <Layout style={[{ paddingTop: insets.top }, transparent && { backgroundColor: 'transparent' }]}>
      {children}
    </Layout>
  );
};

SafeAreaTop.propTypes = {
  transparent: bool,
  children: oneOfType([array, node]).isRequired,
};

export default SafeAreaTop;
