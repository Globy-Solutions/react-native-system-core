import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';
// import { multiply } from '@globy-solutions/react-native-system-core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}
