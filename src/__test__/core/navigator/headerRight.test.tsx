import {Text} from 'react-native';

import HeaderRight from 'src/navigator/header/right';

import {Provider, render, screen} from 'src/__test__/utils/customRender';
// import styles from 'src/navigator/header/header-styles';
// import { wp } from 'src/utils/_dimensions';

import type {ReactTestInstance} from 'react-test-renderer';

const Header = () => (
  <Provider>
    <HeaderRight>
      <Text>Test Child</Text>
    </HeaderRight>
  </Provider>
);

const renderHeader = () => {
  render(<Header />);
  return screen.getByText('Test Child');
};
/* 
const updateStyleBasedOnOrientation = (orientation: string) => {
  renderHeader();
  const headerRight = screen.getByText('Test Child');
  const container = headerRight.parent?.parent;
  jest.mock('src/utils/useOrientation', () => ({
    useOrientation: () => ({ orientation })
  }));

  return container?.props.style;
};
 */
describe('HeaderRight', () => {
  describe('Render', () => {
    let headerRight: ReactTestInstance;
    beforeEach(() => {
      headerRight = renderHeader();
    });
    test('snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    test('renders children correctly', () => {
      expect(headerRight).toBeTruthy();
    });
  });
  /* 
  describe('Styles', () => {
    test('updates style based on orientation portrait', () => {
      const style = updateStyleBasedOnOrientation('portrait');
      expect(style).toEqual([
        styles.tapbarRight,
        { width: wp(50) }
      ]);
    });
    test('updates style based on orientation landscape', () => {
      const style = updateStyleBasedOnOrientation('landscape');
      expect(style).toEqual([
        styles.tapbarRight,
        { width: wp(70) }
      ]);
    });
  });
   */
});
