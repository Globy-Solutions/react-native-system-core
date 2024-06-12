import {Dimensions, PixelRatio} from 'react-native';

import type {DimensionValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const {height, width}: {height?: DimensionValue; width?: DimensionValue} =
  Dimensions.get('screen');

const LINE_HEIGHT_SCALE_FACTOR = 1.33;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: string | number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: string | number): number => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

/*
* Implement that piece of code to have orientation detection

Dimensions.get('screen').width < Dimensions.get('screen').height ? 'portrait' : 'landscape'
*/

const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 667;
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const getFontLineHeight = (fontSize: number) =>
  fontSize * LINE_HEIGHT_SCALE_FACTOR;

export {
  getFontLineHeight,
  height,
  horizontalScale,
  heightPercentageToDP as hp,
  moderateScale,
  verticalScale,
  width,
  widthPercentageToDP as wp
};
