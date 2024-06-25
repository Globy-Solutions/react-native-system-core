import { Button, Platform, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { deviceOrientation } from '../../state-management/recoil/router';
import { useThemeProvider } from '../../theme/theme-provider';
import { wp } from '../../utils/_dimensions';
import useNavigation from '../hooks/useNavigation';
import styles from './styles';

import type { DeviceOrientation } from '../../state-management/recoil/router';
import type { HeaderProps } from './types';

const HeaderLeft: FC<HeaderProps> = ({children}: HeaderProps): JSX.Element => {
  const {canGoBack, goBack} = useNavigation();
  const {
    colors: {background}
  } = useThemeProvider();
  const orientation =
    useRecoilValue<keyof typeof DeviceOrientation>(deviceOrientation);

  return (
    <View
      style={[
        styles.tapbarLeft,
        {
          backgroundColor: background ?? 'transparent',
          marginLeft:
            Platform.OS === 'ios' && orientation === 'landscape' ? -45 : -10,
          width: orientation === 'portrait' ? null : wp(25)
        }
      ]}>
      {children ?? (
        <Button
          accessibilityLabel="Go Back"
          disabled={!canGoBack()}
          onPress={() => goBack()}
          title="Back"
        />
      )}
    </View>
  );
};

export default HeaderLeft;
