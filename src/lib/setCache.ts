import {Indexable, TIdentifyKey, TStorageName} from '../types';

const setCache = (storageName: TStorageName, keyPrefix: string) =>
  function set(identifyKey: TIdentifyKey, key: string, data: Indexable) {
    if (typeof window !== 'undefined') {
      try {
        const storage = window[storageName];
        const cacheKey = `${keyPrefix}.${key}`;
        storage.setItem(
          cacheKey,
          JSON.stringify({
            cachedAt: new Date().getTime(),
            data,
            identifyKey,
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
