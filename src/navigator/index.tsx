import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StateProvider} from '../index';
import Container from './Container';

export default function RootNavigator({
  children
}: {
  readonly children: React.ReactNode;
}): React.JSX.Element {
  return (
    <StateProvider>
      <Container>{children}</Container>
    </StateProvider>
  );
}

export const {Screen, Navigator} = createNativeStackNavigator();
