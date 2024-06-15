/**
 * Custom hook that returns the current orientation of the device.
 * @returns The current orientation of the device ('landscape' or 'portrait').
*/

import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const {height, width} = useWindowDimensions();

  return width > height ? 'landscape' : 'portrait';
};

export default useOrientation;
