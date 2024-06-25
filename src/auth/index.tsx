import { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import auth, { signInAnonymously, signOut } from './auth';

import type { FunctionComponent, ReactNode } from 'react';
import type { User } from './types/auth';

const AuthScreen: FunctionComponent<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user: User) => {
      setUser(user);
      if (initializing) setInitializing(false)
    });

    return () => { subscriber };
  }, []);

  if (!user?.uid) {
  
    return (
      <View>
        <Button
          title="Facebook Sign-In"
          onPress={() => console.log('Signed in with Facebook!')}
        />
        <Button
          title="Google Sign-In"
          onPress={() => console.log('Signed in with Google!')}
        />
        <Button
          title="Guest Sign-In"
          onPress={() => signInAnonymously().then(() => console.log('User signed anonymously!'))}
        />
      </View>
    );
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome {user?.displayName}</Text>
      {user?.photoURL && (<Image source={{ uri: user?.photoURL }} />)}
      {children}
      <Button
        title="Sign-Out"
        onPress={signOut}
      />
    </View>
  );
}

export default AuthScreen