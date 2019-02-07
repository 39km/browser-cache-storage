import {INSTANCE_OBJECT, TYPE_NUMBER} from './tests';

export const CACHE_KEYS = ['data', 'cachedAt', 'uniqId'];

export const CACHE_FIELD_TYPE = {
  cachedAt: TYPE_NUMBER,
  data: INSTANCE_OBJECT,
  uniqId: TYPE_NUMBER,
};
export const CACHE_PREFIX = 'cache';
