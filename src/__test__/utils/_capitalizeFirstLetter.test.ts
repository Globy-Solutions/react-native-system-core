import capitalizeFirstLetter, {
  capitalize
} from 'src/utils/_capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a single word', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });

  test('should capitalize the first letter of each word in a sentence', () => {
    const result = capitalizeFirstLetter('hello world');
    expect(result).toBe('HW');
  });

  test('should handle empty string', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });
});
