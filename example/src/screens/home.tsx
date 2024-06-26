import { Button } from '@globy-solutions/react-native-system-components';
import { useThemeProvider } from '@globy-solutions/react-native-system-core';
import { Text, View } from 'react-native';
import screenStyles from './styles';

import type { NavigatorProps } from '../../../src/navigator/types';

const Home = ({ navigation: { navigate } }: NavigatorProps): JSX.Element => {
  const {
    colors: {background}, fonts: {extraLarge}
  } = useThemeProvider();

  return (
    <View style={[screenStyles.centered, {backgroundColor: background}]}>
      <Text style={[extraLarge, { marginVertical: 20 }]}>Home</Text>
      <Button title="About" onPress={() => navigate('About')} />
    </View>
  );
};

export default Home;
