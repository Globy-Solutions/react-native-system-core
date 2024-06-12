import HeaderLeft from './header/left';
import HeaderRight from './header/right';

import type {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';
import type {
  StackNavigationOptions,
  TransitionSpec
} from '@react-navigation/stack/lib/typescript/src/types';

type HeaderScreenProps = {
  title?: NativeStackNavigationOptions['headerTitle'];
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
} as TransitionSpec;

const rootHeaderScreen = ({
  title
}: HeaderScreenProps): Partial<StackNavigationOptions> => ({
  transitionSpec: {
    open: config,
    close: config
  },
  presentation: 'modal',
  headerMode: 'screen',
  // @ts-ignore
  headerLeft: HeaderLeft,
  // @ts-ignore
  headerRight: HeaderRight,
  headerTitle: title ?? ''
});

export default rootHeaderScreen;
