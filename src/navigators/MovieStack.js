import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MOVIE_DISCOVER_SCREEN, MOVIE_DETAIL_SCREEN } from 'constants/screens';

import MovieDiscoverScreen from 'screens/movie/MovieDiscoverScreen';
import MovieDetailScreen from 'screens/movie/MovieDetailScreen';

const Stack = createStackNavigator();

const MovieStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={MOVIE_DISCOVER_SCREEN} component={MovieDiscoverScreen} />
    <Stack.Screen name={MOVIE_DETAIL_SCREEN} component={MovieDetailScreen} />
  </Stack.Navigator>
);

export default MovieStack;
