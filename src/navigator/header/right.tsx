import {useEffect, useState} from 'react';
import {View} from 'react-native';

import useOrientation from '../../hooks/useOrientation';
import {useThemeProvider} from '../../theme/theme-provider';
import {wp} from '../../utils/_dimensions';
import styles from './header-styles';

import type {FC} from 'react';
import type {HeaderProps} from './types';

const HeaderRight: FC<HeaderProps> = ({children}: HeaderProps): JSX.Element => {
  const orientation = useOrientation();
  const {fonts} = useThemeProvider();
  const [{width}, setStyle] = useState({
    fontSize: fonts.small.fontSize,
    width: wp(50)
  });

  useEffect(() => {
    const isPortrait = orientation === 'portrait';
    const style = {
      fontSize: isPortrait ? fonts.small.fontSize : fonts.large.fontSize,
      width: isPortrait ? wp(50) : wp(70)
    };
    setStyle(style);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);

  return <View style={[styles.tapbarRight, {width}]}>{children}</View>;
};

export default HeaderRight;
