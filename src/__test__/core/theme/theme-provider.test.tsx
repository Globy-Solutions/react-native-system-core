import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {Appearance, Platform, Text, View} from 'react-native';

import {Provider, render, screen} from 'src/__test__/utils/customRender';
import {darkTheme, defaults, lightTheme} from 'src/styles/theme';
import {useThemeProvider} from 'src/theme/theme-provider';

import type {ReactTestInstance} from 'react-test-renderer';

const existOnScreen = (element: any) => {
  expect(element).toBeVisible();
  expect(element).toBeOnTheScreen();
  return element;
};
const Child = () => <Text>Test Child</Text>;
const Container = ({children}: {children: React.ReactNode}) => {
  const {
    colors: {background}
  } = useThemeProvider();
  return (
    <View style={{backgroundColor: background}} testID="container">
      {children}
    </View>
  );
};
const App = ({children}: {children?: React.ReactNode}) => (
  <Provider>{children}</Provider>
);

describe('fontFamily', () => {
  test('should return colors according to theme', () => {
    switch (Appearance.getColorScheme()) {
      case 'light':
        expect(lightTheme.dark).toBe(false);
        expect(lightTheme.colors.primary).toBe('#F3EF19');
        expect(lightTheme.colors.text).toBe('#115B99');
        break;
      case 'dark':
        expect(darkTheme.dark).toBe(true);
        expect(darkTheme.colors.primary).toBe('#28025B');
        expect(darkTheme.colors.text).toBe('#D7F2FB');
        break;
    }
  });

  test('should return the font family according to the OS', () => {
    const {
      fonts: {
        extraLarge: {fontFamily}
      }
    } = defaults;
    switch (Platform.OS) {
      case 'ios':
        expect(fontFamily).toBe('Arial Hebrew');
        break;
      case 'android':
        expect(fontFamily).toBe('Mooli Regular');
        break;
      default:
        expect(fontFamily).toBeUndefined();
    }
  });
});

describe('ThemeProvider', () => {
  describe('Child', () => {
    let text: ReactTestInstance;
    beforeEach(() => {
      render(<Child />);
      text = screen.getByText('Test Child');
    });
    test('snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    test('render content', () => {
      existOnScreen(text);
    });
  });
  describe('App', () => {
    let child: ReactTestInstance;
    let container: ReactTestInstance;
    beforeEach(() => {
      render(
        <App>
          <Container>
            <Child />
          </Container>
        </App>
      );
      child = screen.getByText('Test Child');
      container = screen.getByTestId('container');
    });
    test('snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    test('render content', () => {
      existOnScreen(screen.getByTestId('container'));
    });
    test('renders is visible', async () => {
      existOnScreen(child);
    });
    test('render styles', () => {
      const isDark = Appearance.getColorScheme() === 'dark';
      if (isDark) {
        expect(container).toHaveStyle({backgroundColor: '#09265D'});
        return;
      }
      expect(container).toHaveStyle({backgroundColor: '#FFAF33'});
    });
  });
});
