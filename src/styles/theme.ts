import { Platform } from 'react-native';

import { getFontLineHeight, moderateScale } from '../utils/_dimensions';

import type { ThemeProps } from '../theme/types';

export const scale: number = Platform.OS === 'ios' ? 1 : 0.8;
export const fontFamily: string =
    Platform.OS === 'ios' ? 'Arial Hebrew' : 'Mooli Regular',
  fonts = {
    extraLarge: {
      fontFamily,
      fontSize: moderateScale(26 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(21 * scale),
      textTransform: 'capitalize'
    },
    extraSmall: {
      fontFamily,
      fontSize: moderateScale(12 * scale),
      lineHeight: getFontLineHeight(12 * scale)
    },
    large: {
      fontFamily,
      fontSize: moderateScale(22 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(20 * scale),
      textTransform: 'capitalize'
    },
    normal: {
      fontFamily,
      fontSize: moderateScale(18 * scale),
      lineHeight: getFontLineHeight(15 * scale)
    },
    small: {
      fontFamily,
      fontSize: moderateScale(16 * scale),
      lineHeight: getFontLineHeight(14 * scale)
    }
  } as const;
export const defaults = {
  borderRadius: 15,
  elevation: 5,
  fonts
};
export const lightTheme: ThemeProps = {
  colors: {
    primary: '#F3EF19',
    background: '#FFAF33',
    card: '#F38F07',
    text: '#115B99',
    border: '#074458',
    notification: '#FF5733'
  },
  dark: false,
  ...defaults
};

export const darkTheme: ThemeProps = {
  colors: {
    primary: '#28025B',
    background: '#09265D',
    card: '#5B3CF8',
    text: '#D7F2FB',
    border: '#fff',
    notification: '#EAAE07'
  },
  dark: true,
  ...defaults
};
