import type {Theme} from '@react-navigation/native/lib/typescript/src/types';
import type {Dispatch, ReactNode, SetStateAction} from 'react';
import type {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheet';
import type {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export enum VariantFont {
  normal = 'normal',
  large = 'large',
  extraLarge = 'extraLarge',
  small = 'small',
  extraSmall = 'extraSmall'
}

export type ThemeProps = Theme & {
  dark: boolean;
  colors: {
    [key in keyof Theme['colors']]: ColorValue;
  };
  borderRadius: number;
  fonts: {
    [key in VariantFont]: TextStyle;
  };
  elevation?: number;
};

export type ThemeDataProps = ThemeProps & {
  isDark: boolean;
  changeTheme: Dispatch<SetStateAction<boolean>>;
};
export type ThemeProviderProps = {
  children: ReactNode;
};
