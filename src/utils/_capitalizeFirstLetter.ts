/**
 * Capitalizes the first letter of a given string.
 *
 * @param text - The string to capitalize.
 * @returns The input string with the first letter capitalized.
 */

export const capitalize = (text: string) => {
  const firstLetter = text.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = text.slice(1);
  return firstLetterCap + remainingLetters;
};

/**
 * Capitalizes the first letter of a given text.
 * If the text contains multiple words, it capitalizes the first letter of each word.
 *
 * @param text - The text to capitalize.
 * @returns The capitalized text.
 */

const capitalizeFirstLetter = (text: string) => {
  const textArr = /\b/i.test(text);
  if (textArr) {
    const arr = text.split(' ');
    return [arr[0], arr[1]]
      .map(t => capitalize(t as string).charAt(0))
      .join('');
  } else {
    return capitalize(text);
  }
};

export default capitalizeFirstLetter;
