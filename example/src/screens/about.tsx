import {
  useNavigation,
  useThemeProvider
} from '@globy-solutions/react-native-system-core';
import {Button, Text} from 'react-native';

const About = () => {
  const {navigate} = useNavigation();
  const {
    fonts: {extraLarge}
  } = useThemeProvider();
  return (
    <>
      <Text style={extraLarge}>About</Text>
      <Button title="Home" onPress={() => navigate('Home')} />
    </>
  );
};

export default About;
