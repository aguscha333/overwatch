import { StyleSheet } from 'react-native';

import { STATUS_BAR_HEIGHT } from 'constants/dimensions';
import { SHADOW_DEFAULT } from 'styles/shadows';

const styles = StyleSheet.create({
  title: {
    ...SHADOW_DEFAULT,
  },
  floating: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 999,
  },
});

export default styles;
