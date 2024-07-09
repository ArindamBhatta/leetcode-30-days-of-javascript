/* 
? Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
? You can assume there are 3 possible input functions: fn(sum), fib, and factorial.

    let callCount = 0;
    const memoizedFn = memoize(function (a, b) {
      callCount += 1;
      return a + b;
    })
    memoizedFn(2, 3) // 5
    memoizedFn(2, 3) // 5
    console.log(callCount) // 1 

function memoize(fn) {
  const chase = {};  //? Initialize an empty object to store cached results.
  return function (...args) {
    const key = JSON.stringify(args); //? Convert the arguments to a JSON string to use as a key [1] [2] [3] --> '[1]' '[2]' '[3]' because property is string
    if (key in chase) { //? Check if the key exists in the chase object.
      return chase[key];    //? If it exists, return the cached result.
    }
    chase[key] = fn(...args); //? If it doesn't exist, call the function and cache the result.
    return chase[key]; //? Return the newly cached result.
  };
}
*/

function memoize(fn) {
  const chase = {}; // {[5]:5}
  return function (...args) {
    const key = JSON.stringify(args); //'[5]'
    if (key in chase) {
      return chase[key];
    }
    chase[key] = fn(...args);
    return chase[key];
  };
}

function factorial(n) {
  if (n <= 1) return null;
  return n;
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));

/*
? Key in Object
const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
? Expected output: true

delete car.make;
if ("make" in car === false) {
  car.make = "Suzuki";
}

console.log(car.make); //?true  "Suzuki";
*/
