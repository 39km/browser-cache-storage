import getCache from './lib/getCache';
import setCache from './lib/setCache';

class SessionCache {
  static get = getCache('sessionStorage');
  static set = setCache('sessionStorage');
}

export default SessionCache;