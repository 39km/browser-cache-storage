import {Indexable, TIdentifyKey, TStorageName} from '../types';

const setCache = (storageName: TStorageName) =>
  function set(identifyKey: TIdentifyKey, key: string, data: Indexable) {
    if (typeof window !== 'undefined') {
      try {
        const storage = window[storageName];

        storage.setItem(key, JSON.stringify({
          cachedAt: new Date().getTime(),
          identifyKey,
          data,
        }));

        return true;
      } catch (err) {
        console.error(err);

        return null;
      }
    }

    return null;
  };

export default setCache;