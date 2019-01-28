import getCache from '../getCache';

describe('setCache', () => {
  test('return function', () => {
    expect(typeof getCache('localStorage')).toBe('function');
  });
});
