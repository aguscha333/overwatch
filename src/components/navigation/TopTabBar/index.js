import React from 'react';
import { SafeAreaView } from 'react-native';
import { TabBar, Tab } from '@ui-kitten/components';
import { object } from 'prop-types';

const TopTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <TabBar selectedIndex={state.index} onSelect={onSelect}>
        <Tab title="Movies" />
        <Tab title="TV" />
      </TabBar>
    </SafeAreaView>
  );
};

TopTabBar.propTypes = {
  navigation: object.isRequired,
  state: object.isRequired,
};

export default TopTabBar;
