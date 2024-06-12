import {LinkingOptions, ParamListBase} from '@react-navigation/native';

import type {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  independent?: boolean;
  linking?: LinkingOptions<Props>;
  /**
   * @param onReady: Function which is called after the navigation container and all its children finish mounting for the first time
   */
  onReady?: (() => void) | undefined;
}
declare function createNavigator<
  T extends ParamListBase
>(): import('@react-navigation/native').TypedNavigator<
  T,
  import('@react-navigation/native').StackNavigationState<ParamListBase>,
  import('@react-navigation/native-stack').NativeStackNavigationOptions,
  import('@react-navigation/native-stack').NativeStackNavigationEventMap,
  ({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: import('@react-navigation/native-stack/lib/typescript/src/types').NativeStackNavigatorProps) => JSX.Element
>;
declare function Container({
  children,
  independent,
  linking,
  onReady
}: Props): React.JSX.Element;

export {Container, createNavigator};
