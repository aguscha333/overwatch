import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { discoverMovies } from 'actions/discoverActions';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(discoverMovies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

MainScreen.navigationOptions = {
  title: 'Discover',
};

export default MainScreen;
