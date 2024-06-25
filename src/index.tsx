/*
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@globy-solutions/react-native-system-core' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeSystemCore = NativeModules.ReactNativeSystemCore
  ? NativeModules.ReactNativeSystemCore
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ReactNativeSystemCore.multiply(a, b);
}
 */

export { Navigator, default as RootNavigator, Screen } from './navigator';
export { default as useNavigation } from './navigator/hooks/useNavigation';
export { StateProvider } from './state-management';
export { darkTheme, defaults, lightTheme } from './styles/theme';
export {
  default as ThemeProvider,
  useThemeProvider
} from './theme/theme-provider';
export { default as WebviewUI } from './webView';

export { default as useOrientation } from './hooks/useOrientation';
export { default as HeaderLeft } from './navigator/header/left';
export { default as HeaderRight } from './navigator/header/right';
export { default as capitalizeFirstLetter } from './utils/_capitalizeFirstLetter';
export {
  getFontLineHeight,
  height,
  horizontalScale,
  hp,
  moderateScale,
  verticalScale,
  width,
  wp
} from './utils/_dimensions';

export { default as AuthScreen } from './auth';
