import {
  Navigator,
  RootNavigator,
  Screen,
  ThemeProvider
} from '@globy-solutions/react-native-system-core';
import {StyleSheet, Text, View} from 'react-native';

import About from './screens/about';
import Home from './screens/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator>
        <View style={styles.container}>
          <Text>App</Text>
          <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="About" component={About} />
          </Navigator>
        </View>
      </RootNavigator>
    </ThemeProvider>
  );
}
