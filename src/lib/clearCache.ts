import {TStorageName} from '../types';
import CacheMeta from './CacheMeta';

const clearCache = (storageName: TStorageName, keyPrefix: string) =>
  function clear() {
    if (typeof window !== 'undefined') {
      try {
        const storage = window[storageName];
        const meta = new CacheMeta(keyPrefix, storage);
        meta.clear();
        return true;
      } catch (err) {
        return false;
      }
    }

    return false;
  };

export default clearCache;
