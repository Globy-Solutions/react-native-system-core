import {useThemeProvider} from '@globy-solutions/react-native-system-core';
import {Button, Text, View} from 'react-native';
import screenStyles from './styles';

import type {FC} from 'react';
import type {NavigatorProps} from 'src/navigator/types';

const Home: FC<NavigatorProps> = ({navigation: {navigate}}): JSX.Element => {
  const {
    colors: {background}
  } = useThemeProvider();
  return (
    <View style={[screenStyles, {backgroundColor: background}]}>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigate('About')} />
    </View>
  );
};

export default Home;
