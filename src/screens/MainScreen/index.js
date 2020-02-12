import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Icon, Layout, Text } from '@ui-kitten/components';

import { discoverMovies } from 'actions/discoverActions';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(discoverMovies());
  }, [dispatch]);

  return (
    <Layout style={styles.container}>
      <Text>Hello world</Text>
      <Button icon={() => <Icon name="activity-outline" />} />
    </Layout>
  );
};

MainScreen.navigationOptions = {
  title: 'Discover',
};

export default MainScreen;
