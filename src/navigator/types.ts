import type {NavigationProp} from '@react-navigation/core/src/types';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';
import type {FC} from 'react';

export type Router = {
  params: {
    [x: string]: any;
  };
};
export type HeaderScreenProps = {
  left?: boolean;
  right?: boolean;
  title?: NativeStackNavigationOptions['headerTitle'];
};
export enum RootStack {
  HomeScreen = 'HomeScreen'
}
export type ScreenTypeProps = {
  component: FC<any>;
  options?: Partial<NativeStackNavigationOptions>;
};
export type RoutesScreens = {
  [key in RootStack]: ScreenTypeProps['component'];
};
export type NavigatorProps = NavigationProp<any> & {
  navigation?: any;
  route?: Router;
};
export type ScreenType = ScreenTypeProps & {
  name: string;
};
export type TabType = ScreenTypeProps & {
  label: string;
  iconName: string;
  navigateTo: keyof typeof RootStack;
};
