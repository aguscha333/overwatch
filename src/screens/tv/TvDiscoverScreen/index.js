import React from 'react';

import { discoverSeries } from 'actions/tvActions';

import { Layout } from 'components/layout';
import Gallery from 'components/Gallery';

import styles from './styles';

const TvDiscoverScreen = () => {
  return (
    <Layout style={styles.container}>
      <Gallery key="tv" getter={discoverSeries} model="tv" onItemPress={() => null} />
    </Layout>
  );
};

TvDiscoverScreen.navigationOptions = {
  title: 'Discover TV',
};

export default TvDiscoverScreen;
