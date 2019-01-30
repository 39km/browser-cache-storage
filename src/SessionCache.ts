import {CACHE_PREFIX} from './constants/caches';
import delCache from './lib/delCache';
import getCache from './lib/getCache';
import setCache from './lib/setCache';

const STORAGE_NAME = 'sessionStorage';

class SessionCache {
  public static get = getCache(STORAGE_NAME, CACHE_PREFIX);
  public static set = setCache(STORAGE_NAME, CACHE_PREFIX);
  public static del = delCache(STORAGE_NAME, CACHE_PREFIX);
}

export default SessionCache;
