import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const detectOrientation = () => {
      const {width, height} = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', detectOrientation);

    // @ts-ignore
    return () => Dimensions.removeEventListener('change', detectOrientation);
  }, []);

  return orientation;
};

export default useOrientation;
