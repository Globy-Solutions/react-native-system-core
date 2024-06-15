import { Appearance, Platform } from 'react-native';
import { darkTheme, defaults, fontFamily, fonts, lightTheme, scale } from 'src/styles/theme';

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
    switch (Platform.OS) {
      case 'ios':
        expect(fontFamily).toBe('Arial Hebrew');
        expect(defaults.fonts.extraLarge.fontFamily).toBe(fontFamily);
        break;
      case 'android':
        expect(fontFamily).toBe('Mooli Regular');
        expect(defaults.fonts.extraLarge.fontFamily).toBe(fontFamily);
        break;
      default:
        expect(fontFamily).toBeUndefined();
    }
  });
  test('should return defaults values, scale & fonts', () => {
    expect(defaults.fonts).toStrictEqual(fonts);
    expect(defaults.elevation).toBe(5);
    expect(defaults.borderRadius).toBe(15);
    expect(scale).toBe(Platform.OS === 'ios' ? 1 : 0.8);
  });
});
