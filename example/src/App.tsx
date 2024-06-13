import {
  HeaderLeft,
  HeaderRight,
  Navigator,
  RootNavigator,
  Screen,
  ThemeProvider
} from '@globy-solutions/react-native-system-core';
import { TransitionPresets } from '@react-navigation/stack';
import { Animated, Text } from 'react-native';
import About from './screens/about';
import Home from './screens/home';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({ current, next }: any) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};
const options = {
  transitionSpec: {
    open: config,
    close: config,
  },
  // presentation: 'transparentModal',
  headerStyleInterpolator: forFade,
  headerRight: () => <HeaderRight><Text>headerRight</Text></HeaderRight>,
  headerLeft: () => <HeaderLeft />
}

export default function App() {

  return (
    <ThemeProvider>
      <RootNavigator >
        <Navigator
          screenOptions={() => ({
            gestureEnabled: true,
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            headerTitleStyle: { fontWeight: 'bold' },
            ...TransitionPresets.ModalPresentationIOS,
          })}
        >
          <Screen name="Home" component={Home} options={options} />
          <Screen name="About" component={About} options={options} />
        </Navigator>
      </RootNavigator>
    </ThemeProvider>
  );
}
