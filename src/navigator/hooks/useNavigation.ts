/**
 * `useNavigation` is a React Hook that returns a `navigator` object that can be used to navigate
 * between screens
 * @returns The navigator object
 */

import {useNavigation as useNativeNavigation} from '@react-navigation/core';

import type {NavigatorProps} from '../types';

const useNavigation = () => {
  const {navigate, canGoBack, goBack, dispatch} =
    useNativeNavigation<NavigatorProps>();

  return {navigate, canGoBack, goBack, dispatch};
};

export default useNavigation;
