import {NavigationContainer} from '@react-navigation/native';

import {useCallback, useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import useOrientation from '../hooks/useOrientation';
import hookRoute, {
  DeviceOrientation,
  deviceOrientation
} from '../state-management/recoil/router';

import type {LinkingOptions} from '@react-navigation/native';
import type {NavigationState} from '@react-navigation/routers';
import type {ReactNode, SetStateAction} from 'react';
import type {ThemeProps} from '../theme/types';

interface Props {
  /* Set stacks to generate routes */
  readonly children: ReactNode;
  /* Set in true when is used in SuperApp */
  readonly independent?: boolean;
  readonly linking?: LinkingOptions<Props>;
  /**
   * @param onReady: Function which is called after the navigation container and all its children finish mounting for the first time
   */
  readonly onReady?: () => void;
  /**
   * @param CATALOGMode: Boolean. When it's true, set to 100% the sampling rate of Datadog, for testing purposes
   */
  readonly CATALOGMode?: boolean;
  readonly theme?: ThemeProps;
}

interface Routes {
  key: string;
  name: string;
  state: NavigationState;
}
interface Route {
  routes: {state: {routes: Routes[]}}[];
}
interface NestedRoute {
  name: SetStateAction<string | null>;
}

function Container({
  children,
  independent = true,
  linking,
  theme,
  onReady,
  CATALOGMode = true
}: Props) {
  const orientation = useOrientation();
  const updateOrientation =
    useSetRecoilState<keyof typeof DeviceOrientation>(deviceOrientation);
  const updateCurrentRoute = useSetRecoilState(hookRoute);
  const [currentRouteName, setCurrentRouteName] = useState<string | null>(null);
  const handleNavigationStateChange = useCallback((state: Route) => {
    state.routes.forEach((route: {state: {routes: unknown[]}}) => {
      if (route.state) {
        route.state.routes.forEach(
          // @ts-ignore
          (nestedRoute: NestedRoute) => {
            setCurrentRouteName(nestedRoute.name);
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    updateOrientation(orientation);
  }, [orientation]);
  useEffect(() => {
    let routeInfo = {
      key: currentRouteName ?? 'AppInBackground',
      name: currentRouteName ?? 'AppInBackground',
      timestampMs: Date.now()
    };
    CATALOGMode && console.log(routeInfo);
    updateCurrentRoute(routeInfo);
  }, [currentRouteName]);

  return (
    <NavigationContainer
      onStateChange={(state: NavigationState | undefined) =>
        handleNavigationStateChange(state as Route)
      }
      linking={linking}
      independent={independent}
      onReady={onReady}
      theme={theme}>
      {children}
    </NavigationContainer>
  );
}

export default Container;
