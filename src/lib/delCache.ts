import {TStorageName} from '../types';

const delCache = (storageName: TStorageName, keyPrefix: string) =>
  function del(key: string) {
    if (typeof window !== 'undefined') {
      try {
        const cacheKey = `${keyPrefix}.${key}`;
        const storage = window[storageName];
        storage.removeItem(cacheKey);
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  };

export default delCache;