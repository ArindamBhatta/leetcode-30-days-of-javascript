/* 
Given a function fn and a time in millisecond t, return a debounce version of that function.

A debounced function is a function whose execution is delayed by t millisecond and whose execution is cancelled if it is called again within that window of time. The debounce function should also receive the passed parameter

for example let's say t = 50ms, and the function was called at 30ms,60ms,and 100ms
the 1st two function called would be cancelled, and the 3rd function called would be execute at 150ms

if instance t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would executed at 135ms.
*/

var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // in timer setTimeout value is there pending state when execute timer have the value
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100); //fn store console.log
log('Hello'); // this line not asynchronous that why it's cancelled
log('Hello'); // next line cancel the previous line before 100ms
log('Hello'); //
log('Hello');
log('Hello');
log('Hello');
log('Hello');
log('Hello');
log('Hello'); //Logged at t=100ms
