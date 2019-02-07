import 'jest-localstorage-mock';
import {CACHE_FIELD_TYPE, CACHE_KEYS, CACHE_PREFIX} from '../../constants/caches';
import {TYPE_MAP} from '../../constants/tests';
import {Indexable} from '../../types';
import {defaultMeta} from '../CacheMeta';
import getCache from '../getCache';
import setCache from '../setCache';

describe('getCache', () => {
  test('returns function', () => {
    expect(typeof getCache(
      'localStorage',
      CACHE_PREFIX,
    )).toBe('function');
  });
});

describe('getCache()', () => {
  beforeEach(() => {
    window.localStorage.clear();
    // jest.resetAllMocks();
  });
  test('remove cache data and return null if saved object\'s format is not match with configured format', () => {

    for (let i = 0, len = CACHE_KEYS.length; i < len; i++) {
      const iKey = CACHE_KEYS[i];
      // @ts-ignore
      const iVal = TYPE_MAP[CACHE_FIELD_TYPE[iKey]]();
      window.localStorage.setItem(`test_${i}_0`, JSON.stringify({
        [iKey]: iVal,
      }));

      for (let j = i + 1, jen = len; j < jen; j++) {
        const jKey = CACHE_KEYS[j];
        // @ts-ignore
        const jVal = TYPE_MAP[CACHE_FIELD_TYPE[jKey]]();
        const cur = {} as Indexable;
        cur[iKey] = iVal;
        cur[jKey] = jVal;
        window.localStorage.setItem(`test_${i}_${j}`, JSON.stringify(cur));
      }
    }

    Object
      .keys(window.localStorage.__STORE__)
      .forEach(key => {
        expect(getCache('localStorage', CACHE_PREFIX)
        ('uniq', key)).toBeNull();
      });

  });

  test('return null if parameter\'s uniqId and saved uniqId is different', () => {
    const cacheData = {key: 'value'};
    setCache('localStorage', CACHE_PREFIX)('uniq', 'test', cacheData);
    expect(getCache(
      'localStorage',
      'cache',
    )('different', 'test')).toBeNull();
  });

  test(`save to ${CACHE_PREFIX}._meta when the key is not registered`, () => {
    window.localStorage.setItem('cache._meta', JSON.stringify(defaultMeta()));
    getCache(
      'localStorage',
      'cache',
    )('uniq', 'test');
    expect(JSON.parse(window.localStorage.getItem('cache._meta') as string))
      .toMatchObject({
        caches: ['test'],
      });
  });
});
