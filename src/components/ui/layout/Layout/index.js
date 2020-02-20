import React from 'react';
import { array, bool, node, object, oneOfType } from 'prop-types';

import { Layout as LayoutBase } from '@ui-kitten/components';

import { GUTTER } from 'styles/spacings';

const Layout = ({ style, children, withGutters }) => (
  <LayoutBase
    style={[{ alignSelf: 'stretch' }, withGutters && { paddingHorizontal: GUTTER }, style]}>
    {children}
  </LayoutBase>
);

Layout.propTypes = {
  style: object,
  children: oneOfType([array, node]).isRequired,
  withGutters: bool,
};

Layout.defaultProps = {
  withGutters: false,
};

export default Layout;
