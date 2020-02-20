import { StyleSheet } from 'react-native';

import { GUTTER } from 'styles/spacings';
import { SCREEN_WIDTH } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { paddingBottom: GUTTER },
  overview: { paddingVertical: GUTTER },
  image: {
    width: SCREEN_WIDTH,
  },
});

export default styles;
