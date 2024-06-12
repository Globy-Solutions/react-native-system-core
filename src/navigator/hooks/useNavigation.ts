/**
 * `useNavigation` is a React Hook that returns a `navigator` object that can be used to navigate
 * between screens
 * @returns The navigator object
 */

import {useNavigation as useNativeNavigation} from '@react-navigation/core';

import type {NavigatorProps} from '../types';

const useNavigation = () => {
  const navigation = useNativeNavigation<NavigatorProps>();
  const {navigate, goBack, dispatch} = navigation;

  return {navigate, goBack, dispatch};
};

export default useNavigation;
