import React from 'react';

import { Layout } from '@ui-kitten/components';

import { discoverSeries } from 'actions/tvActions';
import Gallery from 'components/Gallery';
import styles from './styles';

const TvDiscoverScreen = () => {
  return (
    <Layout style={styles.container}>
      <Gallery key="tv" getter={discoverSeries} model="tv" />
    </Layout>
  );
};

TvDiscoverScreen.navigationOptions = {
  title: 'Discover TV',
};

export default TvDiscoverScreen;
