import React from 'react';
import { array, func } from 'prop-types';
import { FlatList } from 'react-native';

const HorizontalList = ({ data, renderItem, ...restProps }) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
    horizontal
    {...restProps}
  />
);

HorizontalList.propTypes = {
  data: array,
  renderItem: func.isRequired,
};

HorizontalList.defaultProps = {
  data: [],
};

export default HorizontalList;
