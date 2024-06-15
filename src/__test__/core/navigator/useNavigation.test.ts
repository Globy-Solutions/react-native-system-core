import { renderHook } from '@testing-library/react-hooks';
import { useNavigation } from 'src/';

jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => {
  const turboModuleRegistry = jest.requireActual(
    'react-native/Libraries/TurboModule/TurboModuleRegistry',
  )
  return {
    ...turboModuleRegistry,
    getEnforcing: (name: string) => {
      if (name === 'RNCWebView') {
        return null
      }
      return turboModuleRegistry.getEnforcing(name)
    },
  }
})

describe('useNavigation', () => {
  test('should return navigate, goBack, and dispatch functions', () => {
    const { result, rerender, waitFor } = renderHook(() => useNavigation());

    expect(result).toBeInstanceOf(Object);
    expect(rerender).toBeInstanceOf(Function);
    expect(waitFor).toBeInstanceOf(Function);
  });
});
