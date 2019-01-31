import {CACHE_PREFIX} from './constants/caches';
import clearCache from './lib/clearCache';
import delCache from './lib/delCache';
import getCache from './lib/getCache';
import setCache from './lib/setCache';

const STORAGE_NAME = 'localStorage';

class LocalCache {
  public static get = getCache(STORAGE_NAME, CACHE_PREFIX);
  public static set = setCache(STORAGE_NAME, CACHE_PREFIX);
  public static del = delCache(STORAGE_NAME, CACHE_PREFIX);
  public static clear = clearCache(STORAGE_NAME, CACHE_PREFIX);
}

export default LocalCache;
