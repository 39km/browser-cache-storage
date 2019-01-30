interface ICacheMeta {
  caches: string[];
}

class CacheMeta {
  public static delCache(keyPrefix: string) {
    if (typeof window !== 'undefined') {
      const metaCacheKey = `${keyPrefix}._meta`;


    }
  }

  public static setCache(keyPrefix: string) {
    if (typeof window !== 'undefined') {
      const metaCacheKey = `${keyPrefix}._meta`;

    }
  }
}