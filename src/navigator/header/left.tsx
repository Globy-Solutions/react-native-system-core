import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {useRecoilValue} from 'recoil';

import hookRoute from '../../state-management/recoil/router';
import useNavigation from '../hooks/useNavigation';
import styles from './header-styles';

import type {FC} from 'react';
import type {Route} from '../../state-management/recoil/router';
import type {HeaderProps} from './types';

const HeaderLeft: FC<HeaderProps> = ({children}: HeaderProps): JSX.Element => {
  const {goBack} = useNavigation();
  const [btnBack, setBtnBack] = useState<boolean>(true);
  const {name} = useRecoilValue<Route>(hookRoute);

  useEffect(() => {
    setBtnBack(Boolean(name && name === 'HomeScreen'));
  }, [name]);

  return (
    <View style={styles.tapbarRight}>
      {children ?? (
        <Button
          accessibilityLabel="Go Back"
          disabled={btnBack}
          onPress={() => goBack()}
          title="Back"
        />
      )}
    </View>
  );
};

export default HeaderLeft;
