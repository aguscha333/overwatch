import React from 'react';
import { object } from 'prop-types';

import { discoverMovies } from 'actions/movieActions';
import { MOVIE_DETAIL_SCREEN } from 'constants/screens';

import { Layout } from 'components/layout';
import Gallery from 'components/Gallery';

import styles from './styles';

const MovieDiscoverScreen = ({ navigation }) => {
  const onItemPress = id => navigation.push(MOVIE_DETAIL_SCREEN, { id });
  return (
    <Layout style={styles.container}>
      <Gallery key="movie" getter={discoverMovies} model="movie" onItemPress={onItemPress} />
    </Layout>
  );
};

MovieDiscoverScreen.propTypes = {
  navigation: object.isRequired,
};

MovieDiscoverScreen.navigationOptions = {
  title: 'Discover Movies',
};

export default MovieDiscoverScreen;
