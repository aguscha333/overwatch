import React from 'react';
import { object } from 'prop-types';
import { TabBar, Tab } from '@ui-kitten/components';

import SafeAreaTop from 'components/layout/SafeAreaTop';
import Header from 'components/navigation/Header';

const TopTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaTop>
      <Header />
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
