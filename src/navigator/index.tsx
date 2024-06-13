import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StateProvider} from '../index';
import Container from './Container';

import type {ThemeProps} from 'src/theme/types';

type Props = {
  readonly children: React.ReactNode;
  readonly theme?: ThemeProps;
};

export default function RootNavigator({
  children,
  theme
}: Props): React.JSX.Element {
  return (
    <StateProvider>
      <Container theme={theme}>{children}</Container>
    </StateProvider>
  );
}

export const {Screen, Navigator} = createNativeStackNavigator();
