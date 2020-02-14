import React from 'react';

import imagePathGen from 'utils/imagePathGen';

import { Card, Text } from '@ui-kitten/components';
import Image from 'react-native-scalable-image';

import { Box, Row } from 'components/layout';

import styles from './styles';

const MainDetails = ({ title, posterPath }) => (
  <Box style={styles.outerContainer}>
    <Card style={styles.container}>
      <Row>
        <Image width={100} source={imagePathGen(posterPath)} />
        <Box style={styles.information}>
          <Text category="h6">{title}</Text>
        </Box>
      </Row>
    </Card>
  </Box>
);

export default MainDetails;
