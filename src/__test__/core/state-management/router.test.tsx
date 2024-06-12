import router from 'src/state-management/recoil/router';

describe('router', () => {
  test('should have correct key', () => {
    expect(router.key).toBe('hookRoute');
  });
});

describe.skip('hookRoute', () => {
  test('should get value from router', () => {});
});
