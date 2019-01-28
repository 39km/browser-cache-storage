import getCache from './lib/getCache';
import setCache from './lib/setCache';

class LocalCache {
  private static get = getCache('localStorage');
  private static set = setCache('localStorage');
}

export default LocalCache;