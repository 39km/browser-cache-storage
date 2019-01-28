import getCache from './lib/getCache';
import setCache from './lib/setCache';

class LocalCache {
  public static get = getCache('localStorage');
  public static set = setCache('localStorage');
}

export default LocalCache;
