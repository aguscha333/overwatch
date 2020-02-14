import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-native-scalable-image';

import { getMovie, getMovieReset } from 'actions/movieActions';
import imagePathGen from 'utils/imagePathGen';

import { Layout } from 'components/layout';
import { Header } from 'components/navigation';
import MainDetails from './MainDetails';

import styles from './styles';

const MovieDetailScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  const { detail } = useSelector(({ movie }) => movie);

  useEffect(() => {
    dispatch(getMovie(id));
    return () => dispatch(getMovieReset());
  }, [dispatch, id]);

  const { backdropPath } = detail;

  return (
    <Layout style={styles.container}>
      <Header onBackPress={navigation.goBack} transparent />

      <Image style={styles.image} source={imagePathGen(backdropPath)} />

      <MainDetails {...detail} />
    </Layout>
  );
};

MovieDetailScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

MovieDetailScreen.navigationOptions = {
  title: 'Movie Detail',
};

export default MovieDetailScreen;
