import React from 'react';
import { object } from 'prop-types';
import { TabBar, Tab } from '@ui-kitten/components';

import { SafeAreaTop } from 'components/layout';
import Header from '../Header';

const TopTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaTop>
      <Header title="OVERWATCH" />
      <TabBar selectedIndex={state.index} onSelect={onSelect}>
        <Tab title="Movies" />
        <Tab title="TV" />
      </TabBar>
    </SafeAreaTop>
  );
};

TopTabBar.propTypes = {
  navigation: object.isRequired,
  state: object.isRequired,
};

export default TopTabBar;
