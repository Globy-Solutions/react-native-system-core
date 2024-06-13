import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/_dimensions';

const minHeight: number = hp(5);
const config = {
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'center',
  minHeight,
  maxHeight: minHeight,
  minWidth: wp(25),

} as const;
const styles = StyleSheet.create({
  tapbarLeft: {
    ...config,
    marginRight: 'auto',
    justifyContent: 'flex-start',
  },
  tapbarRight: {
    ...config,
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  }
});

export default styles;
