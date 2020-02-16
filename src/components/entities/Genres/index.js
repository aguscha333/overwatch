import React from 'react';
import { array } from 'prop-types';

import { Tag } from 'components/qualifiers';
import { Box } from 'components/layout';
import { HorizontalList } from 'components/listers';

import styles from './styles';

const Genres = ({ data }) => (
  <Box>
    <HorizontalList
      contentContainerStyle={styles.insets}
      data={data}
      renderItem={({ item }) => <Tag>{item.name}</Tag>}
    />
  </Box>
);

Genres.propTypes = {
  data: array,
};

export default Genres;
