import React from 'react';
import { array } from 'prop-types';

import { Text } from '@ui-kitten/components';
import { Box } from 'components/layout';
import { HorizontalList } from 'components/listers';
import CastMember from './CastMember';

import styles from './styles';

const Cast = ({ data }) => (
  <Box style={styles.container}>
    <Text style={styles.title} category="h6">
      Cast
    </Text>
    <HorizontalList
      contentContainerStyle={styles.insets}
      data={data}
      renderItem={({ item }) => <CastMember {...item} />}
      showsHorizontalScrollIndicator={false}
    />
  </Box>
);

Cast.propTypes = {
  data: array,
};

export default Cast;
