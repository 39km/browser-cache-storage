import getCache from './lib/getCache';
import setCache from './lib/setCache';

class SessionCache {
  private static get = getCache('sessionStorage');
  private static set = setCache('sessionStorage');
}

export default SessionCache;