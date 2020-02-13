import React, { useEffect } from 'react';
import { number } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Text } from '@ui-kitten/components';

import { getMovie } from 'actions/movieActions';
import styles from './styles';

const MovieDetailScreen = ({ id }) => {
  const dispatch = useDispatch();

  const { detail } = useSelector(({ movie }) => movie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const { title } = detail;
  return (
    <Layout style={styles.container}>
      <Text>{title}</Text>
    </Layout>
  );
};

MovieDetailScreen.propTypes = {
  id: number.isRequired,
};

MovieDetailScreen.navigationOptions = {
  title: 'Movie Detail',
};

export default MovieDetailScreen;
