import {CACHE_PREFIX} from './constants/caches';
import getCache from './lib/getCache';
import setCache from './lib/setCache';

class SessionCache {
  public static get = getCache('sessionStorage', CACHE_PREFIX);
  public static set = setCache('sessionStorage', CACHE_PREFIX);
}

export default SessionCache;
