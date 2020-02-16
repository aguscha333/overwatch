import { StyleSheet } from 'react-native';

import { GUTTER } from 'styles/spacings';
import { SCREEN_WIDTH } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: { flex: 1 },
  overview: { paddingVertical: GUTTER },
  image: {
    width: SCREEN_WIDTH,
  },
});

export default styles;
