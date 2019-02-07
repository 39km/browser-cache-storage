export const TYPE_NUMBER = 'number';
export const TYPE_BOOLEAN = 'boolean';
export const TYPE_STRING = 'string';

export const TYPE_FUNCTION = 'function';

export const TYPE_OBJECT = 'object';

export const INSTANCE_OBJECT = 'Object';
export const INSTANCE_ARRAY = 'array';

export const TYPE_MAP = {
  [INSTANCE_ARRAY]: Array,
  [INSTANCE_OBJECT]: Object,
  [TYPE_BOOLEAN]: Boolean,
  [TYPE_FUNCTION]: Function,
  [TYPE_NUMBER]: Number,
  [TYPE_OBJECT]: Object,
  [TYPE_STRING]: String,
};

