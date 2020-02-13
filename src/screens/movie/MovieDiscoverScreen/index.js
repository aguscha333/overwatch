import React from 'react';
import { object } from 'prop-types';

import { Layout } from '@ui-kitten/components';

import { discoverMovies } from 'actions/movieActions';
import { MOVIE_DETAIL_SCREEN } from 'constants/screens';
import Gallery from 'components/Gallery';
import styles from './styles';

const MovieDiscoverScreen = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Gallery
        key="movie"
        getter={discoverMovies}
        model="movie"
        onItemPress={id => navigation.push(MOVIE_DETAIL_SCREEN, { id })}
      />
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
