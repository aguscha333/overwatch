import { Dimensions, Platform, StatusBar } from 'react-native';

import { IOS } from 'constants';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XS_MAX_WIDTH = 414;
const XS_MAX_HEIGHT = 896;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === IOS && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (SCREEN_WIDTH === X_WIDTH && SCREEN_HEIGHT === X_HEIGHT) ||
    (SCREEN_WIDTH === XS_MAX_WIDTH && SCREEN_HEIGHT === XS_MAX_HEIGHT);
}

const IPHONE_X_STATUS_BAR_HEIGHT = 44;
const IPHONE_STATUS_BAR_HEIGHT = 20;

const getStatusBarHeight = skipAndroid => {
  return Platform.select({
    ios: isIPhoneX ? IPHONE_X_STATUS_BAR_HEIGHT : IPHONE_STATUS_BAR_HEIGHT,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};

export const STATUS_BAR_HEIGHT = getStatusBarHeight(true);
