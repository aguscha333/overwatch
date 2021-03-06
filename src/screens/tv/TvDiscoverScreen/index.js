import React from 'react';

import { discoverSeries } from 'actions/tvActions';

import { Layout } from 'components/ui/layout';
import { Gallery } from 'components/ui/listers';

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
