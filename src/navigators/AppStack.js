import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DISCOVER_TABS, MOVIE_DETAIL_SCREEN } from 'constants/screens';

import MovieDetailScreen from 'screens/movie/MovieDetailScreen';
import DiscoverTabs from './DiscoverTabs';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={DISCOVER_TABS} component={DiscoverTabs} />
    <Stack.Screen name={MOVIE_DETAIL_SCREEN} component={MovieDetailScreen} />
  </Stack.Navigator>
);

export default AppStack;
