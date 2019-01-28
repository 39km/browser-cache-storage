import getCache from './lib/getCache';
import setCache from './lib/setCache';

class SessionCache {
  public static get = getCache('sessionStorage');
  public static set = setCache('sessionStorage');
}

export default SessionCache;
