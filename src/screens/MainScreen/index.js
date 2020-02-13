import React from 'react';

import { Button, Icon, Layout, Text } from '@ui-kitten/components';

import styles from './styles';

const MainScreen = () => {
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
