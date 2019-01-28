import getCache from './lib/getCache';
import setCache from './lib/setCache';

class LocalCache {
  static get = getCache('localStorage');
  static set = setCache('localStorage');
}

export default LocalCache;