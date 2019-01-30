import {CACHE_PREFIX} from './constants/caches';
import getCache from './lib/getCache';
import setCache from './lib/setCache';

class LocalCache {
  public static get = getCache('localStorage', CACHE_PREFIX);
  public static set = setCache('localStorage', CACHE_PREFIX);
}

export default LocalCache;
