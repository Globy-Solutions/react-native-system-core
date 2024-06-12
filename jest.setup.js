import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export * from '@testing-library/jest-native/extend-expect';
