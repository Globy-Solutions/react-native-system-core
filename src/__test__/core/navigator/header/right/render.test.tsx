import { Text } from 'react-native';

import { Provider, render, screen } from 'src/__test__/utils/customRender';
import HeaderRight from 'src/navigator/header/right';


describe('HeaderRight - Render', () => {

  let headerRight: any;
  beforeAll(() => {
    const { getByTestId } = render(<Provider>
      <HeaderRight>
        <Text>Test Child</Text>
      </HeaderRight>
    </Provider>);
    headerRight = getByTestId('headerRight');
  });

  test('snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('renders children correctly', () => {
    expect(headerRight).toBeTruthy();
  });

});
