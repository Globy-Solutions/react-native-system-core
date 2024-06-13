import { renderHook } from '@testing-library/react-hooks';
import { useNavigation } from 'src/';

// This hook should used in the navigator provider
describe.skip('useNavigation', () => {
  test('should return navigate, goBack, and dispatch functions', () => {
    const {result} = renderHook(() => useNavigation());

    expect(result.current.navigate).toBeInstanceOf(Function);
    expect(result.current.goBack).toBeInstanceOf(Function);
    expect(result.current.dispatch).toBeInstanceOf(Function);
  });
});
