import { StyleSheet } from 'react-native';

import { GUTTER } from 'styles/spacings';

const styles = StyleSheet.create({
  container: {
    paddingVertical: GUTTER,
  },
  insets: { paddingLeft: GUTTER },
  title: { paddingBottom: 10, paddingHorizontal: GUTTER },
});

export default styles;
