import { renderHook } from '@testing-library/react-hooks';
import { useWindowDimensions } from 'react-native';
import useOrientation from '../../hooks/useOrientation';

jest.mock('react-native', () => ({
  useWindowDimensions: jest.fn(),
}));

describe('useOrientation', () => {
  it('should return "landscape" when width is greater than height', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ height: 500, width: 800 });

    const { result } = renderHook(() => useOrientation());

    expect(result.current).toBe('landscape');
  });

  it('should return "portrait" when width is less than height', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ height: 800, width: 500 });

    const { result } = renderHook(() => useOrientation());

    expect(result.current).toBe('portrait');
  });
});
