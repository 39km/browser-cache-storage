import {Indexable, TStorageName, TUniqId} from '../types';

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

        return true;
      } catch (err) {
        return null;
      }
    }

    return null;
  };

export default setCache;
