import React from 'react';

import { Layout } from '@ui-kitten/components';

import { discoverMovies } from 'actions/movieActions';
import Gallery from 'components/Gallery';
import styles from './styles';

const MovieDiscoverScreen = () => {
  return (
    <Layout style={styles.container}>
      <Gallery getter={discoverMovies} model="movie" />
    </Layout>
  );
};

MovieDiscoverScreen.navigationOptions = {
  title: 'Discover Movies',
};

export default MovieDiscoverScreen;
