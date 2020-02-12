import React from 'react';
import { SafeAreaView } from 'react-native';
import { TabBar, Tab } from '@ui-kitten/components';
import { func, object } from 'prop-types';

const TopTabBar = ({ onIndexChange, navigationState }) => {
  const onSelect = index => {
    onIndexChange(index);
  };

  return (
    <SafeAreaView>
      <TabBar selectedIndex={navigationState.index} onSelect={onSelect}>
        <Tab title="Movies" />
        <Tab title="TV" />
      </TabBar>
    </SafeAreaView>
  );
};

TopTabBar.propTypes = {
  onIndexChange: func.isRequired,
  navigationState: object.isRequired,
};

export default TopTabBar;
