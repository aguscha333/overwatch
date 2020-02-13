import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieDiscoverScreen from 'screens/movie/MovieDiscoverScreen';
import MainScreen from 'screens/MainScreen';

import TopTabBar from 'components/navigation/TopTabBar';

const TopTab = createMaterialTopTabNavigator();

const AppTabs = () => (
  <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
    <TopTab.Screen name="Movies" component={MovieDiscoverScreen} />
    <TopTab.Screen name="Tv" component={MainScreen} />
  </TopTab.Navigator>
);

export default AppTabs;
