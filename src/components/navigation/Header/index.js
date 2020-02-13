import React from 'react';
import { func, string } from 'prop-types';
import { TopNavigation } from '@ui-kitten/components';

import BackAction from './BackAction';

const Header = ({ title, onBackPress }) => {
  return (
    <TopNavigation
      leftControl={onBackPress ? <BackAction onPress={onBackPress} /> : undefined}
      alignment="center"
      title={title}
    />
  );
};

Header.propTypes = {
  title: string,
  onBackPress: func,
};

Header.defaultProps = {
  title: 'Overwatch',
};

export default Header;
