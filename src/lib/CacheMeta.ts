import {Indexable} from '../types';

interface ICacheMeta {
  caches: string[];
}

const defaultMeta = () => ({
  caches: [],
});

const META_KEY_VALIDATION: Indexable = {
  caches: Array.isArray,
};

const META_KEYS = Object.keys(META_KEY_VALIDATION);

class CacheMeta {
  private readonly key: string;
  private storage: any;

  constructor(keyPrefix: string, storage: any) {
    this.key = `${keyPrefix}._meta`;
    this.storage = storage;
  }

  public isInMeta(cacheKey: string): [boolean, ICacheMeta] {
    if (typeof window !== 'undefined') {
      let meta: ICacheMeta = {
        caches: [],
      };
      let isIn = true;

      try {
        meta = JSON.parse(this.storage.getItem(this.key));
        if (!this.isValidMeta(meta)) {
          throw new Error();
        }
      } catch (err) {
        this.storage.removeItem(this.key);
        isIn = false;
        meta = defaultMeta();
      } finally {
        isIn = meta.caches.indexOf(cacheKey) !== -1;
      }
      return [isIn, meta];
    }
    return [false, defaultMeta()];
  }

  public delCache(cacheKey: string) {
    const [isIn, meta] = this.isInMeta(cacheKey);
    if (isIn) {
      meta.caches = meta.caches.filter(key => key !== cacheKey);
      this.storage.setItem(this.key, JSON.stringify(meta));
    }
  }

  public setCache(cacheKey: string) {
    const [isIn, meta] = this.isInMeta(cacheKey);
    if (!isIn) {
      meta.caches = [
        ...meta.caches,
        cacheKey,
      ];
      this.storage.setItem(this.key, JSON.stringify(meta));
    }
  }

  private isValidMeta(meta: Indexable) {
    if (typeof meta !== 'object') {
      return false;
    }
    return Object
      .keys(meta)
      .every(key => META_KEYS.indexOf(key) !== -1
        && META_KEY_VALIDATION[key](meta[key as keyof ICacheMeta]));
  }
}

export default CacheMeta;