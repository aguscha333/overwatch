import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import {
  GET_MOVIE,
  getMovie,
  getMovieReset,
  GET_MOVIE_CREDITS,
  getMovieCredits,
  getMovieCreditsReset,
} from 'actions/movieActions';
import imagePathGen, { IMAGE_SIZE } from 'utils/imagePathGen';
import { useLoading } from '@rootstrap/redux-tools';
import { SCREEN_WIDTH } from 'constants/dimensions';

import Image from 'react-native-scalable-image';
import { Text } from '@ui-kitten/components';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { Box, Layout } from 'components/layout';
import { Header } from 'components/navigation';
import { Cast, Genres } from 'components/entities';
import MainDetails from './MainDetails';

import styles from './styles';

const MovieDetailScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const loadingDetails = useLoading(GET_MOVIE);
  const loadingCredits = useLoading(GET_MOVIE_CREDITS);
  const { detail, credits } = useSelector(({ movie }) => movie);

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getMovieCredits(id));
    return () => {
      dispatch(getMovieReset());
      dispatch(getMovieCreditsReset());
    };
  }, [dispatch, id]);

  const { backdropPath, genres, overview } = detail;
  const { cast } = credits;

  return (
    <ScrollView>
      <Layout style={styles.container}>
        <Header onBackPress={navigation.goBack} transparent />

        <Skeleton
          isLoading={loadingDetails}
          containerStyle={{ alignSelf: 'stretch', height: 300, overflow: 'hidden' }}
          layout={[{ key: 'backdrop', width: SCREEN_WIDTH, height: 300 }]}>
          {backdropPath && (
            <Image style={styles.image} source={imagePathGen(backdropPath, IMAGE_SIZE.W500)} />
          )}
        </Skeleton>
        <Box withGutters>
          {!isEmpty(detail) && <MainDetails {...detail} />}
          <Text style={styles.overview}>{overview}</Text>
        </Box>
        <Genres data={genres} />
        <Cast data={cast} isLoading={loadingCredits} />
      </Layout>
    </ScrollView>
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
