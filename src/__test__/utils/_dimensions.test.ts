import {
  getFontLineHeight,
  height,
  horizontalScale,
  hp,
  moderateScale,
  verticalScale,
  width,
  wp
} from 'src/utils/_dimensions';

describe('dimensions', () => {
  describe('getFontLineHeight', () => {
    test('should return font line height to dp', () => {
      const result = getFontLineHeight(10);
      expect(result).toBe(13.3);
    });
  });
  describe('height', () => {
    test('should return height screen to dp', () => {
      expect(height).toBe(1334);
    });
  });
  describe('horizontalScale', () => {
    test('should return horizontal scale to dp', () => {
      const result = horizontalScale(10);
      expect(result).toBe(20);
    });
  });
  describe('heightPercentageToDP', () => {
    test('should convert height percentage to dp', () => {
      const result = hp('50%');
      expect(result).toBe(667);
    });
    test('should handle number input', () => {
      const result = hp(25);
      expect(result).toBe(333.5);
    });
    test('should handle invalid input', () => {
      const result = hp('abc');
      expect(result).toBeNaN();
    });
  });
  describe('moderateScale', () => {
    test('should return moderate scale on 0.5 to dp', () => {
      const result = moderateScale(10);
      expect(result).toBe(15);
    });
  });
  describe('verticalScale', () => {
    test('should return vertical scale to dp', () => {
      const result = verticalScale(10);
      expect(result).toBe(20);
    });
  });
  describe('width', () => {
    test('should return width screen to dp', () => {
      expect(width).toBe(750);
    });
  });
  describe('widthPercentageToDP', () => {
    test('should convert height percentage to dp', () => {
      const result = wp('50%');
      expect(result).toBe(375);
    });
    test('should handle number input', () => {
      const result = wp(25);
      expect(result).toBe(187.5);
    });
    test('should handle invalid input', () => {
      const result = wp('abc');
      expect(result).toBeNaN();
    });
  });
});
