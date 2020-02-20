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
  GET_SIMILAR_MOVIES,
  getSimilarMovies,
  getSimilarMoviesReset,
} from 'actions/movieActions';
import imagePathGen, { IMAGE_SIZE } from 'utils/imagePathGen';
import { useLoading } from '@rootstrap/redux-tools';
import { SCREEN_WIDTH } from 'constants/dimensions';

import Image from 'react-native-scalable-image';
import { Text } from '@ui-kitten/components';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { Box, Layout } from 'components/layout';
import { Header } from 'components/navigation';
import { Genres } from 'components/lists';
import { Movie, Person } from 'components/lists/entities';
import { Showcase } from 'components/lists/generic';
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
  const loadingSimilar = useLoading(GET_SIMILAR_MOVIES);
  const { detail, credits, similar } = useSelector(({ movie }) => movie);

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getMovieCredits(id));
    dispatch(getSimilarMovies(id));
    return () => {
      dispatch(getMovieReset());
      dispatch(getMovieCreditsReset());
      dispatch(getSimilarMoviesReset());
    };
  }, [dispatch, id]);

  const { backdropPath, genres, overview } = detail;
  const { cast } = credits;
  const { results: similarMovies } = similar;

  return (
    <Layout style={styles.container}>
      <Header onBackPress={navigation.goBack} transparent />
      <ScrollView>
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
        <Showcase title="Cast" data={cast} isLoading={loadingCredits} Item={Person} />
        <Showcase
          title="Similar Movies"
          data={similarMovies}
          isLoading={loadingSimilar}
          Item={Movie}
        />
      </ScrollView>
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
