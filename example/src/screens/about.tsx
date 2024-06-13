import {useThemeProvider} from '@globy-solutions/react-native-system-core';
import {Button, Modal, Text, View} from 'react-native';
import screenStyles from './styles';

import type {FC} from 'react';
import type {NavigatorProps} from 'src/navigator/types';

const About: FC<NavigatorProps> = ({navigation: {navigate}}): JSX.Element => {
  const {
    colors: {primary},
    fonts: {extraLarge}
  } = useThemeProvider();
  return (
    <>
      <View style={[screenStyles, {backgroundColor: primary}]}>
        <Text style={extraLarge}>About</Text>
        <Button title="Home" onPress={() => navigate('Home')} />
        <Button
          title="Modal"
          onPress={() => console.log('Open Modal from components')}
        />
      </View>
      <Modal />
    </>
  );
};

export default About;
