import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from 'actions/movieActions';

import SafeAreaTop from 'components/layout/SafeAreaTop';
import Header from 'components/navigation/Header';

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
  }, [dispatch, id]);

  const { title } = detail;
  console.log(detail);
  return (
    <SafeAreaTop>
      <Header title={title} onBackPress={navigation.goBack} />
    </SafeAreaTop>
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
