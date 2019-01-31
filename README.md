# browser-cache-storage
cache data with local storage or session storage simply

# Features
1. get and set data with localStorage or sessionStorage
2. when set data, automatically save cached time and compare data is expired when get data


# Features in Development
1. save meta data for clear all data that saved with browser-cache-storage in the localStorage (or sessionStorage)


# Installing
```
$ npm install --save browser-cache-storage
```
```
$ yarn add browser-cache-storage
```

# Document
**(LocalCache || SessionCache).set**  
  
| paramters | description                                                                                                                           | required |
|-----------|------------------------------------------------------------------------------------------                                             |----------|
| uniqId    | identify when or who save the cache data.                                                                                             | O        |
| cacheKey  | key of cache data. 'cache.' prefix will attached automatically. it saved in localStorage(or sessionStorage) like `cache.${cacheKey}`. | O        |
| data      | data want to save                                                                                                                     | O        |

  
**(LocalCache || SessionCache).get**  
  
| paramters 	| description 	| required 	|
|--------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------	|
| uniqId 	| identify the cache data is valid. if saved data's uniqId is different with uniqId which is passed to get functions parameter,  then get method will return null. 	| O 	|
| cacheKey 	| key of cache data. 'cache.' prefix will attached automatically. if cacheKey is 'boardData' then LocalCache.get method return localStorage.getItem('cache.boardData') 	| O 	|
| preserveTime 	| relative time to check wheter the saved data is valid. it used like the "It's valid during {preserveTime} after saved". if you set preserveTime to 6000, then the cached data is valid only in 6 second after data saved. if expired then get method return null and delete the data.  !! it is not automatically delete with timer like cookie. it only delete when you access data with get method. 	| O 	|
  
**(LocalCache || SessionCache).clear**
*No Paramters*
delete all cache data which saved through browser-cache-storage


# Examples
```
const cacheKey = 'myCacheData';
var data = {
    hi: 'cache',
};
LocalCache.set(sessionId, cacheKey, data);
console.log(LocalCache.get(sessionId, cacheKey, data);
LocalCache.del(cacheKey);
console.log(LocalCache.get(sessionId, cacheKey, data);
console.log(localStorage.getItem(`cache.${cacheKey}`));
```

```
const cacheKey = 'myCacheData';
var data = {
    hi: 'cache',
};
SessionCache.set(sessionId, cacheKey, data);
console.log(SessionCache.get(sessionId, cacheKey, data);
SessionCache.del(cacheKey);
console.log(SessionCache.get(sessionId, cacheKey, data);
console.log(sessionStorage.getItem(`cache.${cacheKey}`));
```

```
LocalCache.clear();
SessionCache.clear();
```