import React from 'react';
import { array, node, object, oneOfType } from 'prop-types';
import { Layout as LayoutBase } from '@ui-kitten/components';

const Layout = ({ style, children }) => (
  <LayoutBase style={[{ alignSelf: 'stretch' }, style]}>{children}</LayoutBase>
);

Layout.propTypes = {
  style: object,
  children: oneOfType([array, node]).isRequired,
};

export default Layout;
