import {Appearance, Platform} from 'react-native';
import {darkTheme, defaults, lightTheme} from 'src/styles/theme';

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
