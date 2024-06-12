/**
 * It takes a generic type T that extends RouteProp<ParamListBase> and returns a RouteProp<T>
 * @returns The route prop for the current screen.
 */

import {useRoute as useRouteNative} from '@react-navigation/native';

import type {ParamListBase, RouteProp} from '@react-navigation/native';

function useRoute<T extends RouteProp<ParamListBase>>() {
  const route = useRouteNative<T>();
  return route;
}

export default useRoute;
