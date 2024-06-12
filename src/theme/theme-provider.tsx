/**
 * Renders a theme provider component that manages the theme state and provides it to its children.
 *
 * @param children - The child components to be wrapped by the theme provider.
 * @returns The rendered theme provider component.
 */

import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';

import {darkTheme, lightTheme} from '../styles/theme';

import type {ThemeDataProps, ThemeProps, ThemeProviderProps} from './types';

const ThemeProviderContext = createContext<ThemeDataProps | undefined>(
  undefined
);

export const useThemeProvider = (): ThemeDataProps => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }
  return context;
};

export default function ThemeProvider({
  children
}: Readonly<ThemeProviderProps>): JSX.Element {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeProps>(lightTheme);

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    isDark ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDark]);

  const contextValue: ThemeDataProps = useMemo(
    () => ({
      changeTheme: setIsDark,
      isDark,
      ...theme
    }),
    [setIsDark, isDark, theme]
  );

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
