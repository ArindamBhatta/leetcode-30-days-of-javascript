/* 
write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key
* so we have some key value pair and every kay have a time key is 1 value is apple for a particular time then it's expired 

? The class has three public methods:
! 1. set if a key already exist we want to return true and if it doesn't already exist we want to return false
set(key,value,duration):accept an integer key, an integer value, and a duration in millisecond. Once the duration has elapsed, the key should be inaccessible. and The method should return true. if the same un-expired key already exists and false otherwise. //?Both the value and duration should be overwritten if the key already exists.
! 2.get
get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
! 3.count
count(): returns the count of un-expired keys.

actions = ["TimeLimitedCache", "set", "get", "count", "get"]
? TimeLimitedCache is our constructor function and his 3method
values = [[], [1, 42, 100], [1], [], [1]]
1. Empty array
? timeDelays = [0, 0, 50, 50, 150]
then called set 1 is key, 42 is value, and 100 is millisecond
? then get count again get
At t=0, the cache is constructed.
At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist value 42 remain there so false is returned.
At t=50, key=1 is requested and the value of 42 is returned.
At t=50, count() is called and there is one active key in the cache.
At t=100, key=1 expires.
At t=150, get(1) pass 1 is called but -1 is returned because the cache is empty.
key-value pair (1: 42)  that why we have problem that why map
? Output: [null, false, 42, 1, -1]
* let myMap = new Map(); read it in mdn 

var TimeLimitedCache = function () {};
TimeLimitedCache.prototype.set = function (key, value, duration) {};
TimeLimitedCache.prototype.get = function (key) {};
TimeLimitedCache.prototype.count = function () {};

function Dog(name) {
  this.name = name;
}
const dog1 = new Dog('bull dog');
const dog2 = new Dog('Coper');
*/

/*
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      clearTimeout(alreadyExists.timeoutId);
    }
! step: 1 separate a function remove the key after a duration
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeoutId });

    return Boolean(alreadyExists);
  }
  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }
  count() {
? how many key value pair are there count return that
    return this.cache.size;
  }
}

*/

/* 
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    ? why we can't use map.has method, this is also check the boolean value is already exist or not
    if (alreadyExists) {
      ! if already exist then maybe we can some value to true and then here we can return that and if doesn't exist then we return false. so return a Boolean which value is zero that the bug
      ? clear the timeout but hold on timeout clear after a delay if im case
        1 -> "Hello" when it's event loop for 1000ms i can change the value 
        1 -> "bye" 2000ms so for second insertion, we should clear the previous timeout
        ? so clear the timeout from hear
    }

    this.cache.set(key, value); //? so value can be changed when it's store in to cache so needs to set key:{value:timeoutId}

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    return Boolean(alreadyExists); //as lon as the condition is undefined, null or Zero this should work then are we return this that give us error and if cache in the event loop then it's return value if we can't do clear timeout then? that why we can't use map.has method, line 81
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key);
    return -1;
  }
  count() {
    return this.cache.size;
  }
} */

/*
 class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      // how could i remove?  i need the timeoutId then we may be create the second map or we use the previous one this.cache = new map
      clearTimeout(alreadyExists.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(
      key, //! use this single map again and store a object
      { value: value, timeoutId: timeoutId }
    );

    return Boolean(alreadyExists);
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value; //now this.cache is an object so we can use .value
    return -1;
  }
  count() {
    return this.cache.size;
  }
}
 */

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      clearTimeout(alreadyExists.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value: value, timeoutId: timeoutId });

    return Boolean(alreadyExists);
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value; //now this.cache is an object so we can use .value
    return -1;
  }
  count() {
    return this.cache.size;
  }
}

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 1000)); //false because it's doesn't wait for setTimeout
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());

// Setting the same key before it expires
setTimeout(() => {
  console.log(timeLimitedCache.set(1, 84, 1000)); // true, because key 1 already exists and hasn't expired
  console.log(timeLimitedCache.get(1)); // 84, value has been updated
  console.log(timeLimitedCache.count()); // 1, still one item in the cache
}, 500); // This is less than 1000 ms, so the key hasn't expired yet

setTimeout(() => {
  console.log(timeLimitedCache.set(1, 84, 1000)); // false, because key 1 already expired
  console.log(timeLimitedCache.get(1)); // 84, key 1 is set again with new value
  console.log(timeLimitedCache.count()); // 1, one item in the cache
}, 5000); // This is more than 1000 ms, so the key has expired
