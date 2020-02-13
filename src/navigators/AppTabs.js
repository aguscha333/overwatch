import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopTabBar from 'components/navigation/TopTabBar';
import TvDiscoverScreen from 'screens/tv/TvDiscoverScreen';
import MovieStack from './MovieStack';

const TopTab = createMaterialTopTabNavigator();

const AppTabs = () => (
  <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
    <TopTab.Screen name="Movies" component={MovieStack} />
    <TopTab.Screen name="Tv" component={TvDiscoverScreen} />
  </TopTab.Navigator>
);

export default AppTabs;
