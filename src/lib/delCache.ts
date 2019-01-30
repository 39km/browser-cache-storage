import {TStorageName} from '../types';

const delCache = (storageName: TStorageName, keyPrefix: string) =>
  function del(key: string) {
    if (typeof window !== 'undefined') {
      try {
        const cacheKey = `${keyPrefix}.${key}`;
        const storage = window[storageName];
        storage.removeItem(cacheKey);
      } catch (err) {
        return null;
      }
    }
    return false;
  };

export default delCache;