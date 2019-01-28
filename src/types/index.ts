export type TIdentifyKey = string | number;

export interface Indexable {
  [key: string]: any;
  [key: number]: any;
}

export type TStorageName = 'localStorage' | 'sessionStorage';
