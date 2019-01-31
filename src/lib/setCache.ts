import {Indexable, TStorageName, TUniqId} from '../types';
import CacheMeta from './CacheMeta';

const setCache = (storageName: TStorageName, keyPrefix: string) =>
  function set(uniqId: TUniqId, key: string, data: Indexable) {
    if (typeof window !== 'undefined') {
      try {
        const storage = window[storageName];
        const cacheKey = `${keyPrefix}.${key}`;
        storage.setItem(
          cacheKey,
          JSON.stringify({
            cachedAt: new Date().getTime(),
            data,
            uniqId,
          }),
        );

        const meta = new CacheMeta(keyPrefix, storage);
        meta.setCache(cacheKey);

        return true;
      } catch (err) {
        return false;
      }
    }

    return false;
  };

export default setCache;
