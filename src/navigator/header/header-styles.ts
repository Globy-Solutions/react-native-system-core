import {StyleSheet} from 'react-native';

const padding: number = 10;
const minHeight: number = 40;
const config = {
  flexDirection: 'row',
  justifyContent: 'space-between'
} as const;
const styles = StyleSheet.create({
  tapbarRight: {
    ...config,
    minHeight,
    maxHeight: minHeight,
    paddingRight: padding
  }
});

export default styles;
