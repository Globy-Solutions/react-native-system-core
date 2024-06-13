import { Platform, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { deviceOrientation } from '../../state-management/recoil/router';
import { useThemeProvider } from '../../theme/theme-provider';
import { wp } from '../../utils/_dimensions';
import styles from './header-styles';

import type { FC } from 'react';
import type { DeviceOrientation } from '../../state-management/recoil/router';
import type { HeaderProps } from './types';

const HeaderRight: FC<HeaderProps> = ({ children }: HeaderProps): JSX.Element => {
  const { colors: { background } } = useThemeProvider();
  const orientation = useRecoilValue<keyof typeof DeviceOrientation>(deviceOrientation);

  return <View style={[styles.tapbarRight, {
    backgroundColor: background ?? 'transparent',
    marginRight: (Platform.OS === 'ios' && orientation === 'landscape') ?  -45 : -10,
    width: orientation === 'portrait' ? null : wp(25)
  }]}>{children}</View>;
};

export default HeaderRight;
