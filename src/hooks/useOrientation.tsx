import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const { height, width } = useWindowDimensions();

  return width > height ? 'landscape' : 'portrait';
};

export default useOrientation;
