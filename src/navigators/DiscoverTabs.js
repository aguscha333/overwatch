import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TopTabBar } from 'components/navigation';
import MovieDiscoverScreen from 'screens/movie/MovieDiscoverScreen';
import TvDiscoverScreen from 'screens/tv/TvDiscoverScreen';

const TopTab = createMaterialTopTabNavigator();

const DiscoverTabs = () => (
  <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
    <TopTab.Screen name="Movies" component={MovieDiscoverScreen} />
    <TopTab.Screen name="Tv" component={TvDiscoverScreen} />
  </TopTab.Navigator>
);

export default DiscoverTabs;
