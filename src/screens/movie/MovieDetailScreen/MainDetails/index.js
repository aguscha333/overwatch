import React from 'react';
import { number, string } from 'prop-types';

import imagePathGen from 'utils/imagePathGen';

import { Card, Text } from '@ui-kitten/components';
import Image from 'react-native-scalable-image';
import { Box, Row } from 'components/ui/layout';
import { Label } from 'components/ui/qualifiers';

import styles from './styles';

const MainDetails = ({ title, posterPath, status, voteAverage, runtime }) => (
  <Box style={styles.outerContainer}>
    <Card style={styles.container}>
      <Row>
        <Image width={100} source={imagePathGen(posterPath)} />
        <Box style={styles.information}>
          <Text style={styles.title} category="h6">
            {title}
          </Text>
          <Row>
            <Label style={styles.label}>{status}</Label>
            <Label style={styles.label}>{voteAverage}/10</Label>
            <Label style={styles.label}>{runtime} min</Label>
          </Row>
        </Box>
      </Row>
    </Card>
  </Box>
);

MainDetails.propTypes = {
  title: string.isRequired,
  posterPath: string.isRequired,
  status: string.isRequired,
  voteAverage: number.isRequired,
  runtime: number.isRequired,
};

export default MainDetails;
