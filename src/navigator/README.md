## Suggested way to implement the screens.

should be implemented in the following way:

```jsx
import { Navigator, Screen } from './CommonNavigator'

import rootHeaderScreen from './screenOptions'
import AuthScreen from '@screens/auth'

import type { ScreenType } from './types'

const screens: ScreenType[] = [
  {
    component: AuthScreen,
    name: 'AuthScreen'
  },
  {
    component: NotificationScreen,
    name: 'NotificationScreen'
  }
]
const HomeStack = (): JSX.Element => (
  <Screen name="HomeStack" options={{ headerShown: false }}>
    {() => (
      <Navigator initialRouteName="AuthScreen" screenOptions={rootHeaderScreen({})}>
        {screens.map((props: Omit<ScreenType, 'options'>) => (
          <Screen key={props.name} {...props} />
        ))}
      </Navigator>
    )}
  </Screen>
)

export default HomeStack
```