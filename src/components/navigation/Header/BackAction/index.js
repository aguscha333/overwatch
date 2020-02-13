import React from 'react';
import { func } from 'prop-types';
import { TopNavigationAction } from '@ui-kitten/components';

import BackIcon from './BackIcon';

const BackAction = ({ onPress }) => <TopNavigationAction icon={BackIcon} onPress={onPress} />;

BackAction.propTypes = {
  onPress: func.isRequired,
};

export default BackAction;
