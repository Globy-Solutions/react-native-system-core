import React from 'react';

import {
  useNavigation,
  useThemeProvider
} from '@globy-solutions/react-native-system-core';
import {Button, Text, View} from 'react-native';

const Home = () => {
  const {navigate} = useNavigation();
  const {
    colors: {background}
  } = useThemeProvider();
  return (
    <View style={{backgroundColor: background}}>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigate('About')} />
    </View>
  );
};

export default Home;
