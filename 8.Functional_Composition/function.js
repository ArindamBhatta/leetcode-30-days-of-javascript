/* 
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
! The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

? how to write composition of a function
fn1 = x => x+1 
fn2 = x => 2*x
fn = fn1(fn2(4))
? functional programming approach
const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9
*/

var compose = function (functions) {
  return function (x) {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
};

// Define an array of functions
var functions = [
  function f1(x) {
    return x * 2;
  },
  function f2(x) {
    return x + 3;
  },
  function f3(x) {
    return x / 2;
  },
];

// Call the compose function with the array of functions
var composedFunction = compose(functions);

// Call the composed function with an input value
var result = composedFunction(5); // This will execute f3(f2(f1(5)))

console.log(result); // Output will be 11
