import getCache from '../getCache';

describe('getCache', () => {
  test('returns function', () => {
    expect(typeof getCache('localStorage')).toBe('function');
  })
});