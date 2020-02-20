import React from 'react';
import { array, bool, func, string } from 'prop-types';
import { FlatList } from 'react-native';

import { Text } from '@ui-kitten/components';
import { Box } from 'components/layout';

import styles from './styles';

const HorizontalList = ({ title, data, Item, showsHorizontalScrollIndicator, ...restProps }) => (
  <Box style={styles.container}>
    {!!title && (
      <Text style={styles.title} category="h6">
        {title}
      </Text>
    )}
    <FlatList
      contentContainerStyle={styles.insets}
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      {...restProps}
    />
  </Box>
);

HorizontalList.propTypes = {
  title: string,
  data: array,
  Item: func.isRequired,
  showsHorizontalScrollIndicator: bool,
};

HorizontalList.defaultProps = {
  data: [],
  showsHorizontalScrollIndicator: false,
};

export default HorizontalList;
