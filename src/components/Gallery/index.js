import React from 'react';
import { func, string } from 'prop-types';
import { List } from '@ui-kitten/components';

import useGetList from 'hooks/useGetList';
import GalleryItem from './GalleryItem';

import styles from './styles';

const Gallery = ({ getter, model }) => {
  const NUM_COLUMNS = 3;

  const [{ list }, handleLoadMore] = useGetList(getter, model);
  return (
    <List
      style={styles.list}
      data={list}
      renderItem={({ item }) => <GalleryItem {...item} numColumns={NUM_COLUMNS} />}
      keyExtractor={item => item.id}
      numColumns={NUM_COLUMNS}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={20}
    />
  );
};

Gallery.propTypes = {
  getter: func.isRequired,
  model: string.isRequired,
};

export default Gallery;
