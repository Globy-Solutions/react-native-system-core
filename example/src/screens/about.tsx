import { Button, Modal } from '@globy-solutions/react-native-system-components';
import { useThemeProvider } from '@globy-solutions/react-native-system-core';
import { useState } from 'react';
import { Text, View } from 'react-native';
import screenStyles from './styles';

import type { NavigatorProps } from 'src/navigator/types';

const About = ({ navigation: { navigate } }: NavigatorProps): JSX.Element => {
  const {
    colors: { background }, fonts: { extraLarge }
  } = useThemeProvider();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const showModal = () => setModalVisible(!modalVisible);

  return (<>
    <View style={[screenStyles.centered, { backgroundColor: background }]}>
      <Text style={[extraLarge, { marginVertical: 20 }]}>About</Text>
      <Button style={{ marginVertical: 20 }} title="Home" onPress={() => navigate('Home')} />
      <Button title="Show Modal" onPress={showModal} />
    </View>
    <Modal show={modalVisible} onClose={showModal} style={screenStyles.modal}>
      <Text>Hello World!</Text>
    </Modal>
  </>);
};

export default About;
